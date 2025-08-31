"use client"

import { useCallback, useRef, useState } from "react"
import { useBarcodeScanner } from "@/hooks/use-barcode-scanner"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import type { ProductApiResponse } from "@/types/product"

export default function TestDecodePage() {
  const { scanImageFile } = useBarcodeScanner()
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [result, setResult] = useState<{ text: string; format: string } | null>(null)
  const [apiResponse, setApiResponse] = useState<ProductApiResponse | null>(null)
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const onPick = useCallback(() => {
    inputRef.current?.click()
  }, [])

  const onFile = useCallback(
    async (file: File | null) => {
      setError(null)
      setResult(null)
      setApiResponse(null)
      if (!file) return
      const url = URL.createObjectURL(file)
      setImageUrl(url)
      try {
        const decoded = await scanImageFile(file)
        if (!decoded) {
          setError("Không giải mã được từ ảnh. Hãy thử ảnh khác hoặc rõ nét hơn.")
          return
        }
        setResult(decoded)
      } catch (e) {
        setError("Có lỗi khi giải mã ảnh.")
      }
    },
    [scanImageFile],
  )

  const onChangeInput = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || null
      await onFile(file)
    },
    [onFile],
  )

  const fetchInfo = useCallback(async () => {
    if (!result?.text) return
    try {
      const res = await fetch(`/api/product/info/${encodeURIComponent(result.text)}`)
      const data: ProductApiResponse = await res.json()
      setApiResponse(data)
    } catch (e) {
      setError("Gọi API thất bại.")
    }
  }, [result])

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Test Decode Ảnh Mã Vạch</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Button onClick={onPick} variant="outline">Chọn ảnh</Button>
            <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={onChangeInput} />
            {result && (
              <Button onClick={fetchInfo} className="bg-transparent" variant="outline">
                Gọi API cho {result.text}
              </Button>
            )}
          </div>

          {imageUrl && (
            <img src={imageUrl} alt="preview" className="max-h-72 rounded-md border" />)
          }

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {result && (
            <div className="text-sm">
              <div><b>Decoded:</b> {result.text}</div>
              <div><b>Format:</b> {result.format}</div>
            </div>
          )}

          {apiResponse && (
            <pre className="text-xs bg-muted p-3 rounded border overflow-auto">
{JSON.stringify(apiResponse, null, 2)}
            </pre>
          )}
        </CardContent>
      </Card>

      <div className="text-sm text-muted-foreground">
        Gợi ý: Thử ảnh có dãy số "012044038918" bên dưới mã vạch để xác nhận decode.
      </div>
    </div>
  )
}
