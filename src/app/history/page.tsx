"use client"

import { MainLayout } from "@/components/layouts/main-layout"
import { SearchHistory } from "@/components/ui/search-history"
import { useSearch } from "@/hooks/use-search"
import { useRouter } from "next/navigation"

export default function HistoryPage() {
  const router = useRouter()
  const { searchHistory, removeHistoryItem, clearHistory } = useSearch()

  const handleSearchAgain = (query: string) => {
    router.push(`/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <MainLayout currentPage="history">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Lịch sử tìm kiếm</h1>
          <p className="text-muted-foreground">Xem lại các tìm kiếm trước đây và tìm kiếm lại nhanh chóng</p>
        </div>

        <SearchHistory
          history={searchHistory}
          onSearchAgain={handleSearchAgain}
          onRemoveItem={removeHistoryItem}
          onClearAll={clearHistory}
        />
      </div>
    </MainLayout>
  )
}
