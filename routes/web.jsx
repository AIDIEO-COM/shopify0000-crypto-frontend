import MainLayout from "@/layout/MainLayout";
import ConnectWallet from "@/pages/CreateToken/ConnectWallet";
import CreateToken from "@/pages/CreateToken/CreateToken";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Home from "@/pages/Home/Home";
import PreviousTokens from "@/pages/PreviousTokens/PreviousTokens";
import Settings from "@/pages/Settings/Settings";
import Statistics from "@/pages/Statistics/Statistics";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const Web = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/create-token" element={<CreateToken />} />
          <Route path="/dashboard/create-token/connect-wallet" element={<ConnectWallet />} />
        
          <Route path="/dashboard/previous-tokens" element={<PreviousTokens />} />
          <Route path="/dashboard/statistics" element={<Statistics />} />
          <Route path="/dashboard/settings" element={<Settings />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Web;
