import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import FarmerDashboard from "./pages/dashboard/FarmerDashboard";
import InvestorDashboard from "./pages/dashboard/InvestorDashboard";
import ForFarmers from "./pages/ForFarmers";
import ForInvestors from "./pages/ForInvestors";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Security from "./pages/Security";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Press from "./pages/Press";
import Documentation from "./pages/Documentation";
import Help from "./pages/Help";
import API from "./pages/API";
import Partners from "./pages/Partners";
import Privacy from "./pages/legal/Privacy";
import Terms from "./pages/legal/Terms";
import Cookies from "./pages/legal/Cookies";
import Compliance from "./pages/legal/Compliance";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/dashboard/farmer" element={<FarmerDashboard />} />
            <Route path="/dashboard/investor" element={<InvestorDashboard />} />
            <Route path="/farmers" element={<ForFarmers />} />
            <Route path="/investors" element={<ForInvestors />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/security" element={<Security />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/press" element={<Press />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/help" element={<Help />} />
            <Route path="/api" element={<API />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
