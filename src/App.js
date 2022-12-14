import './styles/App.css';
import Header from './components/Header';
import bmw from './images/bmw.mp4';
import React, { useState } from 'react';
import mute from './images/mute.png';
import unmute from './images/unmute.png';
import { Link } from 'react-router-dom';

function App() {
    const [muted, setMuted] = useState(true);
    const handleToggleMute = () => setMuted((current) => !current);
    return (
        <div>
            <Header />
            <video className="video" autoPlay loop muted={muted}>
                <source src={bmw} type="video/mp4" />
            </video>
            <Link className="shop-now" to="/shop">
                Shop Now
            </Link>
            <button onClick={handleToggleMute} className="mute">
                <img
                    className="logo"
                    src={muted ? mute : unmute}
                    alt="BMW Logo"
                ></img>
            </button>
        </div>
    );
}

export default App;
