import { BrowserRouter, Route, HashRouter, Routes } from 'react-router-dom';
import App from './App';
import Shop from './routes/Shop';

const RouteSwitch = () => {
    return (
        <HashRouter basename="/">
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/shop" element={<Shop />} />
            </Routes>
        </HashRouter>
    );
};

export default RouteSwitch;
