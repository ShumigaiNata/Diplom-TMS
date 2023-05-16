import React from 'react';
import './App.css';
import AppRouter from "../AppRouter/AppRouter";
import MainAuthWrapper from "../common/MainAuthWrapper/MainAuthWrapper";

function App() {
    return (
        <div className="App">
           <MainAuthWrapper>
               <AppRouter/>
           </MainAuthWrapper>
        </div>
    );
}

export default App;
