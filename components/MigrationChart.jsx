import { Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart } from "recharts"

const mockMigrationData = [
  { day: "Mon", inbound: 1200, outbound: 980, net: 220 },
  { day: "Tue", inbound: 1450, outbound: 1120, net: 330 },
  { day: "Wed", inbound: 1680, outbound: 1340, net: 340 },
  { day: "Thu", inbound: 1890, outbound: 1560, net: 330 },
  { day: "Fri", inbound: 2340, outbound: 1890, net: 450 },
  { day: "Sat", inbound: 1560, outbound: 1780, net: -220 },
  { day: "Sun", inbound: 980, outbound: 1120, net: -140 },
]

export default function MigrationChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={mockMigrationData}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="day" className="text-xs" />
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
            dataKey="inbound"
            stroke="hsl(var(--chart-2))"
            strokeWidth={2}
            dot={{ fill: "hsl(var(--chart-2))", strokeWidth: 2, r: 4 }}
            name="Inbound"
          />
          <Line
            type="monotone"
            dataKey="outbound"
            stroke="hsl(var(--chart-4))"
            strokeWidth={2}
            dot={{ fill: "hsl(var(--chart-4))", strokeWidth: 2, r: 4 }}
            name="Outbound"
          />
          <Line
            type="monotone"
            dataKey="net"
            stroke="hsl(var(--chart-1))"
            strokeWidth={3}
            dot={{ fill: "hsl(var(--chart-1))", strokeWidth: 2, r: 5 }}
            name="Net Movement"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
