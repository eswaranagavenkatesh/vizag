// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import DoctorClinic from "./pages/DoctorClinic";
import MedicalLab from "./pages/services/MedicalLab";
import HomeHealthCare from "./pages/services/HomeHealthCare";
import Pharmacy from "./pages/Pharmacy";
import Packages from "./pages/Packages";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookAppointment from "./pages/BookAppointment";
import BookTest from "./pages/BookTest";
import BookPackage from "./pages/BookPackage"; // Add this import
import Gallery from "./pages/Gallery";
import Feedback from "./pages/Feedback";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/doctor-clinic" element={<DoctorClinic />} />
          <Route path="/services/medical-lab" element={<MedicalLab />} />
          <Route path="/services/home-health-care" element={<HomeHealthCare />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/health-packages" element={<Packages />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/book-package" element={<BookPackage />} /> {/* Add this route */}
          <Route path="/book-test" element={<BookTest />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;