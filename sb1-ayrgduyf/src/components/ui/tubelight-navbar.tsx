import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const currentItem = items.find(item => item.url === location.pathname)
    if (currentItem) {
      setActiveTab(currentItem.name)
    }
  }, [location.pathname, items])

  return (
    <div
      className={cn(
        "fixed top-20 left-1/2 -translate-x-1/2 z-30",
        className,
      )}
    >
      <div className="flex items-center gap-2 bg-white dark:bg-neutral-900/95 border border-gray-200/50 dark:border-neutral-700/30 backdrop-blur-xl py-1.5 px-2 rounded-full shadow-xl shadow-black/10">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              to={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300",
                isActive
                  ? "bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-white shadow-lg shadow-black/5"
                  : "text-gray-500 dark:text-neutral-400 hover:text-gray-700 dark:hover:text-neutral-200",
              )}
            >
              <span className="hidden md:inline relative z-10">{item.name}</span>
              <span className="md:hidden relative z-10">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-gradient-to-b from-gray-900 dark:from-neutral-400 to-transparent rounded-t-full opacity-80">
                    <div className="absolute w-16 h-8 bg-gray-900/10 dark:bg-neutral-400/10 rounded-full blur-lg -top-3 -left-3" />
                    <div className="absolute w-12 h-6 bg-gray-900/10 dark:bg-neutral-400/10 rounded-full blur-md -top-2 -left-1" />
                    <div className="absolute w-6 h-6 bg-gray-900/5 dark:bg-neutral-400/5 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
