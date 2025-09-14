import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Activity, Car, AlertTriangle, TrendingUp, TrendingDown, Clock, Zap, Shield } from "lucide-react"
import TrafficFlowChart from "./TrafficFlowChart"
import SignalControlPanel from "./SignalControlPanel"

const mockTrafficData = {
  totalVehicles: 15420,
  activeSignals: 127,
  emergencyAlerts: 3,
  avgSpeed: 42,
  congestionLevel: 68,
  airQuality: 156,
}

const recentAlerts = [
  { id: 1, type: "Emergency", message: "Ambulance priority at Junction 15", time: "2 min ago", severity: "high" },
  { id: 2, type: "Accident", message: "Minor collision on Highway 101", time: "5 min ago", severity: "medium" },
  { id: 3, type: "Traffic", message: "Heavy congestion detected at Mall Road", time: "8 min ago", severity: "low" },
]

const trafficZones = [
  { name: "City Center", vehicles: 2340, status: "Heavy", color: "bg-destructive" },
  { name: "Highway 101", vehicles: 1890, status: "Moderate", color: "bg-chart-3" },
  { name: "Industrial Area", vehicles: 980, status: "Light", color: "bg-chart-2" },
  { name: "Residential Zone", vehicles: 1560, status: "Moderate", color: "bg-chart-3" },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Traffic Control Dashboard</h1>
          <p className="text-muted-foreground">Real-time AI-powered traffic management system</p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-chart-2 text-white border-chart-2">
            <Activity className="w-3 h-3 mr-1" />
            System Active
          </Badge>
          <Button>Generate Report</Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Vehicles</CardTitle>
            <Car className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockTrafficData.totalVehicles.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline w-3 h-3 mr-1 text-chart-2" />
              +12% from yesterday
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Signals</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockTrafficData.activeSignals}</div>
            <p className="text-xs text-muted-foreground">
              <Shield className="inline w-3 h-3 mr-1 text-chart-2" />
              All operational
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Emergency Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{mockTrafficData.emergencyAlerts}</div>
            <p className="text-xs text-muted-foreground">
              <Clock className="inline w-3 h-3 mr-1" />
              Requires attention
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Speed</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockTrafficData.avgSpeed} km/h</div>
            <p className="text-xs text-muted-foreground">
              <TrendingDown className="inline w-3 h-3 mr-1 text-chart-4" />
              -5% from peak hours
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Traffic Flow Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>AI Traffic Flow Analysis</CardTitle>
            <CardDescription>Real-time traffic density and flow patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <TrafficFlowChart />
          </CardContent>
        </Card>

        {/* Recent Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Alerts</CardTitle>
            <CardDescription>Latest system notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentAlerts.map((alert) => (
              <div key={alert.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${
                    alert.severity === "high"
                      ? "bg-destructive"
                      : alert.severity === "medium"
                        ? "bg-chart-3"
                        : "bg-chart-2"
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {alert.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{alert.time}</span>
                  </div>
                  <p className="text-sm text-foreground mt-1">{alert.message}</p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full bg-transparent">
              View All Alerts
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Traffic Zones and Signal Control */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Zones */}
        <Card>
          <CardHeader>
            <CardTitle>Traffic Zones Status</CardTitle>
            <CardDescription>Current traffic density by zone</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {trafficZones.map((zone, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${zone.color}`} />
                  <div>
                    <p className="font-medium text-sm">{zone.name}</p>
                    <p className="text-xs text-muted-foreground">{zone.vehicles} vehicles</p>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className={
                    zone.status === "Heavy"
                      ? "border-destructive text-destructive"
                      : zone.status === "Moderate"
                        ? "border-chart-3 text-chart-3"
                        : "border-chart-2 text-chart-2"
                  }
                >
                  {zone.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Signal Control Panel */}
        <Card>
          <CardHeader>
            <CardTitle>Signal Control Panel</CardTitle>
            <CardDescription>AI-powered traffic signal management</CardDescription>
          </CardHeader>
          <CardContent>
            <SignalControlPanel />
          </CardContent>
        </Card>
      </div>

      {/* System Performance */}
      <Card>
        <CardHeader>
          <CardTitle>System Performance Metrics</CardTitle>
          <CardDescription>Current system health and performance indicators</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Congestion Level</span>
                <span className="text-sm text-muted-foreground">{mockTrafficData.congestionLevel}%</span>
              </div>
              <Progress value={mockTrafficData.congestionLevel} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Air Quality Index</span>
                <span className="text-sm text-muted-foreground">{mockTrafficData.airQuality} AQI</span>
              </div>
              <Progress value={(mockTrafficData.airQuality / 300) * 100} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">System Efficiency</span>
                <span className="text-sm text-muted-foreground">94%</span>
              </div>
              <Progress value={94} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
