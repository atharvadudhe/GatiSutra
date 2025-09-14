import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart } from "recharts"

const mockEnergyData = [
  { month: "Jan", solar: 8200, wind: 6100, traditional: 12400, savings: 14300 },
  { month: "Feb", solar: 9100, wind: 6800, traditional: 11200, savings: 15900 },
  { month: "Mar", solar: 10500, wind: 7200, traditional: 10800, savings: 17700 },
  { month: "Apr", solar: 11200, wind: 7900, traditional: 9600, savings: 19100 },
  { month: "May", solar: 12100, wind: 8400, traditional: 8900, savings: 20500 },
  { month: "Jun", solar: 12450, wind: 8920, traditional: 8200, savings: 21370 },
]

export default function EnergyUsageChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={mockEnergyData}>
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
          <Bar dataKey="solar" fill="hsl(var(--chart-3))" name="Solar Energy" />
          <Bar dataKey="wind" fill="hsl(var(--chart-1))" name="Wind Energy" />
          <Bar dataKey="traditional" fill="hsl(var(--chart-4))" name="Traditional Energy" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
