import { PropsWithChildren } from "react";
import { SidebarInset, SidebarProvider } from "../_components/ui/sidebar";
import { AppSidebar } from "../_components/sidebar/app-sidebar";
import { DashboardHeader } from "../_components/sidebar/dashboard-header";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-muted/40 w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <div className="flex flex-col min-h-screen">
            <DashboardHeader />
            {children}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
