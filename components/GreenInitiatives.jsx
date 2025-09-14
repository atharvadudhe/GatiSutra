import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Leaf, Zap, Car, TrendingUp, Sun, Wind, Battery, DollarSign, Award, Target, Lightbulb } from "lucide-react"
import EVAdoptionChart from "./EVAdoptionChart"
import EnergyUsageChart from "./EnergyUsageChart"

const evStats = {
  totalEVs: 3420,
  evPercentage: 7.8,
  chargingStations: 145,
  co2Saved: 2340,
  greenTaxCollected: 1250000,
  evGrowthRate: 23.5,
}

const evIncentives = [
  {
    category: "Purchase Incentives",
    benefits: [
      { name: "EV Purchase Subsidy", amount: "₹50,000", eligibility: "First 1000 buyers" },
      { name: "Registration Fee Waiver", amount: "100%", eligibility: "All EVs" },
      { name: "Road Tax Exemption", amount: "5 years", eligibility: "Personal EVs" },
    ],
  },
  {
    category: "Operational Benefits",
    benefits: [
      { name: "Free Parking", amount: "City Centers", eligibility: "All EVs" },
      { name: "Toll Discounts", amount: "50%", eligibility: "Highway Tolls" },
      { name: "Priority Lanes", amount: "Peak Hours", eligibility: "EVs & Hybrids" },
    ],
  },
  {
    category: "Infrastructure Support",
    benefits: [
      { name: "Home Charging Setup", amount: "₹25,000", eligibility: "Installation Support" },
      { name: "Fast Charging Access", amount: "Discounted Rates", eligibility: "Public Stations" },
      { name: "Battery Warranty", amount: "Extended", eligibility: "Government Backed" },
    ],
  },
]

const sustainableInfrastructure = [
  {
    type: "Solar-Powered Signals",
    count: 89,
    energySaved: "12,450 kWh/month",
    co2Reduction: "8.7 tons/month",
    status: "Active",
    efficiency: 94,
  },
  {
    type: "Wind-Powered Stations",
    count: 23,
    energySaved: "8,920 kWh/month",
    co2Reduction: "6.2 tons/month",
    status: "Active",
    efficiency: 87,
  },
  {
    type: "LED Street Lighting",
    count: 1240,
    energySaved: "45,600 kWh/month",
    co2Reduction: "31.9 tons/month",
    status: "Active",
    efficiency: 96,
  },
  {
    type: "Smart Grid Integration",
    count: 156,
    energySaved: "23,100 kWh/month",
    co2Reduction: "16.2 tons/month",
    status: "Expanding",
    efficiency: 91,
  },
]

const greenTaxData = [
  {
    vehicleType: "Diesel Cars (>10 years)",
    taxRate: "25%",
    collected: "₹4,50,000",
    vehicles: 1240,
    compliance: 89,
  },
  {
    vehicleType: "Petrol Cars (>15 years)",
    taxRate: "15%",
    collected: "₹2,80,000",
    vehicles: 890,
    compliance: 92,
  },
  {
    vehicleType: "Heavy Vehicles (>8 years)",
    taxRate: "40%",
    collected: "₹6,20,000",
    vehicles: 340,
    compliance: 78,
  },
  {
    vehicleType: "Commercial Vehicles",
    taxRate: "20%",
    collected: "₹3,90,000",
    vehicles: 1560,
    compliance: 85,
  },
]

const evChargingStations = [
  { zone: "City Center", stations: 45, utilization: 78, status: "Operational" },
  { zone: "Highway Corridors", stations: 32, utilization: 65, status: "Operational" },
  { zone: "Residential Areas", stations: 38, utilization: 52, status: "Operational" },
  { zone: "Industrial Zone", stations: 30, utilization: 43, status: "Expanding" },
]

