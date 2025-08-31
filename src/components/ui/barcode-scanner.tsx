"use client"

import { useEffect } from "react"
import { Card, CardContent } from "./card"
import { Button } from "./button"
import { Alert, AlertDescription } from "./alert"
import { Camera, Square, CheckCircle } from "lucide-react"
import { useBarcodeScanner } from "../../hooks/use-barcode-scanner"

interface BarcodeScannerProps {
  onScanResult: (result: { text: string; format: string }) => void
  onError?: (error: string) => void
}

export function BarcodeScanner({ onScanResult, onError }: BarcodeScannerProps) {
  const { isScanning, error, scanResult, videoRef, canvasRef, startScanning, stopScanning, clearResult } =
    useBarcodeScanner()

  useEffect(() => {
    if (scanResult) {
      onScanResult(scanResult)
    }
  }, [scanResult, onScanResult])

  useEffect(() => {
    if (error && onError) {
      onError(error)
    }
  }, [error, onError])

  return (
    <Card className="card-hover-effect">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Scanner Controls */}
          <div className="text-center">
            {!isScanning ? (
              <Button
                onClick={startScanning}
                className="bg-primary text-primary-foreground hover:bg-primary/90 enhanced-button"
                size="lg"
              >
                <Camera className="h-5 w-5 mr-2" />
                Bật camera để quét
              </Button>
            ) : (
              <Button onClick={stopScanning} variant="outline" size="lg" className="enhanced-button">
                <Square className="h-4 w-4 mr-2" />
                Dừng quét
              </Button>
            )}
          </div>

          {/* Video Preview */}
          {isScanning && (
            <div className="relative mx-auto max-w-md scanner-container">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full aspect-video rounded-lg border-2 border-primary object-cover"
              />

              {/* Scanning Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 border-2 border-accent rounded-lg relative scanner-overlay">
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-accent rounded-tl-lg"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-accent rounded-tr-lg"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-accent rounded-bl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-accent rounded-br-lg"></div>

                  {/* Scanning Line Animation */}
                  <div className="absolute inset-x-0 top-1/2 scanner-line"></div>
                </div>
              </div>

              <p className="text-center text-sm text-muted-foreground mt-2">Đưa mã vạch vào khung để quét</p>
            </div>
          )}

          {/* Hidden Canvas for Processing */}
          <canvas ref={canvasRef} className="hidden" />

          {/* Error Display */}
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Success Result */}
          {scanResult && (
            <Alert className="border-accent bg-accent/10">
              <CheckCircle className="h-4 w-4 text-accent" />
              <AlertDescription className="text-accent-foreground">
                <strong>Đã quét thành công!</strong>
                <br />
                Mã vạch: {scanResult.text}
                <br />
                Định dạng: {scanResult.format}
              </AlertDescription>
            </Alert>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
