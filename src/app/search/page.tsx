"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { MainLayout } from "@/components/layouts/main-layout"
import { SearchBar } from "@/components/ui/search-bar"
import { SearchResults } from "@/components/ui/search-results"
import { SearchHistory } from "@/components/ui/search-history"
import { useSearch } from "@/hooks/use-search"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") || ""

  const {
    results,
    loading,
    error,
    searchHistory,
    searchByBarcode,
    searchByText,
    clearResults,
    clearHistory,
    removeHistoryItem,
  } = useSearch()

  const [currentQuery, setCurrentQuery] = useState(initialQuery)

  // Perform initial search if query parameter exists
  useEffect(() => {
    if (initialQuery) {
      const isBarcode = /^\d+$/.test(initialQuery)
      if (isBarcode) {
        searchByBarcode(initialQuery)
      } else {
        searchByText(initialQuery)
      }
    }
  }, [initialQuery])

  const handleSearch = (query: string, type: "barcode" | "text") => {
    setCurrentQuery(query)
    if (type === "barcode") {
      searchByBarcode(query)
    } else {
      searchByText(query)
    }
  }

  const handleSearchAgain = (query: string) => {
    const isBarcode = /^\d+$/.test(query)
    handleSearch(query, isBarcode ? "barcode" : "text")
  }

  const handleClearResults = () => {
    clearResults()
    setCurrentQuery("")
  }

  // Get search suggestions from history
  const suggestions = searchHistory
    .slice(0, 5)
    .map((item) => item.query)
    .filter((query) => query !== currentQuery)

  return (
    <MainLayout currentPage="search">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Search Bar */}
        <div className="bg-card p-6 rounded-lg border">
          <h1 className="text-2xl font-bold mb-4">Tìm kiếm sản phẩm</h1>
          <SearchBar onSearch={handleSearch} loading={loading} suggestions={suggestions} className="max-w-2xl" />
        </div>

        {/* Search Results */}
        <SearchResults
          results={results}
          loading={loading}
          error={error}
          query={currentQuery}
          onClearResults={handleClearResults}
        />

        {/* Search History - Only show when no results */}
        {results.length === 0 && !loading && !error && (
          <SearchHistory
            history={searchHistory}
            onSearchAgain={handleSearchAgain}
            onRemoveItem={removeHistoryItem}
            onClearAll={clearHistory}
          />
        )}
      </div>
    </MainLayout>
  )
}
