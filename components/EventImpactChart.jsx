import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar, BarChart } from "recharts"

const mockEventData = [
  { event: "New Year", predicted: 80, actual: 92, attendees: 25000 },
  { event: "Republic Day", predicted: 45, actual: 38, attendees: 8000 },
  { event: "Holi Festival", predicted: 70, actual: 75, attendees: 15000 },
  { event: "Cricket Match", predicted: 75, actual: 82, attendees: 18000 },
  { event: "Independence Day", predicted: 65, actual: 58, attendees: 12000 },
  { event: "Diwali (Predicted)", predicted: 85, actual: 85, attendees: 15000 },
]

export default function EventImpactChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={mockEventData}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="event" className="text-xs" angle={-45} textAnchor="end" height={80} />
          <YAxis className="text-xs" />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
          />
          <Bar dataKey="predicted" fill="hsl(var(--chart-1))" name="Predicted Impact %" />
          <Bar dataKey="actual" fill="hsl(var(--chart-2))" name="Actual Impact %" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
