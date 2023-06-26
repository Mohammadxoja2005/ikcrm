import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// pages import
import Home from "./pages/home";
import Bronya from "./pages/bronya";
import InformatsiyaKlinetov from "./pages/informatsiyaKlinetov";
import Jk from "./pages/jk";
import JkData from "./pages/jkData";
import JkEdit from "./pages/jkEdit";
import Jkseea from "./pages/jkseea";
import Kalendar from "./pages/kalendar";
import Kupon from "./pages/kupon";
import KursValyuta from "./pages/kursValyuta";
import Lidi from "./pages/lidi";
import Login from "./pages/login";
import Nastroyki from "./pages/nastroyki";
import Obrazavainya from "./pages/obrazavainya";
import Perevod from "./pages/perevod";
import Polzovatel from "./pages/polzovatel";
import PolzovatelSee from "./pages/polzovatelSee";
import Prodno from "./pages/prodno";
import Profile from "./pages/profile";
import Rassrochka from "./pages/rassrochka";
import Sdelka from "./pages/sdelka";
import Sozdatbron from "./pages/sozdatbron";
import SozdatJk from "./pages/sozdatJk";
import SozdatJkDale from "./pages/sozdatJkDale";
import SozdatJkHome from "./pages/sozdatJkHome";
import SozdatLidi from "./pages/sozdatLidi";
import SozdatPolzovatel from "./pages/sozdatPolzovatel";
import SozdatRassrochka from "./pages/sozdatRassrochka";
import SozdatZadachi from "./pages/sozdatZadachi";
import Spisok from "./pages/spisok";
import VseKlienti from "./pages/vseKlienti";
import Yazik from "./pages/yazik";
import Zadachi from "./pages/zadachi";
import SeeBron from "./pages/SeeBron";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bron" element={<Bronya />} />
      <Route path="/informatsiyaKlienti" element={<InformatsiyaKlinetov />} />
      <Route path="/jk" element={<Jk />} />
      <Route path="/jkData/:complexId/:lobbyId" element={<JkData />} />
      <Route path="/jkEdit" element={<JkEdit />} />
      <Route path="/jkSee/:id" element={<Jkseea />} />
      <Route path="/calendar" element={<Kalendar />} />
      <Route path="/coupon" element={<Kupon />} />
      <Route path="/kursValyuta" element={<KursValyuta />} />
      <Route path="/lidi" element={<Lidi />} />
      <Route path="/login" element={<Login />} />
      <Route path="/settings" element={<Nastroyki />} />
      <Route path="/obrazavaniya" element={<Obrazavainya />} />
      <Route path="/perevod" element={<Perevod />} />
      <Route path="/users" element={<Polzovatel />} />
      <Route path="/userProfile" element={<PolzovatelSee />} />
      <Route path="/sold" element={<Prodno />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/rassrochka" element={<Rassrochka />} />
      <Route path="/sdelko" element={<Sdelka />} />
      <Route path="/newBron" element={<Sozdatbron />} />
      <Route path="/seeBron/:id" element={<SeeBron />} />
      <Route path="/newJk" element={<SozdatJk />} />
      <Route path="/newJkDale" element={<SozdatJkDale />} />
      <Route path="/newJkHome" element={<SozdatJkHome />} />
      <Route path="/newUser" element={<SozdatLidi />} />
      <Route path="/newPolzovtel" element={<SozdatPolzovatel />} />
      <Route path="/newCredit/:id" element={<SozdatRassrochka />} />
      <Route path="/newTasks" element={<SozdatZadachi />} />
      <Route path="/lists" element={<Spisok />} />
      <Route path="/allClients" element={<VseKlienti />} />
      <Route path="/language" element={<Yazik />} />
      <Route path="/tasks" element={<Zadachi />} />
    </Routes>
  );
}

export default App;
