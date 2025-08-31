"use client"

import { ProductCard } from "@/components/ui/product-card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Search, Package } from "lucide-react"
import { useRouter } from "next/navigation"
import type { SearchResult } from "@/hooks/use-search"

interface SearchResultsProps {
  results: SearchResult[]
  loading: boolean
  error: string | null
  query?: string
  onClearResults?: () => void
}

export function SearchResults({ results, loading, error, query, onClearResults }: SearchResultsProps) {
  const router = useRouter()

  const handleViewProduct = (barcode: string) => {
    router.push(`/product/${barcode}`)
  }

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-4 w-24" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i}>
              <CardContent className="p-4 space-y-3">
                <Skeleton className="h-48 w-full rounded-lg" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <Alert variant="destructive" className="max-w-md mx-auto">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
        {onClearResults && (
          <Button variant="outline" onClick={onClearResults} className="mt-4 bg-transparent">
            Thử lại
          </Button>
        )}
      </div>
    )
  }

  if (results.length === 0 && query) {
    return (
      <div className="text-center py-12">
        <Package className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">Không tìm thấy sản phẩm</h3>
        <p className="text-muted-foreground mb-4">Không có sản phẩm nào phù hợp với "{query}"</p>
        {onClearResults && (
          <Button variant="outline" onClick={onClearResults}>
            Xóa kết quả
          </Button>
        )}
      </div>
    )
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <Search className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">Tìm kiếm sản phẩm</h3>
        <p className="text-muted-foreground">Nhập mã vạch hoặc tên sản phẩm để bắt đầu tìm kiếm</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">
            Kết quả tìm kiếm
            {query && <span className="text-muted-foreground font-normal"> cho "{query}"</span>}
          </h2>
          <p className="text-sm text-muted-foreground">Tìm thấy {results.length} sản phẩm</p>
        </div>
        {onClearResults && (
          <Button variant="outline" size="sm" onClick={onClearResults}>
            Xóa kết quả
          </Button>
        )}
      </div>

      {/* Results Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((result, index) => (
          <ProductCard
            key={`${result.product.barcode}-${index}`}
            product={result.product}
            onViewDetails={() => handleViewProduct(result.product.barcode)}
          />
        ))}
      </div>
    </div>
  )
}
