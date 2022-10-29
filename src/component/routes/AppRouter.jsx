import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { publicRoutes, privateRoutes } from '../routes/Routes';

const AppRouter = () => {
    const isAuth = useSelector(state => state.auth)

    return (
        <Router>
            {isAuth ? 
                    <Routes>
                        {privateRoutes.map((route, index) => 
                            <Route path={route.path} element={route.element} key={index}/>
                        )}
                    </Routes>
                    :
                    <Routes>
                        {publicRoutes.map((route, index) => 
                            <Route path={route.path} element={route.element} key={index}/>
                        )}
                    </Routes>
                    }
        </Router>
    )
}

export default AppRouter