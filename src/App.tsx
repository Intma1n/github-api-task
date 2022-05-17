import React, {Fragment} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import {AllUsersPage} from "./pages/AllUsersPage/AllUsersPage";
import {SingleUserPage} from "./pages/SingleUserPage/SingleUserPage";

function App() {
    return (
        <Fragment>
            <Routes>
                <Route path={'/'} element={<Navigate replace to='/all-users'/>}/>
                <Route path={'/all-users'} element={<AllUsersPage/>}/>
                <Route path={'/user/:username'} element={<SingleUserPage/>}/>
            </Routes>
        </Fragment>
    );
}

export default App;
