import React from "react";
import { Route, Routes } from "react-router-dom";
import AddNewBus from "../components/Bus/addNewBus";
import ViewBusList from "../components/Bus/ViewBuses";
import FinanceReportDaily from "../components/ReportManagement/financeReportDaily";
import FinanceReportMonthly from "../components/ReportManagement/financeReportMonthly";
import NewTimeTable from "../components/TimeTable/addTimeTable";
import AddBusroutes from "../components/BusRoute/addBusroutes";
import BusInformation from "../components/ReportManagement/busInformation";
import RouteInformation from "../components/ReportManagement/routeInformation";

export default function BusRoutes() {
  return (
    <Routes>
      <Route path="/view/info" element={<ViewBusList/>} />
      <Route path="/timetable/new" element={<NewTimeTable/>} />
      <Route path="/add/new" element={<AddNewBus/>} />
      <Route path="/add/new/route" element={<AddBusroutes/>} />

      <Route path="/report/finance-daily" element={<FinanceReportDaily/> } />
      <Route path="/report/finance-monthly" element={<FinanceReportMonthly/> } />
      <Route path="/report/bus/info" element={<BusInformation/>} />
      <Route path="/report/routes/info" element={<RouteInformation/>} />
    </Routes>
  );
}