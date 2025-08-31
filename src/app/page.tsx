"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { MainLayout } from "../components/layouts/main-layout"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Alert, AlertDescription } from "../components/ui/alert"
import { Search } from "lucide-react"
import { BarcodeScanner } from "../components/ui/barcode-scanner"
import { ImageUploadScanner } from "../components/ui/image-upload-scanner"
import { ClientOnly } from "../components/ClientOnly"

export default function HomePage() {
  const router = useRouter()
  const [searchBarcode, setSearchBarcode] = useState("")
  const [scannerError, setScannerError] = useState<string | null>(null)
  const [lastScanResult, setLastScanResult] = useState<{ text: string; format: string } | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleScanResult = (result: { text: string; format: string }) => {
    setLastScanResult(result)
    setScannerError(null)
    router.push(`/product/${result.text}`)
  }

  const handleScanError = (error: string) => {
    setScannerError(error)
  }

  const handleSearch = () => {
    if (searchBarcode.trim()) {
      router.push(`/product/${searchBarcode.trim()}`)
    }
  }

  const viewLastScanResult = () => {
    if (lastScanResult) {
      router.push(`/product/${lastScanResult.text}`)
    }
  }

  return (
    <ClientOnly
      fallback={
        <MainLayout currentPage="home">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6 responsive-grid">
              <Card className="h-64" />
              <Card className="h-64" />
            </div>
            <Card className="card-hover-effect">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Tìm kiếm bằng mã vạch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <div className="h-10 flex-1 rounded-md bg-muted" />
                  <div className="h-10 w-10 rounded-md bg-muted" />
                </div>
              </CardContent>
            </Card>
          </div>
        </MainLayout>
      }
    >
      <MainLayout currentPage="home">
        <div className="max-w-4xl mx-auto space-y-6">
        {/* Scanner Section */}
        {mounted ? (
          <div className="grid md:grid-cols-2 gap-6 responsive-grid">
            {/* Camera Scanner */}
            <BarcodeScanner onScanResult={handleScanResult} onError={handleScanError} />

            {/* Image Upload Scanner */}
            <ImageUploadScanner onScanResult={handleScanResult} onError={handleScanError} />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 responsive-grid">
            <Card className="h-64" />
            <Card className="h-64" />
          </div>
        )}

        {/* Manual Search */}
        <Card className="card-hover-effect">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Tìm kiếm bằng mã vạch
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input
                placeholder="Nhập mã vạch..."
                value={searchBarcode}
                onChange={(e) => setSearchBarcode(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                className="focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <Button onClick={handleSearch} className="bg-primary text-primary-foreground hover:bg-primary/90 enhanced-button">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Error Display */}
        {scannerError && (
          <Alert variant="destructive" className="alert">
            <AlertDescription>{scannerError}</AlertDescription>
          </Alert>
        )}

        {/* Last Scan Result */}
        {lastScanResult && (
          <Card className="card-hover-effect">
            <CardHeader>
              <CardTitle>Kết quả quét gần nhất</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 success-result">
                <p>
                  <strong>Mã vạch:</strong> {lastScanResult.text}
                </p>
                <p>
                  <strong>Định dạng:</strong> {lastScanResult.format}
                </p>
                <Button className="mt-4 enhanced-button" onClick={viewLastScanResult}>
                  Xem thông tin sản phẩm
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Recent Scans */}
        <Card>
          <CardHeader>
            <CardTitle>Sản phẩm đã quét gần đây</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-center py-8">Chưa có sản phẩm nào được quét</p>
          </CardContent>
        </Card>
        </div>
      </MainLayout>
    </ClientOnly>
  )
}
