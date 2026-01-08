// Imports
import { NextRequest, NextResponse } from "next/server";
// Types
import { ApiResponse, applyJobFormData } from "@/types";
// Lib
import { ApiError } from "@/lib/error/ApiError";
// Resend
import { Resend } from "resend";

// 
export async function POST(request: NextRequest) {
    try {
        const body: applyJobFormData = await request.json();
        const { fullName, email, phoneNumber, cv } = body;

        const resend = new Resend(process.env.RESEND_API);
        resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'ahmedwasim1070@gmail.com',
            subject: 'Hello World',
            html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
        });
    } catch (error) {
        // Status
        const status = error instanceof ApiError ? error.status : 500;
        // Message
        const message =
            error instanceof ApiError ? error.message : "Unexpected error.";
        // 
        console.error("Error from api/send/user/job-application", {
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