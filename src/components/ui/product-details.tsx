"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MapPin, Phone, Mail, Building, ChevronLeft, ChevronRight, Copy, Check } from "lucide-react"
import { resolveImageUrl } from "@/lib/utils"
import type { Product } from "@/types/product"

interface ProductDetailsProps {
  product: Product
  onBack?: () => void
}

export function ProductDetails({ product, onBack }: ProductDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  // Removed mock review system and star ratings

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Back Button */}
      {onBack && (
        <Button variant="outline" onClick={onBack} className="mb-4 bg-transparent">
          <ChevronLeft className="h-4 w-4 mr-2" />
          Quay lại
        </Button>
      )}

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Product Images */}
        <Card>
          <CardContent className="p-6">
            {product.images.length > 0 ? (
              <div className="space-y-4">
                <div className="relative">
                  <img
                    src={resolveImageUrl(product.images[currentImageIndex]) || "/placeholder.svg?height=400&width=500"}
                    alt={product.name}
                    className="w-full h-96 object-cover rounded-lg"
                  />

                  {product.images.length > 1 && (
                    <>
                      <Button
                        variant="outline"
                        size="sm"
                        className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 p-0 bg-background/80 backdrop-blur-sm"
                        onClick={prevImage}
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 p-0 bg-background/80 backdrop-blur-sm"
                        onClick={nextImage}
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </>
                  )}
                </div>

                {/* Thumbnail Gallery */}
                {product.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-colors ${
                          index === currentImageIndex ? "border-primary" : "border-border"
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      >
                        <img
                          src={resolveImageUrl(image) || "/placeholder.svg?height=64&width=64"}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Không có hình ảnh</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Product Information */}
        <div className="space-y-6">
          {/* Basic Info */}
          <Card>
            <CardHeader>
              <CardTitle>Thông tin sản phẩm</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold text-balance">{product.name}</h2>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Giá:</span>
                <span className="text-lg font-semibold text-primary">{product.price}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Mã vạch:</span>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="font-mono">
                    {product.barcode}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(product.barcode, "barcode")}
                    className="h-8 w-8 p-0"
                  >
                    {copiedField === "barcode" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Xuất xứ:</span>
                <Badge variant="secondary">{product.country}</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Owner Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                Thông tin nhà sản xuất
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-balance">{product.owner.name}</h3>
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Địa chỉ:</p>
                    <p className="text-sm">{product.owner.address}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(product.owner.address, "address")}
                    className="h-8 w-8 p-0 flex-shrink-0"
                  >
                    {copiedField === "address" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                  </Button>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Điện thoại:</p>
                    <p className="text-sm font-mono">{product.owner.phone}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(product.owner.phone, "phone")}
                    className="h-8 w-8 p-0 flex-shrink-0"
                  >
                    {copiedField === "phone" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                  </Button>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Email:</p>
                    <p className="text-sm">{product.owner.email}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(product.owner.email, "email")}
                    className="h-8 w-8 p-0 flex-shrink-0"
                  >
                    {copiedField === "email" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                  </Button>
                </div>

                <div className="flex items-center gap-3">
                  <Building className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Mã số thuế:</p>
                    <p className="text-sm font-mono">{product.owner.taxCode}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(product.owner.taxCode, "taxCode")}
                    className="h-8 w-8 p-0 flex-shrink-0"
                  >
                    {copiedField === "taxCode" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Backend Comments */}
          {product.comments && product.comments.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Bình luận từ hệ thống</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {product.comments.map((c) => (
                  <div key={c.id} className="flex items-start gap-4 p-3 rounded-md border">
                    <img
                      src={resolveImageUrl(c.imageUrl)}
                      alt="comment"
                      className="w-16 h-16 rounded-md object-cover flex-shrink-0"
                    />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm">{c.content}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(c.createdAt).toLocaleString("vi-VN")}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Reviews removed as requested */}
    </div>
  )
}
