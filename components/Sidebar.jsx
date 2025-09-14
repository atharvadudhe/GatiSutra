"use client"

import {
  LayoutDashboard,
  AlertTriangle,
  Leaf,
  Car,
  Calendar,
  Activity,
  Shield,
  MapPin,
  BarChart3,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: AlertTriangle, label: "Alerts & Emergency" },
  { icon: Activity, label: "Pollution Monitor" },
  { icon: Car, label: "Vehicle Insights" },
  { icon: Leaf, label: "Green Initiatives" },
  { icon: Calendar, label: "Event Management" },
  { icon: BarChart3, label: "Analytics" },
  { icon: MapPin, label: "Traffic Map" },
  { icon: Shield, label: "Security" },
  { icon: Settings, label: "Settings" },
]

export default function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="bg-sidebar border-r border-sidebar-border w-64 h-screen flex flex-col">
      <div className="p-6">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Traffic Control Center</h2>
      </div>

      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Button
                onClick={() => setActivePage(item.label)}
                variant={activePage === item.label ? "default" : "ghost"}
                className={`w-full justify-start gap-3 ${
                  activePage === item.label
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-primary"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className="bg-sidebar-primary rounded-lg p-4">
          <h3 className="font-semibold text-sm text-sidebar-foreground">System Status</h3>
          <p className="text-xs text-muted-foreground mt-1">All systems operational</p>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-2 h-2 bg-chart-2 rounded-full"></div>
            <span className="text-xs text-muted-foreground">Online</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
