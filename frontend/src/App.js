import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='main-container'>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
