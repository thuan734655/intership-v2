"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import type { Product } from "@/types/product"

interface ProductCardProps {
  product: Product
  onViewDetails?: () => void
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <Badge variant="outline" className="text-xs">
            {product.country}
          </Badge>
          <Badge variant="secondary" className="text-xs font-mono">
            {product.barcode}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Product Images */}
        {product.images.length > 0 && (
          <div className="relative">
            <img
              src={product.images[currentImageIndex] || "/placeholder.svg?height=200&width=300"}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg"
            />

            {product.images.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 bg-background/80 backdrop-blur-sm"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 bg-background/80 backdrop-blur-sm"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>

                {/* Image Indicators */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? "bg-primary" : "bg-background/60"
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Product Info */}
        <div className="space-y-2">
          <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Giá:</span>
            <span className="font-semibold text-primary">{product.price}</span>
          </div>
        </div>

        {/* Action Button */}
        {onViewDetails && (
          <Button onClick={onViewDetails} className="w-full bg-transparent" variant="outline">
            <ExternalLink className="h-4 w-4 mr-2" />
            Xem chi tiết
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
