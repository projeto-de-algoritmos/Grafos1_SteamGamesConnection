import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='main-container'>
      <Header/>
      <HomePage />
    </div>
  );
}

export default App;
