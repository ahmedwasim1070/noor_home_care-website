// Form data
// Apply job Form
export interface jobFormData {
    fullName: string;
    email: string;
    phoneNumber: string;
    cv: File | null;
}
export interface jobFormErrors {
    fullName: string | null;
    email: string | null;
    phoneNumber: string | null;
    cv: string | null;
}
export interface jobFormInputs {
    label: string;
    name: keyof Omit<jobFormData, "cv">;
    placeholder: string;
    isRequired: boolean;
    type: string;
}