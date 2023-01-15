import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Navbar/Dialogs/Dialogs";
import Music from "./components/Navbar/Music/Music";
import News from "./components/Navbar/News/News";
import Settings from "./components/Navbar/Settings/Settings";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
    return (
        <div className='app-wrapper'>

            <BrowserRouter>
                <Header/>
                <Navbar/>
                <Routes>
                    <Route path={"/"} element={<Profile/>}></Route>
                    <Route path={"/dialogs/*"} element={<Dialogs/>}></Route>
                    <Route path={"/music"} element={<Music/>}></Route>
                    <Route path={"/news"} element={<News/>}></Route>
                    <Route path={"/settings"} element={<Settings/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>);
}

export default App;