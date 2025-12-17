
import { Route, Routes } from "react-router";
import "./App.css";
import MainNavbar from "./components/partials/Navbar/MainNavbar";
import HomePage from "./components/HomePage/HomePage"
import Books from "./components/Books/Books"
import Notes from "./components/Notes/Notes"
import Subscriptions from "./components/Subscriptions/Subscriptions"
import StudyKits from "./components/StudyKits/StudyKits.jsx"
import Donate from "./components/Donate/Donate"
import ExploreMore from "./components/ExploreMore/ExploreMore"
import Sell from "./components/SellYourStudyMaterial/Sell"
import Cart from "./components/Cart/Cart"
import LoginRegister from "./components/Login/LoginRegister.jsx";
import { Navigate } from "react-router";
import Footer from "./components/partials/Footer";
import SellBookForm from "./components/SellYourStudyMaterial/SellBookForm.jsx";
import SellNotesForm from "./components/SellYourStudyMaterial/SellNotesForm.jsx";
import SellSubscriptionsForm from "./components/SellYourStudyMaterial/SellSubscriptionsForm.jsx";
import SellStudyKitsForm from "./components/SellYourStudyMaterial/SellStudyKitsForm.jsx";

import EachItemDetails from "./components/itemContainer/EachItemDetails.jsx"
const App = () => {
  return (
    <div className="main">
      <MainNavbar/>
       <Routes>
         
         <Route path="/home" element={<HomePage/>}/>
         <Route path="/" element={<Navigate to="/home" replace />} />
         <Route path="/books" element={<Books/>}/>
         <Route path="/notes" element={<Notes/>}/>
         <Route path="/Subscriptions" element={<Subscriptions/>}/>
         <Route path="/study-kits" element={<StudyKits/>}/>
         <Route path="/donate" element={<Donate/>}/>
         <Route path="/explore-more" element={<ExploreMore/>}/>
         <Route path="/sell-your-study-material" element={<Sell/>}>
         <Route index element={<Navigate to="sell-books" replace/>}/>
          <Route path="sell-books" element={<SellBookForm/>}/>
         <Route path="sell-notes" element={<SellNotesForm/>}/>
         <Route path="sell-subscriptions" element={<SellSubscriptionsForm/>}/>
         <Route path="sell-study-kits" element={<SellStudyKitsForm/>}/>
         </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/Login" element={<LoginRegister/>}/>
         <Route path="/:category/item/:id" element={<EachItemDetails/>}/>

        
        
       
       </Routes>
       <Footer/>  
    </div>
  )
}

export default App
