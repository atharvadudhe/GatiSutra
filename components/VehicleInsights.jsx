import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Car,
  Shield,
  MapPin,
  TrendingUp,
  TrendingDown,
  Search,
  AlertTriangle,
  Ban,
  CheckCircle,
  Clock,
  Users,
  Truck,
} from "lucide-react"
import MigrationChart from "./MigrationChart"

const stolenVehicles = [
  {
    id: "SV001",
    plateNumber: "MH12AB1234",
    type: "Sedan",
    make: "Honda",
    model: "City",
    color: "White",
    reportedDate: "2024-01-10",
    lastSeen: "Highway 101, Exit 15",
    lastSeenTime: "2024-01-15 13:45:22",
    status: "Active Alert",
    confidence: "95%",
  },
  {
    id: "SV002",
    plateNumber: "DL08CD5678",
    type: "SUV",
    make: "Toyota",
    model: "Fortuner",
    color: "Black",
    reportedDate: "2024-01-12",
    lastSeen: "City Center Mall",
    lastSeenTime: "2024-01-15 11:30:15",
    status: "Under Investigation",
    confidence: "87%",
  },
  {
    id: "SV003",
    plateNumber: "KA03EF9012",
    type: "Motorcycle",
    make: "Bajaj",
    model: "Pulsar",
    color: "Blue",
    reportedDate: "2024-01-14",
    lastSeen: "Industrial Area Gate 2",
    lastSeenTime: "2024-01-15 09:15:33",
    status: "Recently Detected",
    confidence: "92%",
  },
]

const migrationData = [
  {
    state: "Maharashtra",
    inbound: 2340,
    outbound: 1890,
    net: 450,
    trend: "up",
    topRoutes: ["Mumbai-Pune", "Nashik-Aurangabad"],
  },
  {
    state: "Karnataka",
    inbound: 1560,
    outbound: 1780,
    net: -220,
    trend: "down",
    topRoutes: ["Bangalore-Mysore", "Hubli-Dharwad"],
  },
  {
    state: "Gujarat",
    inbound: 980,
    outbound: 1120,
    net: -140,
    trend: "down",
    topRoutes: ["Ahmedabad-Surat", "Vadodara-Rajkot"],
  },
  {
    state: "Rajasthan",
    inbound: 1240,
    outbound: 890,
    net: 350,
    trend: "up",
    topRoutes: ["Jaipur-Jodhpur", "Udaipur-Kota"],
  },
]

const vehicleRestrictions = [
  {
    zone: "City Center",
    restrictions: [
      { type: "Heavy Vehicles", status: true, timeSlot: "06:00 - 22:00" },
      { type: "Auto Rickshaws", status: false, timeSlot: "All Day" },
      { type: "Commercial Vehicles", status: true, timeSlot: "08:00 - 20:00" },
    ],
  },
  {
    zone: "Residential Area",
    restrictions: [
      { type: "Heavy Vehicles", status: true, timeSlot: "22:00 - 06:00" },
      { type: "Auto Rickshaws", status: false, timeSlot: "All Day" },
      { type: "Commercial Vehicles", status: false, timeSlot: "All Day" },
    ],
  },
  {
    zone: "Industrial Zone",
    restrictions: [
      { type: "Heavy Vehicles", status: false, timeSlot: "All Day" },
      { type: "Auto Rickshaws", status: true, timeSlot: "Peak Hours" },
      { type: "Commercial Vehicles", status: false, timeSlot: "All Day" },
    ],
  },
]

const vehicleStats = {
  totalDetected: 45230,
  stolenAlerts: 3,
  restrictionViolations: 12,
  migrationMovements: 8970,
}

