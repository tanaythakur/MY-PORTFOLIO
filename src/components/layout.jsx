import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"
import { Outlet } from "react-router-dom"

export function Layout() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}