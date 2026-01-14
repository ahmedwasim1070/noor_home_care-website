"use client";

// Imports
import { useState, useRef, ChangeEvent, FormEvent, DragEvent } from "react";
import { Upload, FileText, X, Send, Loader2, AlertCircle } from "lucide-react";
// Types
import {
  ApiResponse,
  jobFormData,
  jobFormErrors,
  jobFormInputs,
} from "@/types";
//
import { validateJobForm } from "@/lib/validators";
import toast from "react-hot-toast";

function ApplyForm() {
  // State
  const [jobFormData, setJobFormData] = useState<jobFormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    cv: null,
  });
  const [formErrors, setFormErrors] = useState<jobFormErrors>({
    fullName: null,
    email: null,
    phoneNumber: null,
    cv: null,
  });
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Configuration
  const inputs: jobFormInputs[] = [
    {
      label: "Full Name",
      name: "fullName",
      placeholder: "e.g. John Doe",
      isRequired: true,
      type: "text",
    },
    {
      label: "Email Address",
      name: "email",
      placeholder: "john@example.com",
      isRequired: true,
      type: "email",
    },
    {
      label: "Phone Number",
      name: "phoneNumber",
      placeholder: "+44 7123 456789",
      isRequired: false,
      type: "tel",
    },
  ];

  // Handle Text Inputs
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setJobFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (formErrors[name as keyof jobFormErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // Handle File Drag
  const handleDrag = (e: DragEvent<HTMLDivElement | HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // Handle File Drop
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  // Handle File Click Selection
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  // File Validation Helper
  const validateAndSetFile = (file: File) => {
    const validType = "application/pdf";
    const maxSizeInBytes = 5 * 1024 * 1024;

    if (file.type !== validType) {
      setFormErrors((prev) => ({
        ...prev,
        cv: "Please upload a PDF document.",
      }));
      return;
    }

    if (file.size > maxSizeInBytes) {
      setFormErrors((prev) => ({
        ...prev,
        cv: "File size exceeds the 5MB limit.",
      }));
      return;
    }

    setJobFormData((prev) => ({ ...prev, cv: file }));
    setFormErrors((prev) => ({ ...prev, cv: null }));
  };

  // Remove File
  const removeFile = () => {
    setJobFormData((prev) => ({ ...prev, cv: null }));
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Submit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const jobFormError = validateJobForm(jobFormData, setFormErrors);
    if (jobFormError) return;

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("fullName", jobFormData.fullName);
      formData.append("email", jobFormData.email);
      formData.append("phoneNumber", jobFormData.phoneNumber);
      if (jobFormData.cv) formData.append("cv", jobFormData.cv);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/send/job-application`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = (await res.json()) as ApiResponse<null | never>;
      if (!data.success) {
        throw new Error(data.message);
      }

      toast.success(data.message);
    } catch (err) {
      // Message
      const msg = err instanceof Error ? err.message : "Unexpected error.";
      toast.error(msg);
      // Console
      console.error(
        "Error in handleSubmit in ApplyForm.",
        "Message : ",
        msg,
        "Error : ",
        err
      );
      //
    } finally {
      setIsSubmitting(false);
      setJobFormData({ fullName: "", email: "", phoneNumber: "", cv: null });
      setFormErrors({
        fullName: null,
        email: null,
        phoneNumber: null,
        cv: null,
      });
    }
  };

  return (
    <section
      className="max-w-4xl mx-auto px-6 py-12"
      aria-label="Apply at home care"
    >
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-primary/10 relative">
        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="font-black text-3xl md:text-4xl text-primary mb-3">
              Join Our Team
            </h2>
            <p className="text-gray-500">
              Fill out the form below to start your journey with Noor Home Care.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Input Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {inputs.map((input) => (
                <div key={input.name} className="flex flex-col gap-y-2 group">
                  <label
                    className={`font-bold text-sm ml-1 transition-colors ${
                      formErrors[input.name]
                        ? "text-red-500"
                        : "text-primary group-focus-within:text-secondary"
                    }`}
                    htmlFor={input.name}
                  >
                    {input.label}{" "}
                    {input.isRequired && !formErrors[input.name] && (
                      <span className="text-red-500">*</span>
                    )}
                  </label>

                  <div className="relative">
                    <input
                      id={input.name}
                      name={input.name}
                      type={input.type}
                      value={jobFormData[input.name] as string}
                      onChange={handleInputChange}
                      className={`w-full border rounded-xl px-4 py-3 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:bg-white transition-all duration-300 ${
                        formErrors[input.name]
                          ? "border-red-500 bg-red-50 focus:ring-red-200"
                          : "bg-gray-50 border-gray-200 focus:ring-secondary/50"
                      }`}
                      placeholder={input.placeholder}
                    />
                    {/* Error Icon inside input */}
                    {formErrors[input.name] && (
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <AlertCircle className="h-5 w-5 text-red-500" />
                      </div>
                    )}
                  </div>

                  {/* Error Message */}
                  {formErrors[input.name] && (
                    <p className="text-red-500 text-xs ml-1 font-medium animate-pulse">
                      {formErrors[input.name]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* CV upload */}
            <div className="space-y-2">
              <label
                className={`font-bold text-sm ml-1 ${
                  formErrors.cv ? "text-red-500" : "text-primary"
                }`}
              >
                Upload CV (Only PDF) <span className="text-red-500">*</span>
              </label>

              {!jobFormData.cv ? (
                <div
                  className={`relative flex flex-col items-center justify-center w-full h-48 rounded-xl border-2 border-dashed transition-all duration-300 ease-in-out cursor-pointer group
                  ${
                    formErrors.cv
                      ? "border-red-300 bg-red-50 hover:bg-red-100"
                      : dragActive
                      ? "border-secondary bg-light-secondary/30 scale-[1.01]"
                      : "border-gray-300 bg-gray-50 hover:bg-gray-100 hover:border-secondary/50"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    accept=".pdf"
                    onChange={handleFileChange}
                  />

                  <div
                    className={`bg-white p-3 rounded-full shadow-sm mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Upload
                      className={`w-6 h-6 ${
                        formErrors.cv
                          ? "text-red-500"
                          : dragActive
                          ? "text-secondary"
                          : "text-gray-400 group-hover:text-secondary"
                      }`}
                    />
                  </div>

                  <p
                    className={`text-sm font-medium ${
                      formErrors.cv ? "text-red-500" : "text-gray-600"
                    }`}
                  >
                    <span
                      className={`font-bold ${
                        formErrors.cv ? "text-red-600" : "text-secondary"
                      }`}
                    >
                      Click to upload
                    </span>{" "}
                    or drag and drop
                  </p>
                  <p
                    className={`text-xs mt-1 ${
                      formErrors.cv ? "text-red-400" : "text-gray-400"
                    }`}
                  >
                    PDF up to 5MB
                  </p>
                </div>
              ) : (
                // Selected File State
                <div className="relative flex items-center p-4 bg-light-secondary/20 border border-secondary/30 rounded-xl group">
                  <div className="bg-white p-2 rounded-lg shadow-sm mr-4">
                    <FileText className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className="text-sm font-bold text-primary truncate">
                      {jobFormData.cv.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {(jobFormData.cv.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="p-2 hover:bg-red-50 rounded-full transition-colors group/delete ml-2"
                    title="Remove file"
                  >
                    <X className="w-5 h-5 text-gray-400 group-hover/delete:text-red-500" />
                  </button>
                </div>
              )}

              {/* CV Error Message */}
              {formErrors.cv && (
                <p className="text-red-500 text-xs ml-1 font-medium animate-pulse">
                  {formErrors.cv}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-primary/20 transform active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending Application...
                  </>
                ) : (
                  <>
                    Submit Application
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ApplyForm;
