import { Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts"

const mockData = [
  { time: "00:00", vehicles: 1200, density: 30, speed: 55 },
  { time: "02:00", vehicles: 800, density: 20, speed: 60 },
  { time: "04:00", vehicles: 600, density: 15, speed: 65 },
  { time: "06:00", vehicles: 2400, density: 60, speed: 35 },
  { time: "08:00", vehicles: 4200, density: 85, speed: 25 },
  { time: "10:00", vehicles: 3800, density: 75, speed: 30 },
  { time: "12:00", vehicles: 3200, density: 65, speed: 40 },
  { time: "14:00", vehicles: 3600, density: 70, speed: 35 },
  { time: "16:00", vehicles: 4800, density: 95, speed: 20 },
  { time: "18:00", vehicles: 5200, density: 100, speed: 15 },
  { time: "20:00", vehicles: 3400, density: 68, speed: 38 },
  { time: "22:00", vehicles: 2200, density: 45, speed: 50 },
]

export default function TrafficFlowChart() {
  return (
    <div className="space-y-4">
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={mockData}>
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
            <Area
              type="monotone"
              dataKey="vehicles"
              stroke="hsl(var(--chart-1))"
              fill="hsl(var(--chart-1))"
              fillOpacity={0.3}
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="density"
              stroke="hsl(var(--chart-4))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--chart-4))", strokeWidth: 2, r: 4 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="p-3 rounded-lg bg-muted/30">
          <p className="text-sm font-medium">Peak Traffic</p>
          <p className="text-lg font-bold text-chart-4">18:00</p>
        </div>
        <div className="p-3 rounded-lg bg-muted/30">
          <p className="text-sm font-medium">Low Traffic</p>
          <p className="text-lg font-bold text-chart-2">04:00</p>
        </div>
        <div className="p-3 rounded-lg bg-muted/30">
          <p className="text-sm font-medium">Avg Density</p>
          <p className="text-lg font-bold text-chart-1">58%</p>
        </div>
      </div>
    </div>
  )
}
