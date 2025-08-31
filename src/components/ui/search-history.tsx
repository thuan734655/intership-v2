"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, X, Trash2 } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import { vi } from "date-fns/locale"
import type { SearchHistory as SearchHistoryItem } from "@/hooks/use-search"

interface SearchHistoryProps {
  history: SearchHistoryItem[]
  onSearchAgain: (query: string) => void
  onRemoveItem: (id: string) => void
  onClearAll: () => void
}

export function SearchHistory({ history, onSearchAgain, onRemoveItem, onClearAll }: SearchHistoryProps) {
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return formatDistanceToNow(date, { addSuffix: true, locale: vi })
    } catch {
      return "Vừa xong"
    }
  }

  if (history.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Lịch sử tìm kiếm
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center py-8">Chưa có lịch sử tìm kiếm nào</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Lịch sử tìm kiếm
          </CardTitle>
          <Button
            variant="outline"
            size="sm"
            onClick={onClearAll}
            className="text-destructive hover:text-destructive bg-transparent"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Xóa tất cả
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {history.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent/50 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <button
                    onClick={() => onSearchAgain(item.query)}
                    className="font-medium text-left hover:text-primary transition-colors truncate"
                  >
                    {item.query}
                  </button>
                  <Badge variant="outline" className="text-xs flex-shrink-0">
                    {/^\d+$/.test(item.query) ? "Mã vạch" : "Tên"}
                  </Badge>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{formatDate(item.timestamp)}</span>
                  <span>•</span>
                  <span>{item.resultCount} kết quả</span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onRemoveItem(item.id)}
                className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive flex-shrink-0"
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
