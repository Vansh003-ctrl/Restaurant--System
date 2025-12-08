import { Routes, Route } from "react-router-dom";

// Pages
import Policy from "../pages/PrivacyPage/Privacy.jsx"
import Home from "../pages/homePage/Home.jsx";
import Menu from "../pages/menuPage/Menu.jsx";
import OrderTracking from "../pages/orderConfirmationPage/OrderTracking.jsx";
import Contact from "../pages/contactAndFeedback/ContactPage.jsx";
import Cart from "../pages/cartPage/Cart.jsx";
import Orders from "../pages/orders/Orders.jsx";
import SignUpPage from "../pages/SignUpPage/SignUp.jsx";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import Catering from "../pages/Footer pages/Catering/CateringPage.jsx";
import AboutUs from '../pages/Footer pages/AboutUs/AboutUs.jsx'
import Profile from '../pages/profilePage/Profile.jsx'
import Reservation from "../pages/reservationPage/Reservation.jsx"
import WhyChooseUs from "../pages/Footer pages/whyChooseUs/WhyChooseUs.jsx"
import OurStory from "../pages/Footer pages/ourStory/OurStory.jsx"
import FAQ from "../pages/Footer pages/FAQ/FAQPage.jsx"
import Ordering from "../pages/Footer pages/Online Ordering/OnlineOrdering.jsx"



// Admin Pages
import Kitchen from "../pages/kitchenDashBoardPage/Kitchen";
import Admin from "../pages/adminDashBoard/admin";

export default function Index({ isAdmin }) {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/order-tracking/:orderId" element={<OrderTracking />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order" element={< Orders/>} />
       <Route path="/signup" element={<SignUpPage />} />
      <Route path= "/login" element={<LoginPage />} /> 
      <Route path= "/catering" element={<Catering />} /> 
      <Route path="/privacy" element={<Policy />} />
      <Route path= "/about" element={<AboutUs />} /> 
      <Route path= "/profile" element={<Profile />} /> 
      <Route path= "/reservation" element={<Reservation />} /> 
      <Route path= "/whychooseus" element={<WhyChooseUs />} /> 
      <Route path= "/our-story" element={<OurStory />} /> 
      <Route path= "/faq" element={<FAQ />} /> 
      <Route path= "/ordering" element={<Ordering />} /> 


      {/* Admin Only Routes */}
      {isAdmin && (
        <>
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/admin" element={<Admin />} />
        </>
      )}

      {/* Fallback Route (404) */}
      <Route path="*" element={<h1 style={{ padding: "6rem" }}>Page Not Found</h1>} />
    </Routes>
  );
}