import type { ProductApiResponse } from "@/types/product";

export const fetchProductInfo = async (
  barcode: string
): Promise<ProductApiResponse> => {
  try {
    const response = await fetch(
      `/api/product/info/${encodeURIComponent(barcode)}`
    );
    const contentType = response.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const json = (await response.json()) as Partial<ProductApiResponse>;
      if (!response.ok) {
        return {
          success: false,
          message: json.message || `Không tìm thấy thông tin sản phẩm (mã ${response.status})`,
        };
      }
      // Ensure shape
      return {
        success: !!json.success,
        message: json.message,
        data: json.data,
      } as ProductApiResponse;
    } else {
      // Non-JSON backend response
      if (!response.ok) {
        return {
          success: false,
          message: `Yêu cầu thất bại (mã ${response.status})`,
        };
      }
      return { success: true, message: undefined, data: undefined };
    }
  } catch (error) {
    console.error("Error fetching product info:", error);
    return {
      success: false,
      message: "Không thể kết nối tới máy chủ. Vui lòng thử lại.",
    };
  }
};

export const searchProductByBarcode = async (
  barcode: string
): Promise<ProductApiResponse> => {
  return fetchProductInfo(barcode);
};
