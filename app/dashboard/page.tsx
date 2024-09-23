import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EmployeesStat from "./components/employees/employees-stats"
import TeamsStat from "./components/teams/teams-stats"

function DashboardPage() {
  return (
  <Tabs defaultValue="employees">
  <TabsList className="mb-4">
    <TabsTrigger value="employees">Employees</TabsTrigger>
    <TabsTrigger value="teams">Teams</TabsTrigger>
  </TabsList>
  <TabsContent value="employees"><EmployeesStat /></TabsContent>
  <TabsContent value="teams"><TeamsStat /></TabsContent>
</Tabs>
  )
}

export default DashboardPage