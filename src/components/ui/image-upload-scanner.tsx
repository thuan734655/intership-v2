"use client"

import { useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./card"
import { Button } from "./button"
import { Upload, Image as ImageIcon } from "lucide-react"
import { BrowserMultiFormatReader } from "@zxing/browser"
import { NotFoundException } from "@zxing/library"

interface ImageUploadScannerProps {
  onScanResult: (result: { text: string; format: string }) => void
  onError: (error: string) => void
}

export function ImageUploadScanner({ onScanResult, onError }: ImageUploadScannerProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Check if file is an image
    if (!file.type.startsWith('image/')) {
      onError("Vui lòng chọn file hình ảnh")
      return
    }

    // Create preview
    const reader = new FileReader()
    reader.onload = () => {
      setPreviewUrl(reader.result as string)
    }
    reader.readAsDataURL(file)

    // Process image
    processImage(file)
  }

  const processImage = async (file: File) => {
    setIsProcessing(true)
    const objectUrl = URL.createObjectURL(file)
    try {
      const reader = new BrowserMultiFormatReader()
      // Try decoding directly from URL
      const result = await reader.decodeFromImageUrl(objectUrl)
      onScanResult({
        text: result.getText(),
        format: String(result.getBarcodeFormat()),
      })
    } catch (err) {
      if (err instanceof NotFoundException) {
        onError("Không nhận dạng được mã vạch trong ảnh. Hãy thử ảnh rõ hơn hoặc góc khác.")
      } else {
        onError("Không thể xử lý hình ảnh. Vui lòng thử lại.")
        console.error("Error processing image:", err)
      }
    } finally {
      URL.revokeObjectURL(objectUrl)
      setIsProcessing(false)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  return (
    <Card className="card-hover-effect">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ImageIcon className="h-5 w-5" />
          Quét mã vạch từ hình ảnh
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div 
            className="relative aspect-video bg-muted rounded-md overflow-hidden border-2 border-dashed border-muted-foreground/25 flex items-center justify-center cursor-pointer upload-area"
            onClick={triggerFileInput}
          >
            {previewUrl ? (
              <img src={previewUrl} alt="Preview" className="w-full h-full object-contain" />
            ) : (
              <div className="text-center p-4">
                <ImageIcon className="h-10 w-10 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Nhấp để tải lên hình ảnh có mã vạch</p>
              </div>
            )}
            {isProcessing && (
              <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            )}
          </div>

          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />

          <Button onClick={triggerFileInput} className="w-full">
            <Upload className="mr-2 h-4 w-4" />
            Tải lên hình ảnh
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
