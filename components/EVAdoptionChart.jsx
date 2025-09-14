import { Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts"

const mockEVData = [
  { month: "Jan", evs: 2100, target: 2500, growth: 12.5 },
  { month: "Feb", evs: 2280, target: 2600, growth: 8.6 },
  { month: "Mar", evs: 2520, target: 2700, growth: 10.5 },
  { month: "Apr", evs: 2780, target: 2800, growth: 10.3 },
  { month: "May", evs: 3050, target: 2900, growth: 9.7 },
  { month: "Jun", evs: 3420, target: 3000, growth: 12.1 },
]

export default function EVAdoptionChart() {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={mockEVData}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="month" className="text-xs" />
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
            dataKey="evs"
            stroke="hsl(var(--chart-2))"
            fill="hsl(var(--chart-2))"
            fillOpacity={0.3}
            strokeWidth={2}
            name="EV Registrations"
          />
          <Line
            type="monotone"
            dataKey="target"
            stroke="hsl(var(--chart-1))"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ fill: "hsl(var(--chart-1))", strokeWidth: 2, r: 3 }}
            name="Target"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
