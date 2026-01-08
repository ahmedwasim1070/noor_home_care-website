// Api response payload - Success / Error
export type ApiResponse<T> = | {
    success: true;
    status: number;
    message: string;
    data: T;
} |
{
    success: false;
    status: number;
    message: string;
}