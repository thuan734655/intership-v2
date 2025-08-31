"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, X, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

interface SearchBarProps {
  onSearch: (query: string, type: "barcode" | "text") => void
  loading?: boolean
  placeholder?: string
  suggestions?: string[]
  className?: string
}

export function SearchBar({
  onSearch,
  loading = false,
  placeholder = "Nhập mã vạch hoặc tên sản phẩm...",
  suggestions = [],
  className,
}: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      const isBarcode = /^\d+$/.test(query.trim())
      onSearch(query.trim(), isBarcode ? "barcode" : "text")
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion)
    const isBarcode = /^\d+$/.test(suggestion)
    onSearch(suggestion, isBarcode ? "barcode" : "text")
    setShowSuggestions(false)
  }

  const clearQuery = () => {
    setQuery("")
    setShowSuggestions(false)
  }

  return (
    <div className={cn("relative", className)}>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="relative flex-1">
          <Input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setShowSuggestions(e.target.value.length > 0 && suggestions.length > 0)
            }}
            onFocus={() => setShowSuggestions(query.length > 0 && suggestions.length > 0)}
            placeholder={placeholder}
            disabled={loading}
            className="pr-8"
          />
          {query && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={clearQuery}
              className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>
        <Button
          type="submit"
          disabled={loading || !query.trim()}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Search className="h-4 w-4" />
        </Button>
      </form>

      {/* Search Type Indicator */}
      {query && (
        <div className="mt-2">
          <Badge variant="outline" className="text-xs">
            {/^\d+$/.test(query) ? "Tìm kiếm theo mã vạch" : "Tìm kiếm theo tên"}
          </Badge>
        </div>
      )}

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-popover border border-border rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full px-3 py-2 text-left hover:bg-accent hover:text-accent-foreground flex items-center gap-2 text-sm"
            >
              <Clock className="h-3 w-3 text-muted-foreground" />
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
