
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Technology from "./pages/Technology";
import WhereSynapsesMeetSystems from "./pages/WhereSynapsesMeetSystems";
import NeuralServiceArchitecture from "./pages/NeuralServiceArchitecture";
import SolutionArchitecture from "./pages/SolutionArchitecture";
import Advantage from "./pages/Advantage";
import WhyChooseUs from "./pages/WhyChooseUs";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Login from "./pages/Login";
import CMS from "./pages/CMS";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/where-synapses-meet-systems" element={<WhereSynapsesMeetSystems />} />
          <Route path="/neural-service-architecture" element={<NeuralServiceArchitecture />} />
          <Route path="/solution-architecture" element={<SolutionArchitecture />} />
          <Route path="/advantage" element={<Advantage />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cms" element={<CMS />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
