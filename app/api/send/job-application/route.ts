// Imports
import { NextRequest, NextResponse } from "next/server";
// Types
import { ApiResponse, jobFormData } from "@/types";
// Lib
import { ApiError } from "@/lib/error/ApiError";
import { validateJobForm } from "@/lib/validators";
// Resend
import { Resend } from "resend";
// Email
import { loadTemplate } from "@/emails/loadTemplate";
import { renderTemplate } from "@/emails/renderTemplate";

// 
export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const userData: jobFormData = {
            fullName: formData.get("fullName") as string,
            email: formData.get("email") as string,
            phoneNumber: formData.get("phoneNumber") as string,
            cv: formData.get("cv") as File | null,
        }
        const formError = validateJobForm(userData);
        if (formError) {
            throw new ApiError(formError, 400)
        }

        // UserInfo
        const userInfo = {
            name: userData.fullName,
            email: userData.email,
            phone: userData.phoneNumber,
        }

        // Ready HTML for apply job
        const rawApplyJobHtml = await loadTemplate('apply-job.html');
        const applyJobHtml = renderTemplate(rawApplyJobHtml, userInfo);

        // Load Resend
        const resend = new Resend(process.env.RESEND_API);

        // 
        const sentApplicationResponse = await resend.emails.send({
            from: 'Noor Home Care <jobs@noorhomecare.co.uk>',
            to: `${process.env.ADMIN_MAILING_ADDRESS}`,
            subject: 'Someone Applied for Job at Noor Home Care.',
            html: applyJobHtml,
            attachments: [
                {
                    filename: `${userInfo.name.trim()}-cv.pdf`,
                    content: Buffer.from(await userData.cv!.arrayBuffer()),
                }
            ]
        });
        if (sentApplicationResponse.error != null && sentApplicationResponse.error.statusCode != null) {
            throw new ApiError("Error from Mail server - Error Sending Application.", sentApplicationResponse.error.statusCode);
        }

        // Ready HTML for confirmation 
        const rawConfirmationHtml = await loadTemplate('job-confirmation.html');
        const confirmationHtml = renderTemplate(rawConfirmationHtml, userInfo);

        // 
        const sentConfirmationResponse = await resend.emails.send({
            from: 'Noor Home Care <noreply@noorhomecare.co.uk>',
            to: `${userInfo.email}`,
            subject: 'You applied for Job at Noor Home Care.',
            html: confirmationHtml,
        });
        if (sentConfirmationResponse.error != null && sentConfirmationResponse.error.statusCode != null) {
            throw new ApiError("Error from Mail server - Error Sending Confirmation Message.", sentConfirmationResponse.error.statusCode);
        }

        return NextResponse.json<ApiResponse<null>>({
            success: true,
            status: 200,
            message: "Successfully Submited Job Application.",
            data: null,
        });
    } catch (error) {
        // Status
        const status = error instanceof ApiError ? error.status : 500;
        // Message
        const message =
            error instanceof ApiError ? error.message : "Unexpected error.";
        // 
        console.error("Error from api/send/job-application", {
            message,
            status,
            time: new Date().toISOString(),
        })
        // 
        return NextResponse.json<ApiResponse<never>>({
            success: false,
            status,
            message,
        });
    }
}