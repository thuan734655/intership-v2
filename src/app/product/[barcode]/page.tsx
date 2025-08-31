"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { ProductDetails } from "@/components/ui/product-details"
import { ProductLoading } from "@/components/ui/product-loading"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { MainLayout } from "@/components/layouts/main-layout"
import { fetchProductInfo } from "@/lib/api"
import type { Product } from "@/types/product"

export default function ProductByBarcodePage() {
  const params = useParams()
  const router = useRouter()
  const barcode = params.barcode as string

  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadProduct = async () => {
      if (!barcode) return

      try {
        setLoading(true)
        setError(null)
        const response = await fetchProductInfo(barcode)

        if (response.success && response.data) {
          setProduct(response.data)
        } else {
          setError(response.message || "Không tìm thấy thông tin sản phẩm")
        }
      } catch (err) {
        setError("Lỗi khi tải thông tin sản phẩm. Vui lòng thử lại.")
        console.error("Error loading product:", err)
      } finally {
        setLoading(false)
      }
    }

    loadProduct()
  }, [barcode])

  const handleBack = () => {
    router.back()
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        {loading && <ProductLoading />}

        {error && (
          <div className="max-w-2xl mx-auto">
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
            <div className="mt-4 text-center">
              <Button onClick={handleBack} variant="outline">
                Quay lại
              </Button>
            </div>
          </div>
        )}

        {product && <ProductDetails product={product} onBack={handleBack} />}
      </div>
    </MainLayout>
  )
}
