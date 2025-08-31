"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { StarRating } from "@/components/ui/star-rating"
import type { ProductReview } from "@/types/product"

interface ReviewSummaryProps {
  reviews: ProductReview[]
}

export function ReviewSummary({ reviews }: ReviewSummaryProps) {
  if (reviews.length === 0) {
    return null
  }

  // Calculate statistics
  const totalReviews = reviews.length
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews

  // Count ratings by star
  const ratingCounts = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((review) => review.rating === star).length,
    percentage: (reviews.filter((review) => review.rating === star).length / totalReviews) * 100,
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tổng quan đánh giá</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Overall Rating */}
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-primary">{averageRating.toFixed(1)}</div>
            <StarRating rating={averageRating} readonly size="lg" />
            <p className="text-sm text-muted-foreground">Dựa trên {totalReviews} đánh giá</p>
          </div>

          {/* Rating Breakdown */}
          <div className="space-y-3">
            {ratingCounts.map(({ star, count, percentage }) => (
              <div key={star} className="flex items-center gap-3">
                <div className="flex items-center gap-1 w-12">
                  <span className="text-sm">{star}</span>
                  <StarRating rating={1} readonly size="sm" />
                </div>
                <Progress value={percentage} className="flex-1 h-2" />
                <span className="text-sm text-muted-foreground w-8">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
