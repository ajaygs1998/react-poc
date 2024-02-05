// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Auth/Login/Login';
import Register from './Auth/Register/Register';
import ErrorPage from '../pages/Error/Error';
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';
import Opportunities from './Dashboard/opportunity/Opportunities'
import MyOpportunities from './Dashboard/opportunity/MyOpportunities'
import Refunds from './Dashboard/refund/Refunds'
import Finance from './Dashboard/finance/Finance'

import './App.css';

function App() {
    return (

        <Router>
            <div className="App">
                <Header />
                <Routes>
                    {/* Redirect to home page for the root route */}
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} /> {/*                                                                                                                                              Add route for Dashboard */}
                    {/* Add more routes as needed */}
                    <Route path="/error" element={<ErrorPage />} />
                    {/* Add a default route or a 404 page */}
                    <Route path="*" element={<ErrorPage />} />
                     {/* <Route path="/dashboard/opportunities" element={<Opportunities />} />
                    <Route path="/dashboard/my-opportunities" element={<MyOpportunities />} />
                    <Route path="/dashboard/refunds" element={<Refunds />} />
                    <Route path="/dashboard /finance" element={<Finance />} /> */}
                    
                </Routes>  s    
                <Footer />


            </div>
        </Router>
    );
}
export default App;
