
"use client";
import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserDoctor,
  faFileInvoiceDollar,
  faHospitalUser,
  faDatabase,
  faShieldAlt,
  faCalendarCheck,
  faPeopleGroup,
  faFileContract,
  faMoneyBill,
  faClipboard,
  faClipboardList,
  faChartSimple,
  faMagnifyingGlass,
  faUserGear,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useRouter } from "next/router";

// Type-safe item structure
type DashboardItem = {
  title: string;
  icon: IconDefinition;
  page: string;
};

const dashboardItems: DashboardItem[] = [
  { title: "Patient", icon: faHospitalUser, page: "patient" },
  { title: "Appointment", icon: faCalendarCheck, page: "appointment" },
  { title: "Doctor", icon: faUserDoctor, page: "doctor" },
  { title: "Billing", icon: faFileInvoiceDollar, page: "billing" },
  { title: "Insurance", icon: faShieldAlt, page: "insurance" },
  { title: "Master Data", icon: faDatabase, page: "master-data" },
  { title: "Human Resources", icon: faPeopleGroup, page: "human-resources" },
  { title: "Contract Documents", icon: faFileContract, page: "contracts" },
  { title: "Finance", icon: faMoneyBill, page: "finance" },
  { title: "Checklist", icon: faClipboard, page: "checklist" },
  { title: "Forms", icon: faClipboardList, page: "forms" },
  { title: "Analytics", icon: faChartSimple, page: "analytics" },
  { title: "Audit Report", icon: faMagnifyingGlass, page: "audit-report" },
  { title: "Roles and Management", icon: faUserGear, page: "role-management" },
  { title: "News Letters", icon: faNewspaper, page: "news-letters" },
];

const Dashboard: React.FC = () => {
  const router = useRouter();

  const handleCardClick = (page: string) => {
    router.push(`/${page}`);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <Sidebar activePage="dashboard" />
      <div className="flex-1">
        <Header />
        <main className="p-4">
          <h1 className="text-2xl font-bold mb-6 text-black">Dashboard</h1>
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {dashboardItems.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-2 flex flex-col items-center text-center hover:shadow-2xl transition text-black rounded-2xl cursor-pointer"
                onClick={() => handleCardClick(item.page)}
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3 text-teal-600 text-2xl">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <p className="text-sm font-serif">{item.title}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
