import { auth } from "@/services/auth";

import { AlertCircle, CheckCircle2, Clock, Filter, MoreHorizontal, Plus, RefreshCw, Users } from "lucide-react"
import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage } from "@/app/_components/ui/avatar"
import { Button } from "@/app/_components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/_components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/_components/ui/dropdown-menu"
import { Progress } from "@/app/_components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/_components/ui/tabs"


export default async function Page() {
  const session = await auth() 

  return (
    <main className="flex-1 p-4 md:p-6">
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back to your helpdesk overview.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8">
              <RefreshCw className="mr-2 h-3.5 w-3.5" />
              Refresh
            </Button>
            <Button size="sm" className="h-8 bg-[#5b21b6] hover:bg-[#4a1d96]">
              <Plus className="mr-2 h-3.5 w-3.5" />
              New Ticket
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Tickets</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M12 2v20M2 12h20" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">245</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Open Tickets</CardTitle>
              <AlertCircle className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-muted-foreground">-4% from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Resolved Today</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">+7% from yesterday</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Avg. Response Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.4h</div>
              <p className="text-xs text-muted-foreground">-12min from last week</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-7">
          <Card className="md:col-span-4">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Recent Tickets</CardTitle>
                <CardDescription>You have 42 open tickets to handle.</CardDescription>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8">
                  <Filter className="mr-2 h-3.5 w-3.5" />
                  Filter
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">More</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Export as CSV</DropdownMenuItem>
                    <DropdownMenuItem>Print list</DropdownMenuItem>
                    <DropdownMenuItem>View all tickets</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: "TKT-7890",
                    title: "Cannot access admin dashboard",
                    customer: "Sarah Johnson",
                    status: "High",
                    statusColor: "bg-red-500",
                    time: "10m ago",
                    avatar: "SJ",
                  },
                  {
                    id: "TKT-7889",
                    title: "Payment gateway integration issue",
                    customer: "Michael Chen",
                    status: "Medium",
                    statusColor: "bg-amber-500",
                    time: "45m ago",
                    avatar: "MC",
                  },
                  {
                    id: "TKT-7888",
                    title: "How to reset user password?",
                    customer: "Emily Rodriguez",
                    status: "Low",
                    statusColor: "bg-green-500",
                    time: "1h ago",
                    avatar: "ER",
                  },
                  {
                    id: "TKT-7887",
                    title: "Mobile app crashes on startup",
                    customer: "David Kim",
                    status: "Medium",
                    statusColor: "bg-amber-500",
                    time: "2h ago",
                    avatar: "DK",
                  },
                ].map((ticket) => (
                  <div key={ticket.id} className="flex items-center justify-between rounded-lg border p-3">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src="/placeholder.svg?height=36&width=36" alt={ticket.customer} />
                        <AvatarFallback>{ticket.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{ticket.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {ticket.id} • {ticket.customer}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`h-2 w-2 rounded-full ${ticket.statusColor}`} />
                      <span className="text-sm text-muted-foreground">{ticket.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Tickets
              </Button>
            </CardFooter>
          </Card>
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Team Performance</CardTitle>
              <CardDescription>Agent activity and resolution rates.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="resolution">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="resolution">Resolution</TabsTrigger>
                  <TabsTrigger value="response">Response</TabsTrigger>
                </TabsList>
                <TabsContent value="resolution" className="space-y-4 pt-4">
                  {[
                    { name: "Alex Rivera", avatar: "AR", value: 92 },
                    { name: "Taylor Swift", avatar: "TS", value: 86 },
                    { name: "Morgan Freeman", avatar: "MF", value: 78 },
                    { name: "John Doe", avatar: "JD", value: 65 },
                  ].map((agent) => (
                    <div key={agent.name} className="flex items-center gap-4">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src="/placeholder.svg?height=36&width=36" alt={agent.name} />
                        <AvatarFallback>{agent.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">{agent.name}</div>
                          <div className="text-sm text-muted-foreground">{agent.value}%</div>
                        </div>
                        <Progress value={agent.value} className="h-2" />
                      </div>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="response" className="space-y-4 pt-4">
                  {[
                    { name: "Taylor Swift", avatar: "TS", value: 95 },
                    { name: "Alex Rivera", avatar: "AR", value: 89 },
                    { name: "John Doe", avatar: "JD", value: 82 },
                    { name: "Morgan Freeman", avatar: "MF", value: 74 },
                  ].map((agent) => (
                    <div key={agent.name} className="flex items-center gap-4">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src="/placeholder.svg?height=36&width=36" alt={agent.name} />
                        <AvatarFallback>{agent.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">{agent.name}</div>
                          <div className="text-sm text-muted-foreground">{agent.value}%</div>
                        </div>
                        <Progress value={agent.value} className="h-2" />
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                <Users className="mr-2 h-4 w-4" />
                View Team
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>

  )
}
