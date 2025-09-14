"use client"

import { useState } from "react"

const TrafficMap = () => {
  const [selectedZone, setSelectedZone] = useState("zone1")
  const [mapView, setMapView] = useState("traffic")

  const trafficData = [
    { zone: "Central Business District", status: "Heavy", vehicles: 1250, avgSpeed: "15 km/h", incidents: 3 },
    { zone: "Residential Area North", status: "Moderate", vehicles: 680, avgSpeed: "35 km/h", incidents: 1 },
    { zone: "Industrial Zone", status: "Light", vehicles: 320, avgSpeed: "45 km/h", incidents: 0 },
    { zone: "Highway Junction", status: "Heavy", vehicles: 2100, avgSpeed: "25 km/h", incidents: 2 },
    { zone: "Airport Road", status: "Moderate", vehicles: 890, avgSpeed: "40 km/h", incidents: 1 },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Heavy":
        return "bg-red-500"
      case "Moderate":
        return "bg-yellow-500"
      case "Light":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Traffic Map</h1>
        <div className="flex space-x-4">
          <select
            value={mapView}
            onChange={(e) => setMapView(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          >
            <option value="traffic">Traffic Flow</option>
            <option value="incidents">Incidents</option>
            <option value="pollution">Pollution Levels</option>
            <option value="cameras">Camera Network</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Interactive Map Area */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Live Traffic Map</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm">Real-time</button>
                <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm">Historical</button>
              </div>
            </div>

            {/* Map Placeholder with Traffic Zones */}
            <div className="bg-gray-100 rounded-lg h-96 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50">
                {/* Traffic Zone Indicators */}
                <div className="absolute top-16 left-20 w-16 h-16 bg-red-500 rounded-full opacity-70 animate-pulse"></div>
                <div className="absolute top-32 right-24 w-12 h-12 bg-yellow-500 rounded-full opacity-70"></div>
                <div className="absolute bottom-20 left-32 w-10 h-10 bg-green-500 rounded-full opacity-70"></div>
                <div className="absolute top-20 right-16 w-14 h-14 bg-red-500 rounded-full opacity-70 animate-pulse"></div>
                <div className="absolute bottom-32 right-20 w-12 h-12 bg-yellow-500 rounded-full opacity-70"></div>

                {/* Road Network Lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#374151" strokeWidth="3" opacity="0.3" />
                  <line x1="30%" y1="0" x2="30%" y2="100%" stroke="#374151" strokeWidth="3" opacity="0.3" />
                  <line x1="70%" y1="0" x2="70%" y2="100%" stroke="#374151" strokeWidth="3" opacity="0.3" />
                  <line x1="0" y1="25%" x2="100%" y2="25%" stroke="#374151" strokeWidth="2" opacity="0.3" />
                  <line x1="0" y1="75%" x2="100%" y2="75%" stroke="#374151" strokeWidth="2" opacity="0.3" />
                </svg>

                <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                  <div className="text-sm font-medium mb-2">Legend</div>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span>Heavy Traffic</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span>Moderate Traffic</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>Light Traffic</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Traffic Zone Details */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Traffic Zones</h3>
            <div className="space-y-3">
              {trafficData.map((zone, index) => (
                <div
                  key={index}
                  className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedZone(`zone${index + 1}`)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">{zone.zone}</span>
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(zone.status)}`}></div>
                  </div>
                  <div className="text-xs text-gray-600 space-y-1">
                    <div>Vehicles: {zone.vehicles}</div>
                    <div>Avg Speed: {zone.avgSpeed}</div>
                    <div>Incidents: {zone.incidents}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Deploy Traffic Police
              </button>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Adjust Signal Timing
              </button>
              <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Route Suggestions
              </button>
              <button className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                Emergency Override
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Traffic Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Cameras</p>
              <p className="text-2xl font-bold text-gray-900">247</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Traffic Signals</p>
              <p className="text-2xl font-bold text-gray-900">89</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Response Time</p>
              <p className="text-2xl font-bold text-gray-900">4.2m</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">System Uptime</p>
              <p className="text-2xl font-bold text-gray-900">99.8%</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrafficMap
