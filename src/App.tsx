import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { PageTransition } from "./components/layout/PageTransition";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { Contact } from "./pages/Contact";
import { company } from "./data/content";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  description:
    "KEMMAX delivers end-to-end cleanroom solutions for industries where precision and purity are non-negotiable.",
  url: "https://kemmaxcpl.com",
  telephone: company.phone,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No.16, Kuppusamy Nagar, Thirumazhisai Poonamalle",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600124",
    addressCountry: "IN",
  },
  foundingDate: "2010",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: company.phone,
    contactType: "sales",
    availableLanguage: ["English", "Tamil"],
  },
  sameAs: ["#", "#", "#"],
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/products"
          element={
            <PageTransition>
              <Products />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
