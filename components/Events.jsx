import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Calendar,
  MapPin,
  Users,
  Cloud,
  AlertTriangle,
  Clock,
  TrendingUp,
  Plus,
  Search,
  Filter,
  Megaphone,
  Umbrella,
  Sun,
  Wind,
} from "lucide-react"
import EventImpactChart from "./EventImpactChart"

const upcomingEvents = [
  {
    id: "EVT001",
    name: "Diwali Festival Celebration",
    type: "Festival",
    date: "2024-01-20",
    time: "18:00 - 23:00",
    location: "City Center Plaza",
    expectedAttendees: 15000,
    trafficImpact: "High",
    status: "Confirmed",
    preparations: ["Road Closures", "Extra Signals", "Parking Restrictions"],
    estimatedTrafficIncrease: 85,
  },
  {
    id: "EVT002",
    name: "Political Rally",
    type: "Rally",
    date: "2024-01-18",
    time: "16:00 - 20:00",
    location: "Stadium Road",
    expectedAttendees: 8000,
    trafficImpact: "Medium",
    status: "Planning",
    preparations: ["Route Diversions", "Security Checkpoints"],
    estimatedTrafficIncrease: 45,
  },
  {
    id: "EVT003",
    name: "Marathon Event",
    type: "Sports",
    date: "2024-01-22",
    time: "06:00 - 12:00",
    location: "Highway 101 to City Center",
    expectedAttendees: 5000,
    trafficImpact: "High",
    status: "Confirmed",
    preparations: ["Road Closures", "Alternate Routes", "Medical Stations"],
    estimatedTrafficIncrease: 70,
  },
]

const weatherAlerts = [
  {
    id: "WTH001",
    type: "Heavy Rain",
    severity: "High",
    startTime: "2024-01-16 14:00",
    endTime: "2024-01-16 20:00",
    affectedAreas: ["Highway 101", "City Center", "Industrial Zone"],
    trafficImpact: "Severe congestion expected",
    recommendations: ["Reduce speed limits", "Increase signal timing", "Deploy emergency teams"],
    probability: 85,
  },
  {
    id: "WTH002",
    type: "Fog",
    severity: "Medium",
    startTime: "2024-01-17 05:00",
    endTime: "2024-01-17 09:00",
    affectedAreas: ["Highway Corridors", "Airport Road"],
    trafficImpact: "Reduced visibility, slower traffic",
    recommendations: ["Activate fog lights", "Reduce speed limits", "Increase patrol units"],
    probability: 70,
  },
  {
    id: "WTH003",
    type: "Strong Winds",
    severity: "Medium",
    startTime: "2024-01-18 12:00",
    endTime: "2024-01-18 18:00",
    affectedAreas: ["Bridge Areas", "Open Highways"],
    trafficImpact: "Risk for high-profile vehicles",
    recommendations: ["Restrict heavy vehicles", "Monitor bridge traffic", "Issue advisories"],
    probability: 78,
  },
]

const eventHistory = [
  {
    name: "New Year Celebration",
    date: "2024-01-01",
    actualAttendees: 25000,
    predictedImpact: 80,
    actualImpact: 92,
    accuracy: 85,
    lessons: "Underestimated parking demand",
  },
  {
    name: "Independence Day Parade",
    date: "2023-08-15",
    actualAttendees: 12000,
    predictedImpact: 65,
    actualImpact: 58,
    accuracy: 89,
    lessons: "Good crowd management",
  },
  {
    name: "Cricket Match",
    date: "2023-12-10",
    actualAttendees: 18000,
    predictedImpact: 75,
    actualImpact: 82,
    accuracy: 91,
    lessons: "Effective alternate routes",
  },
]

const trafficPredictions = {
  currentWeek: {
    normalTraffic: 100,
    eventImpact: 45,
    weatherImpact: 25,
    totalPredicted: 170,
  },
  nextWeek: {
    normalTraffic: 100,
    eventImpact: 85,
    weatherImpact: 15,
    totalPredicted: 200,
  },
}

function getImpactColor(impact) {
  if (impact === "High" || impact === "Severe") return "border-destructive text-destructive"
  if (impact === "Medium") return "border-chart-3 text-chart-3"
  return "border-chart-2 text-chart-2"
}

