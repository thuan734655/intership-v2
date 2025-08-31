"use client";

import { useState, useEffect } from "react";
import { fetchProductInfo } from "@/lib/api";
import type { Product } from "@/types/product";

export interface SearchResult {
  product: Product;
  relevanceScore: number;
}

export interface SearchHistory {
  id: string;
  query: string;
  timestamp: string;
  resultCount: number;
}

export const useSearch = () => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchHistory, setSearchHistory] = useState<SearchHistory[]>([]);

  // Load search history from localStorage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem("search-history");
    if (savedHistory) {
      try {
        setSearchHistory(JSON.parse(savedHistory));
      } catch (err) {
        console.error("Error loading search history:", err);
      }
    }
  }, []);

  // Save search history to localStorage
  const saveSearchHistory = (history: SearchHistory[]) => {
    try {
      localStorage.setItem("search-history", JSON.stringify(history));
      setSearchHistory(history);
    } catch (err) {
      console.error("Error saving search history:", err);
    }
  };

  const searchByBarcode = async (barcode: string) => {
    if (!barcode.trim()) {
      setError("Vui lòng nhập mã vạch");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetchProductInfo(barcode.trim());

      if (response.success) {
        const searchResult: SearchResult = {
          product: response.data,
          relevanceScore: 1.0,
        };
        setResults([searchResult]);

        // Add to search history
        const historyItem: SearchHistory = {
          id: Date.now().toString(),
          query: barcode.trim(),
          timestamp: new Date().toISOString(),
          resultCount: 1,
        };

        const newHistory = [historyItem, ...searchHistory.slice(0, 9)]; // Keep last 10 searches
        saveSearchHistory(newHistory);
      } else {
        setResults([]);
        setError(response.message || "Không tìm thấy sản phẩm");
      }
    } catch (err) {
      setResults([]);
      setError("Lỗi khi tìm kiếm. Vui lòng thử lại.");
      console.error("Search error:", err);
    } finally {
      setLoading(false);
    }
  };

  const searchByText = async (query: string) => {
    if (!query.trim()) {
      setError("Vui lòng nhập từ khóa tìm kiếm");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // TODO: Implement text search API
      // For now, simulate search with mock data
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock search results
      const mockResults: SearchResult[] = [];
      setResults(mockResults);

      // Add to search history
      const historyItem: SearchHistory = {
        id: Date.now().toString(),
        query: query.trim(),
        timestamp: new Date().toISOString(),
        resultCount: mockResults.length,
      };

      const newHistory = [historyItem, ...searchHistory.slice(0, 9)];
      saveSearchHistory(newHistory);

      if (mockResults.length === 0) {
        setError("Không tìm thấy sản phẩm nào phù hợp");
      }
    } catch (err) {
      setResults([]);
      setError("Lỗi khi tìm kiếm. Vui lòng thử lại.");
      console.error("Search error:", err);
    } finally {
      setLoading(false);
    }
  };

  const clearResults = () => {
    setResults([]);
    setError(null);
  };

  const clearHistory = () => {
    localStorage.removeItem("search-history");
    setSearchHistory([]);
  };

  const removeHistoryItem = (id: string) => {
    const newHistory = searchHistory.filter((item) => item.id !== id);
    saveSearchHistory(newHistory);
  };

  return {
    results,
    loading,
    error,
    searchHistory,
    searchByBarcode,
    searchByText,
    clearResults,
    clearHistory,
    removeHistoryItem,
  };
};
