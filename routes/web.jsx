import MainLayout from "@/layout/MainLayout";
import CreateToken from "@/pages/CreateToken/CreateToken";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Home from "@/pages/Home/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const Web = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/create-token" element={<CreateToken />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Web;
