import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart } from "recharts"

const mockEmissionsData = [
  { day: "Mon", heavy: 48.2, light: 34.1, twoWheeler: 19.8, public: 31.5 },
  { day: "Tue", heavy: 45.7, light: 32.8, twoWheeler: 18.9, public: 29.2 },
  { day: "Wed", heavy: 47.1, light: 33.5, twoWheeler: 19.2, public: 30.1 },
  { day: "Thu", heavy: 49.3, light: 35.2, twoWheeler: 20.1, public: 32.8 },
  { day: "Fri", heavy: 51.8, light: 36.7, twoWheeler: 21.4, public: 34.2 },
  { day: "Sat", heavy: 44.2, light: 31.9, twoWheeler: 18.5, public: 28.7 },
  { day: "Sun", heavy: 42.1, light: 30.4, twoWheeler: 17.8, public: 27.3 },
]

export default function EmissionsChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={mockEmissionsData}>
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
          <Bar dataKey="heavy" fill="hsl(var(--chart-4))" name="Heavy Vehicles" />
          <Bar dataKey="light" fill="hsl(var(--chart-3))" name="Light Vehicles" />
          <Bar dataKey="twoWheeler" fill="hsl(var(--chart-2))" name="Two Wheelers" />
          <Bar dataKey="public" fill="hsl(var(--chart-1))" name="Public Transport" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
