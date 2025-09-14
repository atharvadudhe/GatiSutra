import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, TrendingUp, TrendingDown, Wind, Thermometer, Droplets, Eye, Car, Factory } from "lucide-react"
import AirQualityChart from "./AirQualityChart"
import EmissionsChart from "./EmissionsChart"

const airQualityData = {
  currentAQI: 156,
  status: "Unhealthy for Sensitive Groups",
  pm25: 65.2,
  pm10: 89.4,
  no2: 42.1,
  so2: 18.7,
  co: 2.3,
  o3: 78.9,
}

const monitoringStations = [
  { id: "AQ001", name: "City Center", aqi: 168, status: "Unhealthy", pm25: 72.1, trend: "up" },
  { id: "AQ002", name: "Industrial Zone", aqi: 201, status: "Very Unhealthy", pm25: 95.3, trend: "up" },
  { id: "AQ003", name: "Residential Area", aqi: 134, status: "Unhealthy for Sensitive", pm25: 58.7, trend: "down" },
  { id: "AQ004", name: "Highway Corridor", aqi: 178, status: "Unhealthy", pm25: 81.2, trend: "up" },
  { id: "AQ005", name: "Park District", aqi: 98, status: "Moderate", pm25: 35.4, trend: "down" },
]

const vehicleEmissions = [
  { category: "Heavy Vehicles", count: 1240, emissions: 45.2, compliance: 78, color: "bg-chart-4" },
  { category: "Light Vehicles", count: 8950, emissions: 32.1, compliance: 89, color: "bg-chart-3" },
  { category: "Two Wheelers", count: 12400, emissions: 18.7, compliance: 92, color: "bg-chart-2" },
  { category: "Public Transport", count: 450, emissions: 28.9, compliance: 95, color: "bg-chart-1" },
]

const complianceAlerts = [
  {
    id: "COMP001",
    vehicleId: "MH12AB1234",
    type: "Heavy Vehicle",
    violation: "Excessive CO2 Emissions",
    reading: "180 g/km",
    limit: "120 g/km",
    location: "Highway Toll Plaza",
    timestamp: "2024-01-15 14:30:22",
    action: "Fine Issued",
  },
  {
    id: "COMP002",
    vehicleId: "MH12CD5678",
    type: "Diesel Car",
    violation: "High Particulate Matter",
    reading: "0.08 g/km",
    limit: "0.045 g/km",
    location: "City Center Check Point",
    timestamp: "2024-01-15 14:25:15",
    action: "Warning Issued",
  },
  {
    id: "COMP003",
    vehicleId: "MH12EF9012",
    type: "Bus",
    violation: "NOx Limit Exceeded",
    reading: "2.1 g/kWh",
    limit: "1.5 g/kWh",
    location: "Bus Terminal",
    timestamp: "2024-01-15 14:18:45",
    action: "Under Review",
  },
]

function getAQIColor(aqi) {
  if (aqi <= 50) return "text-chart-2 border-chart-2"
  if (aqi <= 100) return "text-chart-3 border-chart-3"
  if (aqi <= 150) return "text-chart-1 border-chart-1"
  if (aqi <= 200) return "text-chart-4 border-chart-4"
  return "text-destructive border-destructive"
}

function getAQIStatus(aqi) {
  if (aqi <= 50) return "Good"
  if (aqi <= 100) return "Moderate"
  if (aqi <= 150) return "Unhealthy for Sensitive"
  if (aqi <= 200) return "Unhealthy"
  return "Very Unhealthy"
}

