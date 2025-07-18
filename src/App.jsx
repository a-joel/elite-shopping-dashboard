import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/hero/Hero";
import BriefUser from "./components/breif-user/BriefUser";
import Review from "./components/reviews/Review";
import Footer from "./components/footer/Footer";
import DetailUser from "./components/detailuser/DetailUser";
import Company from "./components/comapany/Company";
export default function App() {


  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />{" "}
              <Hero />
              <Company />
              <Footer />
            </>
          }
        />
        <Route path="/customers" element={<><Navbar /><BriefUser /><Review /> <Footer /></>} />

        <Route path="/reviews" element={<><Navbar /> <Hero /> <Review /> <Footer /></>} />

        <Route path="/customers/:id" element={<><Navbar /> <DetailUser /> <Footer /></>} />
      </Routes>
    </div>
  );
}
