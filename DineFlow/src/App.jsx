import { useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRouter from "./Routes/index.routes";
import { CartProvider } from "./context/CartContext";
import { ToastProvider } from "./components/ToastContainer";
import { AuthProvider, useAuth } from "./context/Auth.context";  // ADD THIS
import './App.css';

function AppContent() {
  const { isAdmin } = useAuth();  // Get admin value from Auth Context
  const location = useLocation();

  const hideNavAndFooter =
    location.pathname === '/signup' || location.pathname === '/login';

  return (
    <div className="app">
      {!hideNavAndFooter && <Navbar isAdmin={isAdmin} />}
      <AppRouter isAdmin={isAdmin} />
      {!hideNavAndFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ToastProvider>
          <AppContent />
        </ToastProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;