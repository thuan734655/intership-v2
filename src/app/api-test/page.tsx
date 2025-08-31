"use client"

import { useState } from "react"
import { MainLayout } from "@/components/layouts/main-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ApiTestPage() {
  const [barcode, setBarcode] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [responseJson, setResponseJson] = useState<any>(null)

  const testCall = async () => {
    if (!barcode.trim()) return
    setLoading(true)
    setError(null)
    setResponseJson(null)
    try {
      const res = await fetch(`/api/product/info/${encodeURIComponent(barcode.trim())}`)
      const text = await res.text()
      try {
        setResponseJson(JSON.parse(text))
      } catch {
        setResponseJson(text)
      }
      if (!res.ok) {
        setError(`HTTP ${res.status}`)
      }
    } catch (e: any) {
      setError(e?.message || "Request failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <MainLayout currentPage="home">
      <div className="max-w-3xl mx-auto space-y-6 p-4">
        <Card>
          <CardHeader>
            <CardTitle>API Test - Proxy /api/product/info/[barcode]</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                placeholder="Nhập mã vạch..."
                value={barcode}
                onChange={(e) => setBarcode(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && testCall()}
              />
              <Button onClick={testCall} disabled={loading}>
                {loading ? "Đang gọi..." : "Gọi API"}
              </Button>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {responseJson && (
              <pre className="bg-muted p-3 rounded-md overflow-auto text-sm max-h-[60vh]">
                {typeof responseJson === "string"
                  ? responseJson
                  : JSON.stringify(responseJson, null, 2)}
              </pre>
            )}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}
