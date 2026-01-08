// Form data
// Apply job Form
export interface applyJobFormData {
    fullName: string;
    email: string;
    phoneNumber: string;
    cv: File | null;
}
export interface applyJobFormError {
    fullName: string | null;
    email: string | null;
    phoneNumber: string | null;
    cv: string | null;
}
export interface applyJobFormInputs {
    label: string;
    name: keyof Omit<applyJobFormData, "cv">;
    placeholder: string;
    isRequired: boolean;
    type: string;
}