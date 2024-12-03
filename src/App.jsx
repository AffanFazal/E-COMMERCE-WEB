// import Banner from "./components/Banner";
// import Navbar from "./components/Navbar";
// import ProductCard from "./components/ProductCard";

// function App() {
//   return (
//     <>
//       <Banner />
//       <Navbar />

//       <ProductCard />
//       <ProductCard />
//       <ProductCard />


//     </>
//   );
// }

// export default App;



// // import Banner from "./components/banner";
// // import Navbar from "./components/Navbar";
// // import OfferDate from "./components/OfferDate";
// // import ProductCard from "./components/productCard";
// // import Propartycont from "./components/Propartycont";



// // function App() {
 
// //   return (
// //     <>
    
     
// //       <Banner/>
// //       <Navbar/>
// //       <Propartycont/>
// //       <OfferDate/>
// //       <div className="flex gap-7">
// //       <ProductCard />
// //       <ProductCard />
// //       <ProductCard />
// //       <ProductCard />
// //       </div>
      
// //     </>
// //   );
// // }

// // export default App;




import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
// import Slider from "./components/Slider";
import Products from "./Pages/Products";



function App() {

  const isLoggedIn = true;


  return ( 
    <>
<Banner/>
<Navbar/>     



<Routes>
  <Route path="/" element= { <Home />} />
  <Route path="/about" element= { <About /> } />
  <Route path="/contact" element= { <Contact Us /> } />
  <Route path="/products" element= { <Products /> } />
 
  {isLoggedIn ? (
    <>
    <Route path="/profile" element= { <div>this is my profile page</div> } />

    <Route path="/login" element= { <Navigate to="/" replace={true} /> } />
 
   
    </>
  ) : (
    <>
    <Route path="/login" element={ <Login /> } />
    <Route path="*" element= { <Navigate to="/login" replace={true} /> } />
    </>
  ) }

  
</Routes>

    </>
  )
}

export default App