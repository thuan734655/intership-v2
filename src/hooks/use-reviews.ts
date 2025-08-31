"use client"

import { useState, useEffect } from "react"
import type { ProductReview } from "@/types/product"

// Mock data for demonstration
const mockReviews: ProductReview[] = [
  {
    id: "1",
    userId: "user1",
    userName: "Nguyễn Văn A",
    rating: 5,
    comment: "Sản phẩm chất lượng tốt, đóng gói cẩn thận. Sẽ mua lại lần sau.",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "2",
    userId: "user2",
    userName: "Trần Thị B",
    rating: 4,
    comment: "Sản phẩm ổn, giá cả hợp lý. Giao hàng nhanh.",
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "3",
    userId: "user3",
    userName: "Lê Văn C",
    rating: 5,
    comment: "Rất hài lòng với sản phẩm này. Chất lượng vượt mong đợi.",
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
  },
]

export const useReviews = (productBarcode: string) => {
  const [reviews, setReviews] = useState<ProductReview[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadReviews = async () => {
      try {
        setLoading(true)
        setError(null)

        // TODO: Replace with actual API call
        // const response = await fetch(`/api/reviews/${productBarcode}`)
        // const data = await response.json()

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Use mock data for now
        setReviews(mockReviews)
      } catch (err) {
        setError("Lỗi khi tải đánh giá")
        console.error("Error loading reviews:", err)
      } finally {
        setLoading(false)
      }
    }

    if (productBarcode) {
      loadReviews()
    }
  }, [productBarcode])

  const addReview = async (reviewData: {
    rating: number
    comment: string
    userName: string
  }) => {
    try {
      // TODO: Replace with actual API call
      // const response = await fetch(`/api/reviews/${productBarcode}`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(reviewData)
      // })

      const newReview: ProductReview = {
        id: Date.now().toString(),
        userId: "current-user",
        userName: reviewData.userName,
        rating: reviewData.rating,
        comment: reviewData.comment,
        createdAt: new Date().toISOString(),
      }

      setReviews((prev) => [newReview, ...prev])
      return newReview
    } catch (err) {
      console.error("Error adding review:", err)
      throw new Error("Lỗi khi thêm đánh giá")
    }
  }

  const averageRating =
    reviews.length > 0 ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length : 0

  return {
    reviews,
    loading,
    error,
    addReview,
    averageRating,
    totalReviews: reviews.length,
  }
}
