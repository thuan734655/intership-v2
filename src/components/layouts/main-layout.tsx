import type { ReactNode } from "react"
import { Button } from "../ui/button"
import { QrCode, Search, History, Star } from "lucide-react"
import Link from "next/link"

interface MainLayoutProps {
  children: ReactNode
  currentPage?: "home" | "search" | "history" | "favorites"
}

export function MainLayout({ children, currentPage = "home" }: MainLayoutProps) {
  const navItems = [
    { id: "home", label: "Trang chủ", icon: QrCode, href: "/" },
    { id: "search", label: "Tìm kiếm", icon: Search, href: "/search" },
    { id: "history", label: "Lịch sử", icon: History, href: "/history" },
  ]

  return (
    <div className="min-h-screen bg-background" suppressHydrationWarning>
      {/* Header */}
      <header>
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-foreground">Food Scanner</h1>
          <p className="text-muted-foreground">Quét mã vạch để kiểm tra thông tin thực phẩm</p>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-sidebar-border min-h-[calc(100vh-80px)]">
          <nav className="p-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = currentPage === item.id

              return (
                <Link key={item.id} href={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={`w-full justify-start gap-3 ${
                      isActive
                        ? "bg-sidebar-primary text-sidebar-primary-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              )
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
