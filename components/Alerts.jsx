import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, Ambulance, Car, Shield, MapPin, Clock, Phone, CheckCircle, Filter } from "lucide-react"

const emergencyAlerts = [
  {
    id: "EMG001",
    type: "Ambulance",
    priority: "Critical",
    location: "Main St & 5th Ave",
    destination: "City Hospital",
    eta: "3 min",
    status: "Active",
    timestamp: "2024-01-15 14:23:45",
    vehicleId: "AMB-2301",
  },
  {
    id: "EMG002",
    type: "Fire Truck",
    priority: "High",
    location: "Industrial Ave",
    destination: "Factory District",
    eta: "7 min",
    status: "En Route",
    timestamp: "2024-01-15 14:18:12",
    vehicleId: "FIRE-1205",
  },
  {
    id: "EMG003",
    type: "Police",
    priority: "Medium",
    location: "Highway 101",
    destination: "Mall Road",
    eta: "12 min",
    status: "Dispatched",
    timestamp: "2024-01-15 14:15:30",
    vehicleId: "POL-4567",
  },
]

const accidentAlerts = [
  {
    id: "ACC001",
    severity: "Major",
    location: "Highway 101, Mile 15",
    vehicles: 3,
    injuries: "Unknown",
    lanes: "2 blocked",
    responders: ["Police", "Ambulance"],
    status: "Active",
    timestamp: "2024-01-15 14:20:15",
    reportedBy: "Traffic Camera AI",
  },
  {
    id: "ACC002",
    severity: "Minor",
    location: "Oak St & 2nd Ave",
    vehicles: 2,
    injuries: "None reported",
    lanes: "1 blocked",
    responders: ["Police"],
    status: "Clearing",
    timestamp: "2024-01-15 13:45:22",
    reportedBy: "Citizen Report",
  },
]

const rashDrivingAlerts = [
  {
    id: "RD001",
    vehicleId: "ABC-1234",
    violation: "Excessive Speed",
    speed: "95 km/h in 60 zone",
    location: "Highway 101",
    confidence: "98%",
    timestamp: "2024-01-15 14:25:10",
    action: "Alert Sent",
  },
  {
    id: "RD002",
    vehicleId: "XYZ-5678",
    violation: "Aggressive Lane Change",
    speed: "72 km/h",
    location: "Main St",
    confidence: "87%",
    timestamp: "2024-01-15 14:22:33",
    action: "Under Review",
  },
  {
    id: "RD003",
    vehicleId: "DEF-9012",
    violation: "Tailgating",
    speed: "55 km/h",
    location: "Industrial Ave",
    confidence: "92%",
    timestamp: "2024-01-15 14:19:45",
    action: "Warning Issued",
  },
]

const roadBlockages = [
  {
    id: "RB001",
    type: "Construction",
    location: "Center St & 3rd Ave",
    severity: "High",
    lanes: "2 of 4 blocked",
    duration: "3 hours",
    detour: "Available via Oak St",
    status: "Active",
    timestamp: "2024-01-15 12:00:00",
  },
  {
    id: "RB002",
    type: "Fallen Tree",
    location: "Park Ave",
    severity: "Medium",
    lanes: "1 of 2 blocked",
    duration: "45 min",
    detour: "Use parallel streets",
    status: "Clearing",
    timestamp: "2024-01-15 13:30:15",
  },
]

