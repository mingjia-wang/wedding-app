import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import App from '../pages/Home';
import Match from '../pages/Match';
import Form from '../pages/Form';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App/>}></Route>
            <Route path="/match" element={<Match/>}></Route>
            <Route path="/form" element={<Form />}></Route>
            {/* <Route path="page1" element={} */}
        </>
        
    )
);

export default router;