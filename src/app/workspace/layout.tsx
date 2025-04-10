import { PropsWithChildren } from "react";
import { SidebarInset, SidebarProvider } from "../_components/ui/sidebar";
import { AppSidebar } from "../_components/sidebar/app-sidebar";
import { DashboardHeader } from "../_components/sidebar/dashboard-header";
import { auth } from "@/services/auth";

export default async function Layout({ children }: PropsWithChildren) {
  const session = await auth();

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-muted/40 w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <div className="flex flex-col min-h-screen">
            <DashboardHeader user={session?.user} />
            {children}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
