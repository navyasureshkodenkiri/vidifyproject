import React, { useState } from "react";
import Header from "../components/Header";
import SideNowBar from "../components/SideNowBar";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./HomePage/HomeScreen";

export default function MainScreen() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  return (
    <>
      <Header  isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen}/>
      <main className="main">
        {isSideBarOpen && <SideNowBar />}
        <section>
          <Routes>
            <Route path="/*" element={<HomeScreen />} />
          </Routes>
        </section>
      </main>
    </>
  );
}
