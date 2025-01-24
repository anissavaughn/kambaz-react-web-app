import { Routes, Route, Navigate } from "react-router-dom";
import Account from "./account";
import Dashboard from "./dashboard";
import KambazNavigation from "./navigation";
import Courses from "./courses";


export default function Kambaz() {
  return (
    <div id="wd-kambaz">
      <table>
            <tr>
                <td valign="top">
                    <KambazNavigation />
                </td>
                <td valign="top">
                    <Routes>
                        <Route path="/" element={<Navigate to="account" />} />
                        <Route path="/account/*" element={<Account />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/Courses/:cid/*" element={<Courses />} />
                        <Route path="/Calendar" element={<h1>Calendar</h1>} />
                        <Route path="/Inbox" element={<h1>Inbox</h1>} />
                    </Routes>
                </td>
            </tr>
        </table>
    </div>
  );
}
