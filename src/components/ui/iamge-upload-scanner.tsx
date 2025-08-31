"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Upload, ImageIcon, CheckCircle, X } from "lucide-react"
import { useBarcodeScanner } from "@/hooks/use-barcode-scanner"

interface ImageUploadScannerProps {
  onScanResult: (result: { text: string; format: string }) => void
  onError?: (error: string) => void
}

export function ImageUploadScanner({ onScanResult, onError }: ImageUploadScannerProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [scanResult, setScanResult] = useState<{ text: string; format: string } | null>(null)
  const { scanImageFile } = useBarcodeScanner()

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith("image/")) {
      onError?.("Vui lòng chọn file hình ảnh hợp lệ")
      return
    }

    setIsProcessing(true)
    setScanResult(null)

    try {
      const imageUrl = URL.createObjectURL(file)
      setUploadedImage(imageUrl)

      const result = await scanImageFile(file)

      if (result) {
        setScanResult(result)
        onScanResult(result)
      } else {
        onError?.("Không tìm thấy mã vạch trong hình ảnh. Vui lòng thử hình ảnh khác.")
      }
    } catch (error) {
      onError?.("Lỗi khi xử lý hình ảnh. Vui lòng thử lại.")
    } finally {
      setIsProcessing(false)
    }
  }

  const clearImage = () => {
    if (uploadedImage) {
      URL.revokeObjectURL(uploadedImage)
    }
    setUploadedImage(null)
    setScanResult(null)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="h-5 w-5" />
          Tải ảnh lên để quét
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Upload Area */}
        {!uploadedImage ? (
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
            <label htmlFor="image-upload" className="cursor-pointer">
              <div className="space-y-4">
                <ImageIcon className="h-12 w-12 mx-auto text-muted-foreground" />
                <div>
                  <Button variant="outline" asChild>
                    <span>
                      <Upload className="h-4 w-4 mr-2" />
                      Chọn hình ảnh
                    </span>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">Hỗ trợ JPG, PNG, GIF. Tối đa 10MB</p>
              </div>
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
              disabled={isProcessing}
            />
          </div>
        ) : (
          /* Image Preview */
          <div className="space-y-4">
            <div className="relative">
              <img
                src={uploadedImage || "/placeholder.svg"}
                alt="Uploaded image"
                className="w-full max-w-md mx-auto rounded-lg border"
              />
              <Button onClick={clearImage} variant="destructive" size="sm" className="absolute top-2 right-2">
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Processing State */}
            {isProcessing && (
              <Alert>
                <AlertDescription>Đang xử lý hình ảnh và tìm kiếm mã vạch...</AlertDescription>
              </Alert>
            )}

            {/* Scan Result */}
            {scanResult && (
              <Alert className="border-accent bg-accent/10">
                <CheckCircle className="h-4 w-4 text-accent" />
                <AlertDescription className="text-accent-foreground">
                  <strong>Đã tìm thấy mã vạch!</strong>
                  <br />
                  Mã: {scanResult.text}
                  <br />
                  Định dạng: {scanResult.format}
                </AlertDescription>
              </Alert>
            )}

            {/* Upload Another */}
            <div className="text-center">
              <label htmlFor="image-upload-2" className="cursor-pointer">
                <Button variant="outline">
                  <Upload className="h-4 w-4 mr-2" />
                  Tải ảnh khác
                </Button>
              </label>
              <input
                id="image-upload-2"
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                disabled={isProcessing}
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
