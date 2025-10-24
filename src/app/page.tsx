"use client";

import { StatsCard } from "@/components/dashboard/StatsCard";
import { MonthlySalesChart } from "@/components/dashboard/MonthlySalesChart";
import { StatisticsChart } from "@/components/dashboard/StatisticsChart";
import { TargetCard } from "@/components/dashboard/TargetCard";
import { CustomersDemographic } from "@/components/dashboard/CustomersDemographic";
import { RecentOrders } from "@/components/dashboard/RecentOrders";
import { Users, Package } from "lucide-react";

export default function DashboardPage() {
  // Dummy data for the bar chart
  const salesData = [
    { month: "Jan", value: 150 },
    { month: "Feb", value: 350 },
    { month: "Mar", value: 200 },
    { month: "Apr", value: 300 },
    { month: "May", value: 180 },
    { month: "Jun", value: 220 },
    { month: "Jul", value: 250 },
    { month: "Aug", value: 190 },
    { month: "Sep", value: 280 },
    { month: "Oct", value: 340 },
    { month: "Nov", value: 300 },
    { month: "Dec", value: 210 },
  ];
  // Dummy data for statistics chart (targets vs actuals)
  const statsData = [
    { month: "Jan", target: 200, actual: 80 },
    { month: "Feb", target: 220, actual: 90 },
    { month: "Mar", target: 230, actual: 120 },
    { month: "Apr", target: 210, actual: 110 },
    { month: "May", target: 250, actual: 140 },
    { month: "Jun", target: 260, actual: 160 },
    { month: "Jul", target: 280, actual: 170 },
    { month: "Aug", target: 300, actual: 200 },
    { month: "Sep", target: 320, actual: 210 },
    { month: "Oct", target: 330, actual: 240 },
    { month: "Nov", target: 340, actual: 220 },
    { month: "Dec", target: 350, actual: 230 },
  ];
  // Recent orders data: optional, can pass empty array to use defaults
  const orders = [];

  return (
    <div className="space-y-4">
      {/* Top stats and target */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatsCard
          title="Customers"
          value={"3,782"}
          change={11.01}
          isIncrease={true}
          icon={<Users className="h-5 w-5" />}
        />
        <StatsCard
          title="Orders"
          value={"5,359"}
          change={-9.05}
          isIncrease={false}
          icon={<Package className="h-5 w-5" />}
        />
        <TargetCard
          percentage={75.55}
          growth={10}
          target="$20K"
          revenue="$20K"
          today="$20K"
        />
      </div>
      {/* Sales & Statistics */}
      <div className="grid gap-4 lg:grid-cols-3">
        <MonthlySalesChart data={salesData} className="col-span-full lg:col-span-2" />
        <StatisticsChart data={statsData} className="col-span-full lg:col-span-1" />
      </div>
      {/* Demographics & Recent Orders */}
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="col-span-full lg:col-span-2">
          <CustomersDemographic />
        </div>
        <div className="col-span-full lg:col-span-1">
          <RecentOrders orders={orders} />
        </div>
      </div>
    </div>
  );
}