export default function GreenInitiatives() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Green Initiatives Dashboard</h1>
          <p className="text-muted-foreground">Promoting sustainable transportation and clean energy</p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-chart-2 text-white border-chart-2">
            <Leaf className="w-3 h-3 mr-1" />
            Green Program Active
          </Badge>
          <Button>
            <Award className="w-4 h-4 mr-2" />
            View Achievements
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Electric Vehicles</CardTitle>
            <Car className="h-4 w-4 text-chart-2" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chart-2">{evStats.totalEVs.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline w-3 h-3 mr-1 text-chart-2" />+{evStats.evGrowthRate}% this quarter
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Charging Stations</CardTitle>
            <Zap className="h-4 w-4 text-chart-1" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chart-1">{evStats.chargingStations}</div>
            <p className="text-xs text-muted-foreground">
              <Target className="inline w-3 h-3 mr-1" />
              Target: 200 by year-end
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">CO₂ Saved</CardTitle>
            <Leaf className="h-4 w-4 text-chart-2" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chart-2">{evStats.co2Saved} tons</div>
            <p className="text-xs text-muted-foreground">This year through EVs</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Green Tax Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-chart-3" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chart-3">₹{(evStats.greenTaxCollected / 100000).toFixed(1)}L</div>
            <p className="text-xs text-muted-foreground">Collected this quarter</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="ev-promotion" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="ev-promotion">EV Promotion</TabsTrigger>
          <TabsTrigger value="green-tax">Green Tax & Benefits</TabsTrigger>
          <TabsTrigger value="sustainable-energy">Sustainable Energy</TabsTrigger>
        </TabsList>

        {/* EV Promotion Tab */}
        <TabsContent value="ev-promotion" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="w-5 h-5 text-chart-2" />
                  EV Adoption Progress
                </CardTitle>
                <CardDescription>Electric vehicle registration and growth trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-chart-2 mb-2">{evStats.evPercentage}%</div>
                    <p className="text-sm text-muted-foreground">of total vehicle registrations</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">EV Adoption Rate</span>
                      <span className="text-sm font-medium">{evStats.evPercentage}%</span>
                    </div>
                    <Progress value={evStats.evPercentage} className="h-3" />

                    <div className="flex items-center justify-between">
                      <span className="text-sm">Target Achievement</span>
                      <span className="text-sm font-medium">68%</span>
                    </div>
                    <Progress value={68} className="h-3" />
                  </div>

                  <EVAdoptionChart />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-chart-1" />
                  Charging Infrastructure
                </CardTitle>
                <CardDescription>EV charging station network status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {evChargingStations.map((station, index) => (
                    <div key={index} className="p-3 rounded-lg bg-muted/30">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-sm">{station.zone}</h4>
                        <Badge
                          variant="outline"
                          className={
                            station.status === "Operational"
                              ? "border-chart-2 text-chart-2"
                              : "border-chart-3 text-chart-3"
                          }
                        >
                          {station.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Stations</p>
                          <p className="font-medium">{station.stations}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Utilization</p>
                          <p className="font-medium">{station.utilization}%</p>
                        </div>
                      </div>
                      <Progress value={station.utilization} className="h-2 mt-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* EV Incentives */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-chart-2" />
                EV Incentives & Benefits Program
              </CardTitle>
              <CardDescription>Government incentives to promote electric vehicle adoption</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {evIncentives.map((category, index) => (
                  <div key={index} className="space-y-4">
                    <h4 className="font-semibold text-lg text-chart-1">{category.category}</h4>
                    <div className="space-y-3">
                      {category.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="p-3 rounded-lg bg-muted/30">
                          <div className="flex items-center justify-between mb-1">
                            <h5 className="font-medium text-sm">{benefit.name}</h5>
                            <Badge variant="outline" className="border-chart-2 text-chart-2">
                              {benefit.amount}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">{benefit.eligibility}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Green Tax & Benefits Tab */}
        <TabsContent value="green-tax" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-chart-3" />
                Green Tax Collection & Compliance
              </CardTitle>
              <CardDescription>Environmental tax on older vehicles to promote cleaner alternatives</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {greenTaxData.map((tax, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg bg-card/50">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-sm">{tax.vehicleType}</h4>
                        <p className="text-xs text-muted-foreground">{tax.vehicles} vehicles affected</p>
                      </div>
                      <Badge variant="outline" className="border-chart-3 text-chart-3">
                        {tax.taxRate} Tax Rate
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-3">
                      <div>
                        <p className="text-muted-foreground">Revenue Collected</p>
                        <p className="font-medium text-chart-2">{tax.collected}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Compliance Rate</p>
                        <p className="font-medium">{tax.compliance}%</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Vehicles Count</p>
                        <p className="font-medium">{tax.vehicles}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Compliance Progress</span>
                        <span className="text-xs font-medium">{tax.compliance}%</span>
                      </div>
                      <Progress value={tax.compliance} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-lg bg-chart-2/10">
                <div className="flex items-center gap-2 mb-2">
                  <Leaf className="w-4 h-4 text-chart-2" />
                  <span className="font-semibold text-sm">Green Tax Impact</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Green tax revenue is reinvested in EV infrastructure, public transportation, and air quality
                  improvement projects. This quarter's collection will fund 25 new charging stations.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Sustainable Energy Tab */}
        <TabsContent value="sustainable-energy" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sun className="w-5 h-5 text-chart-3" />
                  Sustainable Infrastructure
                </CardTitle>
                <CardDescription>Renewable energy powered traffic management systems</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sustainableInfrastructure.map((infra, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg bg-card/50">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-chart-2/10 rounded-lg">
                            {infra.type.includes("Solar") ? (
                              <Sun className="w-4 h-4 text-chart-3" />
                            ) : infra.type.includes("Wind") ? (
                              <Wind className="w-4 h-4 text-chart-1" />
                            ) : (
                              <Lightbulb className="w-4 h-4 text-chart-2" />
                            )}
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm">{infra.type}</h4>
                            <p className="text-xs text-muted-foreground">{infra.count} units installed</p>
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className={
                            infra.status === "Active" ? "border-chart-2 text-chart-2" : "border-chart-3 text-chart-3"
                          }
                        >
                          {infra.status}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                        <div>
                          <p className="text-muted-foreground">Energy Saved</p>
                          <p className="font-medium text-chart-2">{infra.energySaved}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">CO₂ Reduction</p>
                          <p className="font-medium text-chart-2">{infra.co2Reduction}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">Efficiency</span>
                          <span className="text-xs font-medium">{infra.efficiency}%</span>
                        </div>
                        <Progress value={infra.efficiency} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Battery className="w-5 h-5 text-chart-1" />
                  Energy Usage Trends
                </CardTitle>
                <CardDescription>Monthly renewable energy consumption patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <EnergyUsageChart />
              </CardContent>
            </Card>
          </div>

          {/* Environmental Impact Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-chart-2" />
                Environmental Impact Summary
              </CardTitle>
              <CardDescription>Overall environmental benefits from green initiatives</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center p-4 rounded-lg bg-chart-2/10">
                  <div className="text-2xl font-bold text-chart-2 mb-2">89,070</div>
                  <p className="text-sm font-medium">kWh Saved Monthly</p>
                  <p className="text-xs text-muted-foreground">Through renewable energy</p>
                </div>

                <div className="text-center p-4 rounded-lg bg-chart-2/10">
                  <div className="text-2xl font-bold text-chart-2 mb-2">63.0</div>
                  <p className="text-sm font-medium">Tons CO₂ Reduced</p>
                  <p className="text-xs text-muted-foreground">Monthly environmental impact</p>
                </div>

                <div className="text-center p-4 rounded-lg bg-chart-2/10">
                  <div className="text-2xl font-bold text-chart-2 mb-2">₹12.5L</div>
                  <p className="text-sm font-medium">Cost Savings</p>
                  <p className="text-xs text-muted-foreground">Annual energy cost reduction</p>
                </div>

                <div className="text-center p-4 rounded-lg bg-chart-2/10">
                  <div className="text-2xl font-bold text-chart-2 mb-2">92%</div>
                  <p className="text-sm font-medium">Green Coverage</p>
                  <p className="text-xs text-muted-foreground">Traffic signals on renewable energy</p>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-chart-1/10">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-chart-1" />
                  <span className="font-semibold text-sm">2024 Green Targets</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">EV Adoption Target: 15% by Dec 2024</p>
                    <Progress value={52} className="h-2 mt-1" />
                    <p className="text-xs text-muted-foreground mt-1">Current: 7.8% (52% of target)</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Renewable Energy: 100% traffic signals</p>
                    <Progress value={92} className="h-2 mt-1" />
                    <p className="text-xs text-muted-foreground mt-1">Current: 92% coverage</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
