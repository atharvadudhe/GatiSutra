"use client"

import { useState } from "react"

const Security = () => {
  const [activeTab, setActiveTab] = useState("access")

  const userAccess = [
    {
      id: 1,
      name: "Admin User",
      role: "System Administrator",
      status: "Active",
      lastLogin: "2024-01-15 09:30",
      permissions: "Full Access",
    },
    {
      id: 2,
      name: "Traffic Controller",
      role: "Traffic Operator",
      status: "Active",
      lastLogin: "2024-01-15 08:45",
      permissions: "Traffic Control",
    },
    {
      id: 3,
      name: "Police Officer",
      role: "Emergency Response",
      status: "Active",
      lastLogin: "2024-01-15 10:15",
      permissions: "Emergency Override",
    },
    {
      id: 4,
      name: "Data Analyst",
      role: "Analytics Viewer",
      status: "Inactive",
      lastLogin: "2024-01-14 16:20",
      permissions: "Read Only",
    },
  ]

  const securityLogs = [
    { time: "10:45 AM", event: "Successful login", user: "admin@traffic.gov", ip: "192.168.1.100", severity: "Info" },
    {
      time: "10:30 AM",
      event: "Failed login attempt",
      user: "unknown@email.com",
      ip: "203.45.67.89",
      severity: "Warning",
    },
    {
      time: "09:15 AM",
      event: "Emergency override activated",
      user: "police@traffic.gov",
      ip: "192.168.1.105",
      severity: "Critical",
    },
    { time: "08:45 AM", event: "System backup completed", user: "system", ip: "localhost", severity: "Info" },
    {
      time: "08:30 AM",
      event: "Unauthorized API access blocked",
      user: "bot@malicious.com",
      ip: "45.67.89.123",
      severity: "High",
    },
  ]

  const systemHealth = [
    { component: "Authentication Service", status: "Healthy", uptime: "99.9%", lastCheck: "2 min ago" },
    { component: "Database Security", status: "Healthy", uptime: "99.8%", lastCheck: "1 min ago" },
    { component: "API Gateway", status: "Warning", uptime: "98.5%", lastCheck: "30 sec ago" },
    { component: "Firewall", status: "Healthy", uptime: "100%", lastCheck: "1 min ago" },
    { component: "Intrusion Detection", status: "Healthy", uptime: "99.7%", lastCheck: "45 sec ago" },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
      case "Healthy":
        return "text-green-600 bg-green-100"
      case "Inactive":
      case "Warning":
        return "text-yellow-600 bg-yellow-100"
      case "Blocked":
      case "Critical":
        return "text-red-600 bg-red-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "Info":
        return "text-blue-600 bg-blue-100"
      case "Warning":
        return "text-yellow-600 bg-yellow-100"
      case "High":
        return "text-orange-600 bg-orange-100"
      case "Critical":
        return "text-red-600 bg-red-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Security Center</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            Emergency Lockdown
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Generate Report
          </button>
        </div>
      </div>

      {/* Security Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Sessions</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Blocked Attempts</p>
              <p className="text-2xl font-bold text-gray-900">47</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Security Score</p>
              <p className="text-2xl font-bold text-gray-900">94%</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">System Uptime</p>
              <p className="text-2xl font-bold text-gray-900">99.9%</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Security Tabs */}
      <div className="bg-white rounded-xl shadow-lg">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: "access", label: "User Access" },
              { id: "logs", label: "Security Logs" },
              { id: "health", label: "System Health" },
              { id: "policies", label: "Security Policies" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? "border-purple-500 text-purple-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === "access" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">User Access Management</h3>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  Add New User
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Login
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Permissions
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {userAccess.map((user) => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{user.role}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(user.status)}`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.lastLogin}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.permissions}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-purple-600 hover:text-purple-900 mr-3">Edit</button>
                          <button className="text-red-600 hover:text-red-900">Revoke</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "logs" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Security Event Logs</h3>
                <div className="flex space-x-2">
                  <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                    <option>All Events</option>
                    <option>Login Events</option>
                    <option>Security Alerts</option>
                    <option>System Events</option>
                  </select>
                  <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                    Export Logs
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                {securityLogs.map((log, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-500">{log.time}</span>
                        <span className="text-sm font-medium text-gray-900">{log.event}</span>
                        <span className="text-sm text-gray-600">{log.user}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-xs text-gray-500">{log.ip}</span>
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getSeverityColor(log.severity)}`}
                        >
                          {log.severity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "health" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">System Health Monitor</h3>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Run Health Check
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {systemHealth.map((component, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-medium text-gray-900">{component.component}</h4>
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(component.status)}`}
                      >
                        {component.status}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Uptime:</span>
                        <span className="text-sm font-medium text-gray-900">{component.uptime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Last Check:</span>
                        <span className="text-sm font-medium text-gray-900">{component.lastCheck}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "policies" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Security Policies</h3>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  Update Policies
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Password Policy</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Minimum Length</span>
                      <span className="text-sm font-medium text-gray-900">12 characters</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Complexity Required</span>
                      <span className="text-sm font-medium text-green-600">Enabled</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Expiry Period</span>
                      <span className="text-sm font-medium text-gray-900">90 days</span>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Access Control</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Two-Factor Auth</span>
                      <span className="text-sm font-medium text-green-600">Required</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Session Timeout</span>
                      <span className="text-sm font-medium text-gray-900">30 minutes</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">IP Restrictions</span>
                      <span className="text-sm font-medium text-green-600">Enabled</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Security
