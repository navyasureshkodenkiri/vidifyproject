import React, { useState } from "react";
import Header from "../components/Header";
import SideNowBar from "../components/SideNowBar";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./HomePage/HomeScreen";
import NotificationScreen from "./Notification/Notification";
import ProfileScreen from "./Profile/Profile";
import CategoryVideoScreen from "./CategoryVideosPage/CategoryVideoScreen";

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
            <Route path="notifications" element={<NotificationScreen />} />
            <Route path="profile" element={<ProfileScreen />} />
            <Route path="/videosByCategories/:category" element={<CategoryVideoScreen />} />
          </Routes>
        </section>
      </main>
    </>
  );
}