export default function VehicleInsights() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Vehicle Insights Center</h1>
          <p className="text-muted-foreground">Advanced vehicle tracking and regulation management</p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-chart-2 text-white border-chart-2">
            <Shield className="w-3 h-3 mr-1" />
            Monitoring Active
          </Badge>
          <Button>Generate Report</Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-chart-1/10 rounded-lg">
                <Car className="w-5 h-5 text-chart-1" />
              </div>
              <div>
                <p className="text-sm font-medium">Vehicles Detected</p>
                <p className="text-2xl font-bold">{vehicleStats.totalDetected.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-destructive/10 rounded-lg">
                <Shield className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <p className="text-sm font-medium">Stolen Alerts</p>
                <p className="text-2xl font-bold text-destructive">{vehicleStats.stolenAlerts}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-chart-3/10 rounded-lg">
                <Ban className="w-5 h-5 text-chart-3" />
              </div>
              <div>
                <p className="text-sm font-medium">Violations</p>
                <p className="text-2xl font-bold text-chart-3">{vehicleStats.restrictionViolations}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-chart-2/10 rounded-lg">
                <Users className="w-5 h-5 text-chart-2" />
              </div>
              <div>
                <p className="text-sm font-medium">Migration Movements</p>
                <p className="text-2xl font-bold text-chart-2">{vehicleStats.migrationMovements.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="stolen" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="stolen">Stolen Vehicle Detection</TabsTrigger>
          <TabsTrigger value="migration">Migration Insights</TabsTrigger>
          <TabsTrigger value="regulation">Smart Regulation</TabsTrigger>
        </TabsList>

        {/* Stolen Vehicle Detection Tab */}
        <TabsContent value="stolen" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-destructive" />
                Stolen Vehicle Detection System
              </CardTitle>
              <CardDescription>AI-powered number plate recognition for stolen vehicle identification</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input placeholder="Search by plate number, make, model..." className="pl-10" />
                </div>
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Alerts</SelectItem>
                    <SelectItem value="active">Active Alerts</SelectItem>
                    <SelectItem value="investigation">Under Investigation</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                {stolenVehicles.map((vehicle) => (
                  <div key={vehicle.id} className="p-4 border border-border rounded-lg bg-card/50">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-destructive/10 rounded-lg">
                          <Car className="w-4 h-4 text-destructive" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">{vehicle.plateNumber}</h4>
                          <p className="text-xs text-muted-foreground">
                            {vehicle.make} {vehicle.model} - {vehicle.color}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className={
                            vehicle.status === "Active Alert"
                              ? "border-destructive text-destructive"
                              : vehicle.status === "Recently Detected"
                                ? "border-chart-3 text-chart-3"
                                : "border-chart-1 text-chart-1"
                          }
                        >
                          {vehicle.status}
                        </Badge>
                        <Badge variant="outline" className="border-chart-2 text-chart-2">
                          {vehicle.confidence}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                      <div>
                        <p className="text-muted-foreground">Vehicle Type</p>
                        <p className="font-medium">{vehicle.type}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Reported Date</p>
                        <p className="font-medium">{vehicle.reportedDate}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Last Seen</p>
                        <p className="font-medium">{vehicle.lastSeen}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Detection Time</p>
                        <p className="font-medium">{vehicle.lastSeenTime.split(" ")[1]}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">
                        <Clock className="inline w-3 h-3 mr-1" />
                        {vehicle.lastSeenTime}
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <MapPin className="w-3 h-3 mr-1" />
                          Track Location
                        </Button>
                        <Button size="sm">
                          <AlertTriangle className="w-3 h-3 mr-1" />
                          Alert Units
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Migration Insights Tab */}
        <TabsContent value="migration" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-chart-1" />
                  Inter-State Vehicle Movement
                </CardTitle>
                <CardDescription>Real-time tracking of vehicle migration patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {migrationData.map((state, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg bg-card/50">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-sm">{state.state}</h4>
                        <div className="flex items-center gap-2">
                          {state.trend === "up" ? (
                            <TrendingUp className="w-4 h-4 text-chart-2" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-chart-4" />
                          )}
                          <Badge
                            variant="outline"
                            className={
                              state.net > 0
                                ? "border-chart-2 text-chart-2"
                                : state.net < 0
                                  ? "border-chart-4 text-chart-4"
                                  : "border-muted-foreground text-muted-foreground"
                            }
                          >
                            Net: {state.net > 0 ? "+" : ""}
                            {state.net}
                          </Badge>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                        <div>
                          <p className="text-muted-foreground">Inbound</p>
                          <p className="font-medium text-chart-2">{state.inbound.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Outbound</p>
                          <p className="font-medium text-chart-4">{state.outbound.toLocaleString()}</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Top Routes:</p>
                        <div className="flex gap-2">
                          {state.topRoutes.map((route, routeIndex) => (
                            <Badge key={routeIndex} variant="outline" className="text-xs">
                              {route}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Migration Trends</CardTitle>
                <CardDescription>Weekly vehicle movement patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <MigrationChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Smart Regulation Tab */}
        <TabsContent value="regulation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Ban className="w-5 h-5 text-chart-3" />
                Smart Vehicle Regulation Controls
              </CardTitle>
              <CardDescription>Zone-based vehicle restrictions and access control</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {vehicleRestrictions.map((zone, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg bg-card/50">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-lg">{zone.zone}</h4>
                      <Button size="sm" variant="outline">
                        Edit Zone
                      </Button>
                    </div>

                    <div className="space-y-3">
                      {zone.restrictions.map((restriction, restrictionIndex) => (
                        <div
                          key={restrictionIndex}
                          className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-chart-1/10 rounded-lg">
                              {restriction.type === "Heavy Vehicles" ? (
                                <Truck className="w-4 h-4 text-chart-1" />
                              ) : (
                                <Car className="w-4 h-4 text-chart-1" />
                              )}
                            </div>
                            <div>
                              <p className="font-medium text-sm">{restriction.type}</p>
                              <p className="text-xs text-muted-foreground">{restriction.timeSlot}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <Badge
                              variant="outline"
                              className={
                                restriction.status
                                  ? "border-destructive text-destructive"
                                  : "border-chart-2 text-chart-2"
                              }
                            >
                              {restriction.status ? "Restricted" : "Allowed"}
                            </Badge>
                            <Switch checked={restriction.status} />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 p-3 rounded-lg bg-chart-1/10">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-chart-2" />
                        <span className="text-sm font-medium">Zone Status: Active</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Automatic enforcement enabled. Violations will be logged and alerts sent to patrol units.
                      </p>
                    </div>
                  </div>
                ))}

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Add New Restriction Zone</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Zone Name</label>
                        <Input placeholder="Enter zone name" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Vehicle Type</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select vehicle type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="heavy">Heavy Vehicles</SelectItem>
                            <SelectItem value="auto">Auto Rickshaws</SelectItem>
                            <SelectItem value="commercial">Commercial Vehicles</SelectItem>
                            <SelectItem value="private">Private Vehicles</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Time Restriction</label>
                        <Input placeholder="e.g., 08:00 - 20:00" />
                      </div>
                      <div className="flex items-end">
                        <Button className="w-full">Add Restriction</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
