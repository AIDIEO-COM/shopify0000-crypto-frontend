import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/Home/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const Web = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Web;
