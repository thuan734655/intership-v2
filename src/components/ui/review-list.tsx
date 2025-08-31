"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { StarRating } from "@/components/ui/star-rating"
import { formatDistanceToNow } from "date-fns"
import { vi } from "date-fns/locale"
import type { ProductReview } from "@/types/product"

interface ReviewListProps {
  reviews: ProductReview[]
  averageRating?: number
  totalReviews?: number
}

export function ReviewList({ reviews, averageRating, totalReviews }: ReviewListProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return formatDistanceToNow(date, { addSuffix: true, locale: vi })
    } catch {
      return "Vừa xong"
    }
  }

  if (reviews.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Đánh giá sản phẩm</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center py-8">Chưa có đánh giá nào cho sản phẩm này</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Đánh giá sản phẩm</span>
          {averageRating !== undefined && totalReviews !== undefined && (
            <div className="flex items-center gap-2">
              <StarRating rating={averageRating} readonly showValue />
              <span className="text-sm text-muted-foreground">({totalReviews} đánh giá)</span>
            </div>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="flex gap-4">
              {/* Avatar */}
              <Avatar className="h-10 w-10 flex-shrink-0">
                <AvatarFallback className="bg-primary/10 text-primary">{getInitials(review.userName)}</AvatarFallback>
              </Avatar>

              {/* Review Content */}
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h4 className="font-medium">{review.userName}</h4>
                    <StarRating rating={review.rating} readonly size="sm" />
                  </div>
                  <span className="text-sm text-muted-foreground">{formatDate(review.createdAt)}</span>
                </div>

                <p className="text-sm text-foreground leading-relaxed">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
