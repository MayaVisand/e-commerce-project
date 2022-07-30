import React from 'react';
import './App.css';
import ProductPage from "./components/ProductPage";
import AlsoLike from "./components/AlsoLike";
import Header from "./components/Header";
function App() {
    return (
        <div className='mainDiv'>
            <Header/>
            <ProductPage/>
            <AlsoLike/>
            <div>Footer/Base</div>
        </div>

    )
}


export default App;

