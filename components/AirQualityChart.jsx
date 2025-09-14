import { Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart } from "recharts"

const mockAQIData = [
  { time: "00:00", aqi: 145, pm25: 58.2, pm10: 82.1 },
  { time: "02:00", aqi: 138, pm25: 54.7, pm10: 78.3 },
  { time: "04:00", aqi: 142, pm25: 56.9, pm10: 80.5 },
  { time: "06:00", aqi: 165, pm25: 68.4, pm10: 95.2 },
  { time: "08:00", aqi: 178, pm25: 75.1, pm10: 102.7 },
  { time: "10:00", aqi: 171, pm25: 71.8, pm10: 98.4 },
  { time: "12:00", aqi: 156, pm25: 65.2, pm10: 89.4 },
  { time: "14:00", aqi: 162, pm25: 67.9, pm10: 92.1 },
  { time: "16:00", aqi: 185, pm25: 78.6, pm10: 108.3 },
  { time: "18:00", aqi: 192, pm25: 82.4, pm10: 115.7 },
  { time: "20:00", aqi: 174, pm25: 73.2, pm10: 99.8 },
  { time: "22:00", aqi: 159, pm25: 66.5, pm10: 91.2 },
]

export default function AirQualityChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={mockAQIData}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="time" className="text-xs" />
          <YAxis className="text-xs" />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
          />
          <Line
            type="monotone"
            dataKey="aqi"
            stroke="hsl(var(--chart-4))"
            strokeWidth={3}
            dot={{ fill: "hsl(var(--chart-4))", strokeWidth: 2, r: 4 }}
            name="AQI"
          />
          <Line
            type="monotone"
            dataKey="pm25"
            stroke="hsl(var(--chart-1))"
            strokeWidth={2}
            dot={{ fill: "hsl(var(--chart-1))", strokeWidth: 2, r: 3 }}
            name="PM2.5"
          />
          <Line
            type="monotone"
            dataKey="pm10"
            stroke="hsl(var(--chart-2))"
            strokeWidth={2}
            dot={{ fill: "hsl(var(--chart-2))", strokeWidth: 2, r: 3 }}
            name="PM10"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
