import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminSignupPage from '../pages/AdminSignupPage/AdminSignupPage';

function AdminRoute(props) {
    return (
        <Routes>
            <Route path="/signup" element={<AdminSignupPage />} />

            {/* <Route path="/main" element={<AdminMainPage />} />
            <Route path="/sale/*" element={<AdminSalesPage />} />
            <Route path="/pay" element={<AdminPayPage />} />
            <Route path="/add" element={<AdminMenuAdd />} />
            <Route path="/getmenu/*" element={<AdminMenuSearch />} />
            <Route path="/passwordedit" element={<PasswordEditPage />} />
            <Route path="/usersearch" element={<AdminUserSearch />} />
            <Route path="/feedback" element={<AdminFeedbackPage />} />
            <Route path="/signup" element={<OAuth2SignupPage />} />
            <Route path="/setting" element={<AdminStoreSettingPage />} /> */}
        </Routes>
    );
}

export default AdminRoute;