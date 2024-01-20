import React, { useState } from 'react';
import LeftNavbar from './LeftNavbar';
import OnBoarding from './Onboarding/Onboarding';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';

function Dashboard() {
    return (
        <>
            <div className="dashboard-wrapper">
                <Navbar />
                <LeftNavbar />
                <Routes>
                    <Route path="/onboarding/*" element={<OnBoarding />}></Route>
                </Routes>

            </div>
        </>
    )
}

export default Dashboard