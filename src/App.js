import './styles/App.css';
import Header from './components/Header';
import bmw from './images/bmw.mp4';

function App() {
    return (
        <div>
            <Header />
            <video className="video" autoPlay loop muted>
                <source src={bmw} type="video/mp4" />
            </video>
        </div>
    );
}

export default App;