function getWeatherIcon(type) {
  switch (type) {
    case "Heavy Rain":
      return <Umbrella className="w-4 h-4" />
    case "Fog":
      return <Cloud className="w-4 h-4" />
    case "Strong Winds":
      return <Wind className="w-4 h-4" />
    default:
      return <Sun className="w-4 h-4" />
  }
}

export default function Events() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Event Management Center</h1>
          <p className="text-muted-foreground">Predictive traffic management for events and weather conditions</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter Events
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Event
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-chart-1/10 rounded-lg">
                <Calendar className="w-5 h-5 text-chart-1" />
              </div>
              <div>
                <p className="text-sm font-medium">Upcoming Events</p>
                <p className="text-2xl font-bold">{upcomingEvents.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-chart-3/10 rounded-lg">
                <Cloud className="w-5 h-5 text-chart-3" />
              </div>
              <div>
                <p className="text-sm font-medium">Weather Alerts</p>
                <p className="text-2xl font-bold text-chart-3">{weatherAlerts.length}</p>
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
                <p className="text-sm font-medium">Expected Attendees</p>
                <p className="text-2xl font-bold text-chart-2">28K</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-destructive/10 rounded-lg">
                <TrendingUp className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <p className="text-sm font-medium">Traffic Impact</p>
                <p className="text-2xl font-bold text-destructive">+85%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="weather">Weather Alerts</TabsTrigger>
          <TabsTrigger value="predictions">Traffic Predictions</TabsTrigger>
          <TabsTrigger value="history">Event History</TabsTrigger>
        </TabsList>

        {/* Upcoming Events Tab */}
        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-chart-1" />
                Scheduled Events & Gatherings
              </CardTitle>
              <CardDescription>Upcoming events requiring traffic management planning</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input placeholder="Search events by name, location, or type..." className="pl-10" />
                </div>
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Events</SelectItem>
                    <SelectItem value="festival">Festivals</SelectItem>
                    <SelectItem value="rally">Rallies</SelectItem>
                    <SelectItem value="sports">Sports</SelectItem>
                    <SelectItem value="concert">Concerts</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="p-4 border border-border rounded-lg bg-card/50">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-chart-1/10 rounded-lg">
                          {event.type === "Festival" ? (
                            <Calendar className="w-4 h-4 text-chart-1" />
                          ) : event.type === "Rally" ? (
                            <Megaphone className="w-4 h-4 text-chart-1" />
                          ) : (
                            <Users className="w-4 h-4 text-chart-1" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">{event.name}</h4>
                          <p className="text-xs text-muted-foreground">{event.type} Event</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={getImpactColor(event.trafficImpact)}>
                          {event.trafficImpact} Impact
                        </Badge>
                        <Badge
                          variant="outline"
                          className={
                            event.status === "Confirmed" ? "border-chart-2 text-chart-2" : "border-chart-3 text-chart-3"
                          }
                        >
                          {event.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                      <div>
                        <p className="text-muted-foreground">Date & Time</p>
                        <p className="font-medium">{event.date}</p>
                        <p className="text-xs text-muted-foreground">{event.time}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Location</p>
                        <p className="font-medium">{event.location}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Expected Attendees</p>
                        <p className="font-medium text-chart-2">{event.expectedAttendees.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Traffic Increase</p>
                        <p className="font-medium text-destructive">+{event.estimatedTrafficIncrease}%</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium mb-2">Planned Preparations:</p>
                      <div className="flex gap-2 flex-wrap">
                        {event.preparations.map((prep, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {prep}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">
                        <Clock className="inline w-3 h-3 mr-1" />
                        Event ID: {event.id}
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <MapPin className="w-3 h-3 mr-1" />
                          View Route Plan
                        </Button>
                        <Button size="sm">Edit Preparations</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Weather Alerts Tab */}
        <TabsContent value="weather" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cloud className="w-5 h-5 text-chart-3" />
                Weather-Based Traffic Alerts
              </CardTitle>
              <CardDescription>Weather conditions affecting traffic flow and safety</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weatherAlerts.map((alert) => (
                  <div key={alert.id} className="p-4 border border-border rounded-lg bg-card/50">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-chart-3/10 rounded-lg">{getWeatherIcon(alert.type)}</div>
                        <div>
                          <h4 className="font-semibold text-sm">{alert.type} Alert</h4>
                          <p className="text-xs text-muted-foreground">Probability: {alert.probability}%</p>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          alert.severity === "High"
                            ? "border-destructive text-destructive"
                            : "border-chart-3 text-chart-3"
                        }
                      >
                        {alert.severity} Severity
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4">
                      <div>
                        <p className="text-muted-foreground">Duration</p>
                        <p className="font-medium">
                          {alert.startTime.split(" ")[1]} - {alert.endTime.split(" ")[1]}
                        </p>
                        <p className="text-xs text-muted-foreground">{alert.startTime.split(" ")[0]}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Traffic Impact</p>
                        <p className="font-medium text-destructive">{alert.trafficImpact}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium mb-2">Affected Areas:</p>
                      <div className="flex gap-2 flex-wrap">
                        {alert.affectedAreas.map((area, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium mb-2">Recommended Actions:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {alert.recommendations.map((rec, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-chart-1 rounded-full" />
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">Alert ID: {alert.id}</p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <AlertTriangle className="w-3 h-3 mr-1" />
                          Issue Advisory
                        </Button>
                        <Button size="sm">Activate Measures</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Traffic Predictions Tab */}
        <TabsContent value="predictions" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-chart-1" />
                  Traffic Impact Predictions
                </CardTitle>
                <CardDescription>AI-powered traffic flow predictions based on events and weather</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 rounded-lg bg-muted/30">
                    <h4 className="font-semibold text-sm mb-3">Current Week Forecast</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Normal Traffic</span>
                        <span className="text-sm font-medium">100%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Event Impact</span>
                        <span className="text-sm font-medium text-chart-3">+45%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Weather Impact</span>
                        <span className="text-sm font-medium text-chart-1">+25%</span>
                      </div>
                      <hr className="border-border" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold">Total Predicted</span>
                        <span className="text-sm font-bold text-destructive">170%</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-muted/30">
                    <h4 className="font-semibold text-sm mb-3">Next Week Forecast</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Normal Traffic</span>
                        <span className="text-sm font-medium">100%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Event Impact</span>
                        <span className="text-sm font-medium text-destructive">+85%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Weather Impact</span>
                        <span className="text-sm font-medium text-chart-2">+15%</span>
                      </div>
                      <hr className="border-border" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold">Total Predicted</span>
                        <span className="text-sm font-bold text-destructive">200%</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-chart-1/10">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-chart-1" />
                      <span className="font-semibold text-sm">Preparation Recommendations</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Deploy additional traffic personnel for Diwali celebration</li>
                      <li>• Prepare alternate routes for marathon event</li>
                      <li>• Monitor weather conditions for potential delays</li>
                      <li>• Coordinate with event organizers for crowd management</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Event Impact Analysis</CardTitle>
                <CardDescription>Historical and predicted traffic impact patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <EventImpactChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Event History Tab */}
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-chart-2" />
                Event History & Analysis
              </CardTitle>
              <CardDescription>Past event performance and lessons learned</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {eventHistory.map((event, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg bg-card/50">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-sm">{event.name}</h4>
                        <p className="text-xs text-muted-foreground">{event.date}</p>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          event.accuracy >= 90
                            ? "border-chart-2 text-chart-2"
                            : event.accuracy >= 80
                              ? "border-chart-3 text-chart-3"
                              : "border-chart-4 text-chart-4"
                        }
                      >
                        {event.accuracy}% Accuracy
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-3">
                      <div>
                        <p className="text-muted-foreground">Actual Attendees</p>
                        <p className="font-medium">{event.actualAttendees.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Predicted Impact</p>
                        <p className="font-medium">{event.predictedImpact}%</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Actual Impact</p>
                        <p className="font-medium">{event.actualImpact}%</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Variance</p>
                        <p
                          className={`font-medium ${
                            Math.abs(event.actualImpact - event.predictedImpact) <= 10 ? "text-chart-2" : "text-chart-4"
                          }`}
                        >
                          {event.actualImpact > event.predictedImpact ? "+" : ""}
                          {event.actualImpact - event.predictedImpact}%
                        </p>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-muted/30">
                      <p className="text-sm font-medium mb-1">Key Lessons:</p>
                      <p className="text-sm text-muted-foreground">{event.lessons}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-lg bg-chart-2/10">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-chart-2" />
                  <span className="font-semibold text-sm">Prediction Accuracy Trends</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Overall prediction accuracy has improved by 15% over the last quarter. Weather-related predictions
                  show 92% accuracy, while event-based predictions average 88% accuracy.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
