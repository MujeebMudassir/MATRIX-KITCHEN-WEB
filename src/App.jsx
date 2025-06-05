import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Product from "./pages/Product"; // Import Product component
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/login/LoginPage";
import Profile from "./pages/login/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/MATRIX-KITCHEN-WEB/" element={<Index />} />
          <Route
            path="/MATRIX-KITCHEN-WEB/product/:id"
            element={<Product />}
          />{" "}
          {/* Add Product route */}
          <Route path="/MATRIX-KITCHEN-WEB/login" element={<LoginPage />} />
          <Route path="/MATRIX-KITCHEN-WEB/profile" element={<Profile />} />
          <Route path="/MATRIX-KITCHEN-WEB/cart" element={<Profile />} />
          <Route path="/MATRIX-KITCHEN-WEB/orders" element={<Profile />} />
          <Route path="/MATRIX-KITCHEN-WEB/wishlist" element={<Profile />} />
          <Route path="/MATRIX-KITCHEN-WEB/addresses" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
