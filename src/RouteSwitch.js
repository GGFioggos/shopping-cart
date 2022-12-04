import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Shop from './routes/Shop';

const RouteSwitch = () => {
    return (
        <BrowserRouter basemname={`/${process.env.PUBLIC_URL}`}>
            <Routes>
                <Route exact path="" element={<App />} />
                <Route exact path="/shop" element={<Shop />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;
