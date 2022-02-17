import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Profile from "./components/admin/Profile";
import Dashboard from "./components/admin/Dashboard";
import MasterLayout from "./layouts/admin/MasterLayout";
import Home from "./components/frontend/Home";
import Login from "./components/frontend/auth/Login"
import Register from "./components/frontend/auth/Register"
import AdvOffers from "./components/admin/Advertiser/AdvOffers";
import AdvSites from "./components/admin/Advertiser/AdvSites";
import PubOffers from "./components/admin/Publisher/PubOffers";
import PubSites from "./components/admin/Publisher/PubSites";
import MasterLayoutFront from "./layouts/frontend/MasterLayoutFront";
import TablesAdmin from "./components/admin/Tools/TablesAdmin";
import ChartsAdmin from "./components/admin/Tools/ChartsAdmin";

function App() {
  return (
   <BrowserRouter>
        <Routes>
          <Route exact path="/"  element={<MasterLayoutFront></MasterLayoutFront>}>
            <Route index element={<Home />} />
            <Route exact path="/login"  element={<Login></Login>}></Route>
            <Route exact path="/register"  element={<Register></Register>}></Route>  
          </Route>
          
          <Route exact path="/admin"  element={<MasterLayout />}>
            <Route index element={<Dashboard />} />
            <Route exact path='dashboard' element={<Dashboard />}></Route>
            <Route exact path='profile' element={<Profile />}></Route>
            <Route exact path='advertiser/offers' element={<AdvOffers />}></Route>
            <Route exact path='advertiser/sites' element={<AdvSites />}></Route>
            <Route exact path='publisher/offers' element={<PubOffers />}></Route>
            <Route exact path='publisher/sites' element={<PubSites />}></Route>
            <Route exact path='tables' element={<TablesAdmin />}></Route>
            <Route exact path='charts' element={<ChartsAdmin />}></Route>                
          </Route>          
        </Routes>
    </BrowserRouter>
  );
}

export default App;
