import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, RotateCcw, Zap } from "lucide-react"

const signals = [
  { id: "SIG001", location: "Main St & 1st Ave", status: "active", mode: "auto", timing: 45 },
  { id: "SIG002", location: "Highway 101 & Oak Rd", status: "active", mode: "manual", timing: 60 },
  { id: "SIG003", location: "Mall Rd & Center St", status: "maintenance", mode: "auto", timing: 30 },
  { id: "SIG004", location: "Industrial Ave & 5th St", status: "active", mode: "auto", timing: 40 },
]

export default function SignalControlPanel() {
  return (
    <div className="space-y-4">
      {/* AI Control Toggle */}
      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
        <div>
          <p className="font-medium text-sm">AI Auto-Control</p>
          <p className="text-xs text-muted-foreground">Let AI optimize signal timing</p>
        </div>
        <Switch defaultChecked />
      </div>

      {/* Emergency Override */}
      <div className="flex gap-2">
        <Button variant="destructive" size="sm" className="flex-1">
          <Zap className="w-4 h-4 mr-2" />
          Emergency Override
        </Button>
        <Button variant="outline" size="sm">
          <RotateCcw className="w-4 h-4" />
        </Button>
      </div>

      {/* Signal List */}
      <div className="space-y-3">
        <h4 className="font-medium text-sm">Active Signals</h4>
        {signals.map((signal) => (
          <div key={signal.id} className="p-3 rounded-lg border border-border bg-card/50">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="font-medium text-xs">{signal.id}</p>
                <p className="text-xs text-muted-foreground">{signal.location}</p>
              </div>
              <Badge
                variant="outline"
                className={
                  signal.status === "active"
                    ? "border-chart-2 text-chart-2"
                    : signal.status === "maintenance"
                      ? "border-chart-3 text-chart-3"
                      : "border-muted-foreground text-muted-foreground"
                }
              >
                {signal.status}
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <Play className="w-3 h-3" />
                </Button>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <Pause className="w-3 h-3" />
                </Button>
              </div>
              <div className="text-xs">
                <span className="text-muted-foreground">Timing: </span>
                <span className="font-medium">{signal.timing}s</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Global Timing Control */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Global Timing Adjustment</label>
        <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Faster</span>
          <span>Standard</span>
          <span>Slower</span>
        </div>
      </div>
    </div>
  )
}
