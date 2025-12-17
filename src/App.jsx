
import { Route, Routes } from "react-router";
import "./App.css";
import MainNavbar from "./components/partials/Navbar/MainNavbar";
import HomePage from "./components/HomePage/HomePage"
import Books from "./components/Books/Books"
import Notes from "./components/Notes/Notes"
import Subscriptions from "./components/Subscriptions/Subscriptions"
import StudyKits from "./components/Study Kits/StudyKits"
import Donate from "./components/Donate/Donate"
import ExploreMore from "./components/Explore More/ExploreMore"
import Sell from "./components/Sell Your Study Material/Sell"
import Cart from "./components/Cart/Cart"
import LoginRegister from "./components/Login/LoginRegister.jsx";
import { Navigate } from "react-router";
import Footer from "./components/partials/Footer";
import SellBookForm from "./components/Sell Your Study Material/SellBookForm.jsx";
import SellNotesForm from "./components/Sell Your Study Material/SellNotesForm.jsx";
import SellSubscriptionsForm from "./components/Sell Your Study Material/SellSubscriptionsForm.jsx";
import SellStudyKitsForm from "./components/Sell Your Study Material/SellStudyKitsForm.jsx";
import EachItemDetails from "./components/item-Container/EachItemDetails.jsx";
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
