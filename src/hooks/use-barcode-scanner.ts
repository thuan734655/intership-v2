"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { BrowserMultiFormatReader } from "@zxing/browser"
import type { Result } from "@zxing/library"

export interface ScanResult {
  text: string
  format: string
}

export const useBarcodeScanner = () => {
  const [isScanning, setIsScanning] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [scanResult, setScanResult] = useState<ScanResult | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const codeReaderRef = useRef<BrowserMultiFormatReader | null>(null)

  const handleDecodeResult = useCallback((result: Result | null) => {
    if (!result) return
    setScanResult({ text: result.getText(), format: result.getBarcodeFormat().toString() })
    // stop after first successful decode
    stopScanning()
  }, [])

  const startScanning = useCallback(async () => {
    try {
      setError(null)
      setScanResult(null)
      setIsScanning(true)

      // Try to get rear camera with decent resolution
      const constraints: MediaStreamConstraints = {
        video: {
          facingMode: { ideal: "environment" as const },
          width: { ideal: 1280 },
          height: { ideal: 720 },
          aspectRatio: { ideal: 16 / 9 },
        },
        audio: false,
      }

      let stream: MediaStream | null = null
      try {
        stream = await navigator.mediaDevices.getUserMedia(constraints)
      } catch (e) {
        // Fallback to any camera if environment not available
        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      }

      if (!stream) throw new Error("No media stream")
      streamRef.current = stream

      // Style video element for better fit
      if (videoRef.current) {
        videoRef.current.playsInline = true
        videoRef.current.muted = true
        videoRef.current.setAttribute("autoplay", "true")
        videoRef.current.style.objectFit = "cover"
      }

      const reader = new BrowserMultiFormatReader()
      codeReaderRef.current = reader

      await reader.decodeFromStream(stream, videoRef.current!, (result: Result | undefined) => {
        if (result) {
          handleDecodeResult(result)
        }
      })
    } catch (err) {
      console.error("startScanning error:", err)
      setError("Không thể truy cập camera. Vui lòng kiểm tra quyền truy cập.")
      setIsScanning(false)
    }
  }, [handleDecodeResult])

  const stopScanning = useCallback(() => {
    // Stop media tracks; ZXing will stop when stream ends
    codeReaderRef.current = null
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }
    setIsScanning(false)
  }, [])

  const scanImageFile = useCallback(
    (file: File): Promise<ScanResult | null> => {
      return new Promise(async (resolve) => {
        const url = URL.createObjectURL(file)
        try {
          const reader = new BrowserMultiFormatReader()
          const result = await reader.decodeFromImageUrl(url)
          if (result) {
            resolve({ text: result.getText(), format: result.getBarcodeFormat().toString() })
          } else {
            resolve(null)
          }
        } catch (e) {
          resolve(null)
        } finally {
          URL.revokeObjectURL(url)
        }
      })
    },
    [],
  )

  useEffect(() => {
    return () => {
      stopScanning()
    }
  }, [stopScanning])

  return {
    isScanning,
    error,
    scanResult,
    videoRef,
    canvasRef,
    startScanning,
    stopScanning,
    scanImageFile,
    clearResult: () => setScanResult(null),
  }
}
