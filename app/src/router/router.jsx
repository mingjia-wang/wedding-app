import { createBrowserRouter, createRoutesFromElements, Route, Router } from 'react-router-dom';

import App from '../pages/Home';
import Match from '../pages/Match';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App/>}></Route>
            <Route path='/match' element={<Match/>}></Route>
        </>
        
    )
);

export default router;