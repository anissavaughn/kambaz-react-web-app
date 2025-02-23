import { Routes, Route, Navigate } from "react-router-dom";
import Account from "./account";
import Dashboard from "./dashboard";
import KambazNavigation from "./navigation";
import Courses from "./courses/courses-index";
import "./styles.css";



export default function Kambaz() {
  return (
    <div id="wd-kambaz">
      <KambazNavigation />
      <div className="wd-main-content-offset p-3">
      <Routes>
              <Route path="/" element={<Navigate to="account" />} />
              <Route path="/account/*" element={<Account />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/courses/:cid/*" element={<Courses />} />
              <Route path="/calendar" element={<h1>Calendar</h1>} />
              <Route path="/inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>
  );
}