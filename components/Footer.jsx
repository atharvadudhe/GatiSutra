export default function Footer() {
  return (
    <footer className="bg-card border-t border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <p className="text-sm text-muted-foreground">© 2024 Smart Traffic Management System - SIH Prototype</p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>Version 1.0.0</span>
            <span>•</span>
            <span>Last Updated: {new Date().toLocaleDateString()}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span>Connected to Traffic Control Center</span>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-chart-2 rounded-full animate-pulse"></div>
            <span>Live</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
