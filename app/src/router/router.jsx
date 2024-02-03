import { createBrowserRouter, createRoutesFromElements, Route, Router } from 'react-router-dom';

import App from '../App';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}></Route>
    )
);

export default router;