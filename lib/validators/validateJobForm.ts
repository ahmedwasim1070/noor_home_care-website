// Imports
// Types
import { jobFormData, jobFormErrors } from "@/types";

/**
 * 
 * @param formData - Object of data of job form
 * @param setFormErrors - Object of error in job form
 * @returns - If error sends/set error reason | null 
 */

// 
export const validateJobForm = (formData: jobFormData, setFormErrors?: React.Dispatch<React.SetStateAction<jobFormErrors>>): string | null => {
    // Name Validation
    if (typeof formData.fullName !== "string" || formData.fullName.length < 3 || formData.fullName.length > 50) {
        const error = "Name must be between 3 and 50 characters.";
        setFormErrors?.((prev) => ({ ...prev, fullName: error }));
        return error;
    }

    // Email Validation
    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (formData.email.length === 0 || !formData.email.match(EMAIL_REGEX)) {
        const error = "Please enter a valid email address.";
        setFormErrors?.((prev) => ({ ...prev, email: error }));
        return error;
    }

    // Phone Validation
    const CONTACT_REGEX = /^\+?[0-9]{7,15}$/;
    if (
        formData.phoneNumber.length > 0 &&
        !formData.phoneNumber.match(CONTACT_REGEX)
    ) {
        const error = "Please enter a valid phone number (digits only).";
        setFormErrors?.((prev) => ({ ...prev, phoneNumber: error }));
        return error;
    }

    // CV Validation
    if (!formData.cv || formData.cv.type !== 'application/pdf') {
        const error = "Please upload your CV before submitting.";
        setFormErrors?.((prev) => ({ ...prev, cv: error }));
        return error;
    } else {
        const maxSizeInBytes = 5 * 1024 * 1024;
        if (formData.cv.size > maxSizeInBytes) {
            const error = "File size exceeds the 5MB limit.";
            setFormErrors?.((prev) => ({
                ...prev,
                cv: error,
            }));
            return error;
        }
    }

    return null;
}