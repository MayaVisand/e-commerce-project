import React from 'react';
import './App.css';
import ProductPage from "./components/ProductPage";

import Header from "./components/Header";
import Footer from "./components/Footer";
import {Routes, Route, BrowserRouter} from "react-router-dom";
// import store from "../src/redux/store";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>

            <BrowserRouter>
                <Routes>
                    <Route path='/'
                           element={<ProductPage/>}/>
                </Routes>
            </BrowserRouter>

            <Footer/>
        </div>

    )
}


export default App;

