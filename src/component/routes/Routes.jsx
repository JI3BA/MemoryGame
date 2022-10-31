import LogIn from '../pages/LogIn/LogIn'
import SmallField from '../SmallField'
import Results from '../pages/Results/Results'
import { Navigate } from 'react-router-dom'

export const privateRoutes = [
    {path: '*', element: <Navigate to="/field" replace />},
    {path: '/field', element: <SmallField replace={false}/>},
    {path: '/results', element: <Results/>}
]

export const publicRoutes = [
    {path: '*', element: <Navigate to="/login" replace />},
    {path: '/login', element: <LogIn/>},
]