"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import Footer from "@/components/Footer"
import Dashboard from "@/components/Dashboard"
import Alerts from "@/components/Alerts"
import PollutionMonitor from "@/components/PollutionMonitor"
import VehicleInsights from "@/components/VehicleInsights"
import GreenInitiatives from "@/components/GreenInitiatives"
import Events from "@/components/Events"
import TrafficMap from "@/components/TrafficMap"
import Security from "@/components/Security"
import Settings from "@/components/Settings"

export default function Home() {
  const [activePage, setActivePage] = useState<string>("Dashboard")

  const renderActivePage = () => {
    switch (activePage) {
      case "Dashboard":
        return <Dashboard />
      case "Alerts & Emergency":
        return <Alerts />
      case "Pollution Monitor":
        return <PollutionMonitor />
      case "Vehicle Insights":
        return <VehicleInsights />
      case "Green Initiatives":
        return <GreenInitiatives />
      case "Event Management":
        return <Events />
      case "Analytics":
        return <Dashboard /> // Placeholder - using Dashboard for now
      case "Traffic Map":
        return <TrafficMap />
      case "Security":
        return <Security />
      case "Settings":
        return <Settings />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <main className="flex-1 flex flex-col">
          <div className="flex-1 p-6">{renderActivePage()}</div>
          <Footer />
        </main>
      </div>
    </div>
  )
}