export default function Alerts() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Alert Management Center</h1>
          <p className="text-muted-foreground">Emergency prioritization and incident response</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button>
            <Phone className="w-4 h-4 mr-2" />
            Emergency Contact
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-destructive/10 rounded-lg">
                <Ambulance className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <p className="text-sm font-medium">Active Emergencies</p>
                <p className="text-2xl font-bold text-destructive">3</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-chart-3/10 rounded-lg">
                <Car className="w-5 h-5 text-chart-3" />
              </div>
              <div>
                <p className="text-sm font-medium">Accidents</p>
                <p className="text-2xl font-bold text-chart-3">2</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-chart-4/10 rounded-lg">
                <Shield className="w-5 h-5 text-chart-4" />
              </div>
              <div>
                <p className="text-sm font-medium">Rash Driving</p>
                <p className="text-2xl font-bold text-chart-4">3</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-chart-1/10 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-chart-1" />
              </div>
              <div>
                <p className="text-sm font-medium">Road Blockages</p>
                <p className="text-2xl font-bold text-chart-1">2</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alert Tabs */}
      <Tabs defaultValue="emergency" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="emergency">Emergency Priority</TabsTrigger>
          <TabsTrigger value="accidents">Accidents</TabsTrigger>
          <TabsTrigger value="rash-driving">Rash Driving</TabsTrigger>
          <TabsTrigger value="blockages">Road Blockages</TabsTrigger>
        </TabsList>

        {/* Emergency Priority Tab */}
        <TabsContent value="emergency" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Ambulance className="w-5 h-5 text-destructive" />
                Emergency Vehicle Priority System
              </CardTitle>
              <CardDescription>Real-time emergency vehicle tracking and signal prioritization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {emergencyAlerts.map((alert) => (
                  <div key={alert.id} className="p-4 border border-border rounded-lg bg-card/50">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-destructive/10 rounded-lg">
                          <Ambulance className="w-4 h-4 text-destructive" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">
                            {alert.type} - {alert.vehicleId}
                          </h4>
                          <p className="text-xs text-muted-foreground">{alert.id}</p>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          alert.priority === "Critical"
                            ? "border-destructive text-destructive"
                            : alert.priority === "High"
                              ? "border-chart-3 text-chart-3"
                              : "border-chart-1 text-chart-1"
                        }
                      >
                        {alert.priority}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Location</p>
                        <p className="font-medium">{alert.location}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Destination</p>
                        <p className="font-medium">{alert.destination}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">ETA</p>
                        <p className="font-medium text-chart-2">{alert.eta}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Status</p>
                        <Badge variant="outline" className="border-chart-2 text-chart-2">
                          {alert.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <p className="text-xs text-muted-foreground">
                        <Clock className="inline w-3 h-3 mr-1" />
                        {alert.timestamp}
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <MapPin className="w-3 h-3 mr-1" />
                          Track
                        </Button>
                        <Button size="sm">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Clear Path
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Accidents Tab */}
        <TabsContent value="accidents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="w-5 h-5 text-chart-3" />
                Accident Detection & Response
              </CardTitle>
              <CardDescription>AI-powered accident detection and emergency response coordination</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {accidentAlerts.map((alert) => (
                  <div key={alert.id} className="p-4 border border-border rounded-lg bg-card/50">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-chart-3/10 rounded-lg">
                          <Car className="w-4 h-4 text-chart-3" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">Accident - {alert.id}</h4>
                          <p className="text-xs text-muted-foreground">Reported by {alert.reportedBy}</p>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          alert.severity === "Major"
                            ? "border-destructive text-destructive"
                            : "border-chart-3 text-chart-3"
                        }
                      >
                        {alert.severity}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                      <div>
                        <p className="text-muted-foreground">Location</p>
                        <p className="font-medium">{alert.location}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Vehicles</p>
                        <p className="font-medium">{alert.vehicles}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Injuries</p>
                        <p className="font-medium">{alert.injuries}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Lanes Blocked</p>
                        <p className="font-medium text-destructive">{alert.lanes}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">Responders:</span>
                        {alert.responders.map((responder, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {responder}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <MapPin className="w-3 h-3 mr-1" />
                          View Location
                        </Button>
                        <Button size="sm">
                          <Phone className="w-3 h-3 mr-1" />
                          Dispatch
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Rash Driving Tab */}
        <TabsContent value="rash-driving" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-chart-4" />
                Rash Driving Detection System
              </CardTitle>
              <CardDescription>AI-powered detection of aggressive and dangerous driving behaviors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {rashDrivingAlerts.map((alert) => (
                  <div key={alert.id} className="p-4 border border-border rounded-lg bg-card/50">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-chart-4/10 rounded-lg">
                          <Shield className="w-4 h-4 text-chart-4" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">{alert.violation}</h4>
                          <p className="text-xs text-muted-foreground">Vehicle: {alert.vehicleId}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="border-chart-4 text-chart-4">
                        {alert.confidence} Confidence
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                      <div>
                        <p className="text-muted-foreground">Speed</p>
                        <p className="font-medium text-destructive">{alert.speed}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Location</p>
                        <p className="font-medium">{alert.location}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Time</p>
                        <p className="font-medium">{alert.timestamp.split(" ")[1]}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Action</p>
                        <Badge
                          variant="outline"
                          className={
                            alert.action === "Alert Sent"
                              ? "border-chart-2 text-chart-2"
                              : alert.action === "Warning Issued"
                                ? "border-chart-3 text-chart-3"
                                : "border-muted-foreground text-muted-foreground"
                          }
                        >
                          {alert.action}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">
                        <Clock className="inline w-3 h-3 mr-1" />
                        {alert.timestamp}
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          View Evidence
                        </Button>
                        <Button size="sm">Issue Citation</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Road Blockages Tab */}
        <TabsContent value="blockages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-chart-1" />
                Road Blockage Management
              </CardTitle>
              <CardDescription>Real-time monitoring and management of road obstructions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {roadBlockages.map((blockage) => (
                  <div key={blockage.id} className="p-4 border border-border rounded-lg bg-card/50">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-chart-1/10 rounded-lg">
                          <AlertTriangle className="w-4 h-4 text-chart-1" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">{blockage.type}</h4>
                          <p className="text-xs text-muted-foreground">{blockage.id}</p>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          blockage.severity === "High"
                            ? "border-destructive text-destructive"
                            : "border-chart-3 text-chart-3"
                        }
                      >
                        {blockage.severity}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                      <div>
                        <p className="text-muted-foreground">Location</p>
                        <p className="font-medium">{blockage.location}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Lanes Affected</p>
                        <p className="font-medium text-destructive">{blockage.lanes}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Duration</p>
                        <p className="font-medium">{blockage.duration}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Status</p>
                        <Badge
                          variant="outline"
                          className={
                            blockage.status === "Active"
                              ? "border-destructive text-destructive"
                              : "border-chart-3 text-chart-3"
                          }
                        >
                          {blockage.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="mb-3">
                      <p className="text-sm text-muted-foreground">Detour Available:</p>
                      <p className="text-sm font-medium">{blockage.detour}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">
                        <Clock className="inline w-3 h-3 mr-1" />
                        {blockage.timestamp}
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <MapPin className="w-3 h-3 mr-1" />
                          Show Detour
                        </Button>
                        <Button size="sm">Update Status</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
