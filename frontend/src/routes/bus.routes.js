import React from "react";
import { Route, Routes } from "react-router-dom";

import ViewBusList from "../components/Bus/ViewBuses";
import NewTimeTable from "../components/TimeTable/addTimeTable";

export default function BusRoutes() {
  return (
    <Routes>
      <Route path="/bus/info" element={<ViewBusList/>} />
      <Route path="/timetable/new" element={<NewTimeTable/>} />
      {/* <Route path="*" element={<h1>Not Found</h1>} /> */}
    </Routes>
  );
}