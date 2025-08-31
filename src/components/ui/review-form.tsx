"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { StarRating } from "@/components/ui/star-rating"
import { MessageSquare, Send } from "lucide-react"

interface ReviewFormProps {
  productBarcode: string
  onSubmit?: (review: {
    rating: number
    comment: string
    userName: string
  }) => void
  onCancel?: () => void
}

export function ReviewForm({ productBarcode, onSubmit, onCancel }: ReviewFormProps) {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")
  const [userName, setUserName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (rating === 0) {
      setError("Vui lòng chọn số sao đánh giá")
      return
    }

    if (!comment.trim()) {
      setError("Vui lòng nhập nhận xét")
      return
    }

    if (!userName.trim()) {
      setError("Vui lòng nhập tên của bạn")
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      // TODO: Submit review to API
      const reviewData = {
        rating,
        comment: comment.trim(),
        userName: userName.trim(),
      }

      if (onSubmit) {
        onSubmit(reviewData)
      }

      // Reset form
      setRating(0)
      setComment("")
      setUserName("")
    } catch (err) {
      setError("Lỗi khi gửi đánh giá. Vui lòng thử lại.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Đánh giá sản phẩm
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Rating */}
          <div className="space-y-2">
            <Label>Đánh giá của bạn</Label>
            <div className="flex items-center gap-2">
              <StarRating rating={rating} onRatingChange={setRating} size="lg" />
              {rating > 0 && <span className="text-sm text-muted-foreground">{rating} sao</span>}
            </div>
          </div>

          {/* User Name */}
          <div className="space-y-2">
            <Label htmlFor="userName">Tên của bạn</Label>
            <Input
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Nhập tên của bạn..."
              disabled={isSubmitting}
            />
          </div>

          {/* Comment */}
          <div className="space-y-2">
            <Label htmlFor="comment">Nhận xét</Label>
            <Textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Chia sẻ trải nghiệm của bạn về sản phẩm này..."
              rows={4}
              disabled={isSubmitting}
            />
          </div>

          {/* Error */}
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Actions */}
          <div className="flex gap-2 justify-end">
            {onCancel && (
              <Button type="button" variant="outline" onClick={onCancel} disabled={isSubmitting}>
                Hủy
              </Button>
            )}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {isSubmitting ? (
                "Đang gửi..."
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Gửi đánh giá
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
