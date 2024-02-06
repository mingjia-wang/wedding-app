import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import App from '../pages/Home';
import Match from '../pages/Match';
import Form from '../pages/Form';
import LetsPlan from '../pages/LetsPlan';
import SignUp from '../pages/SignUp';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App/>}></Route>
            <Route path="/match" element={<Match/>}></Route>
            <Route path="/form" element={<Form />}></Route>
            <Route path="lets-plan" element={<LetsPlan />}></Route>
            <Route path="signup" element={<SignUp />}></Route>
        </>
        
    )
);

export default router;