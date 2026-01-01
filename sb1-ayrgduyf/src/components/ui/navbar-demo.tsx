import { Home, Car, HelpCircle, User } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Collection', url: '/collection', icon: Car },
    { name: 'FAQ', url: '/faq', icon: HelpCircle },
    { name: 'About', url: '/about', icon: User }
  ]

  return <NavBar items={navItems} />
}