export default function PollutionMonitor() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Pollution Monitoring Center</h1>
          <p className="text-muted-foreground">Air quality tracking and vehicle emissions compliance</p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-chart-2 text-white border-chart-2">
            <Wind className="w-3 h-3 mr-1" />
            Monitoring Active
          </Badge>
          <Button>Generate Report</Button>
        </div>
      </div>

      {/* Current AQI Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-chart-1" />
              Current Air Quality
            </CardTitle>
            <CardDescription>Real-time AQI monitoring</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-chart-4 mb-2">{airQualityData.currentAQI}</div>
              <Badge variant="outline" className={getAQIColor(airQualityData.currentAQI)}>
                {airQualityData.status}
              </Badge>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">PM2.5</span>
                <span className="text-sm font-medium">{airQualityData.pm25} μg/m³</span>
              </div>
              <Progress value={(airQualityData.pm25 / 100) * 100} className="h-2" />

              <div className="flex items-center justify-between">
                <span className="text-sm">PM10</span>
                <span className="text-sm font-medium">{airQualityData.pm10} μg/m³</span>
              </div>
              <Progress value={(airQualityData.pm10 / 150) * 100} className="h-2" />

              <div className="flex items-center justify-between">
                <span className="text-sm">NO₂</span>
                <span className="text-sm font-medium">{airQualityData.no2} μg/m³</span>
              </div>
              <Progress value={(airQualityData.no2 / 80) * 100} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Air Quality Trend</CardTitle>
            <CardDescription>24-hour AQI monitoring across the city</CardDescription>
          </CardHeader>
          <CardContent>
            <AirQualityChart />
          </CardContent>
        </Card>
      </div>

      {/* Monitoring Stations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wind className="w-5 h-5 text-chart-1" />
            Monitoring Stations
          </CardTitle>
          <CardDescription>Real-time data from air quality monitoring stations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {monitoringStations.map((station) => (
              <div key={station.id} className="p-4 border border-border rounded-lg bg-card/50">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-sm">{station.name}</h4>
                  {station.trend === "up" ? (
                    <TrendingUp className="w-4 h-4 text-chart-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-chart-2" />
                  )}
                </div>
                <div className="text-2xl font-bold mb-1">{station.aqi}</div>
                <Badge variant="outline" className={getAQIColor(station.aqi)} size="sm">
                  {getAQIStatus(station.aqi)}
                </Badge>
                <p className="text-xs text-muted-foreground mt-2">PM2.5: {station.pm25} μg/m³</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tabs for detailed monitoring */}
      <Tabs defaultValue="emissions" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="emissions">Vehicle Emissions</TabsTrigger>
          <TabsTrigger value="compliance">Compliance Monitoring</TabsTrigger>
          <TabsTrigger value="alerts">Pollution Alerts</TabsTrigger>
        </TabsList>

        {/* Vehicle Emissions Tab */}
        <TabsContent value="emissions" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="w-5 h-5 text-chart-1" />
                  Vehicle Category Emissions
                </CardTitle>
                <CardDescription>Emissions by vehicle type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {vehicleEmissions.map((category, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${category.color}`} />
                          <span className="text-sm font-medium">{category.category}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{category.count} vehicles</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Emissions: {category.emissions} g/km</span>
                        <span>Compliance: {category.compliance}%</span>
                      </div>
                      <Progress value={category.compliance} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Emissions Trend</CardTitle>
                <CardDescription>Daily emissions monitoring</CardDescription>
              </CardHeader>
              <CardContent>
                <EmissionsChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Compliance Monitoring Tab */}
        <TabsContent value="compliance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Factory className="w-5 h-5 text-chart-4" />
                Emissions Compliance Violations
              </CardTitle>
              <CardDescription>Real-time monitoring of vehicle emissions compliance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {complianceAlerts.map((alert) => (
                  <div key={alert.id} className="p-4 border border-border rounded-lg bg-card/50">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-chart-4/10 rounded-lg">
                          <Car className="w-4 h-4 text-chart-4" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">{alert.vehicleId}</h4>
                          <p className="text-xs text-muted-foreground">{alert.type}</p>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          alert.action === "Fine Issued"
                            ? "border-destructive text-destructive"
                            : alert.action === "Warning Issued"
                              ? "border-chart-3 text-chart-3"
                              : "border-muted-foreground text-muted-foreground"
                        }
                      >
                        {alert.action}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                      <div>
                        <p className="text-muted-foreground">Violation</p>
                        <p className="font-medium">{alert.violation}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Reading</p>
                        <p className="font-medium text-destructive">{alert.reading}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Limit</p>
                        <p className="font-medium">{alert.limit}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Location</p>
                        <p className="font-medium">{alert.location}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">{alert.timestamp}</p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                        <Button size="sm">Take Action</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Pollution Alerts Tab */}
        <TabsContent value="alerts" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  Critical Pollution Zones
                </CardTitle>
                <CardDescription>Areas requiring immediate attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm">Industrial Zone</h4>
                      <Badge variant="outline" className="border-destructive text-destructive">
                        Critical
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">AQI: 201 - Very Unhealthy</p>
                    <p className="text-xs text-muted-foreground mt-1">PM2.5 levels exceeding safe limits</p>
                  </div>

                  <div className="p-3 rounded-lg bg-chart-3/10 border border-chart-3/20">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm">Highway Corridor</h4>
                      <Badge variant="outline" className="border-chart-3 text-chart-3">
                        High
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">AQI: 178 - Unhealthy</p>
                    <p className="text-xs text-muted-foreground mt-1">High vehicle emissions detected</p>
                  </div>

                  <div className="p-3 rounded-lg bg-chart-1/10 border border-chart-1/20">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm">City Center</h4>
                      <Badge variant="outline" className="border-chart-1 text-chart-1">
                        Medium
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">AQI: 168 - Unhealthy</p>
                    <p className="text-xs text-muted-foreground mt-1">Traffic congestion contributing to pollution</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Thermometer className="w-5 h-5 text-chart-2" />
                  Weather Impact
                </CardTitle>
                <CardDescription>Weather conditions affecting air quality</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 rounded-lg bg-muted/30">
                      <Wind className="w-6 h-6 mx-auto mb-2 text-chart-1" />
                      <p className="text-sm font-medium">Wind Speed</p>
                      <p className="text-lg font-bold">12 km/h</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-muted/30">
                      <Thermometer className="w-6 h-6 mx-auto mb-2 text-chart-3" />
                      <p className="text-sm font-medium">Temperature</p>
                      <p className="text-lg font-bold">28°C</p>
                    </div>
                  </div>

                  <div className="text-center p-3 rounded-lg bg-muted/30">
                    <Droplets className="w-6 h-6 mx-auto mb-2 text-chart-1" />
                    <p className="text-sm font-medium">Humidity</p>
                    <p className="text-lg font-bold">65%</p>
                  </div>

                  <div className="p-3 rounded-lg bg-chart-3/10">
                    <p className="text-sm font-medium mb-1">Weather Alert</p>
                    <p className="text-xs text-muted-foreground">
                      Low wind conditions may lead to pollutant accumulation. Consider traffic restrictions in
                      high-emission zones.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
