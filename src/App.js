import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import View from './components/View';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Settings from './components/Settings';
import Interface from './components/Interface';
import BookDetailsPage from './components/BookDetailsPage';
import BookPage from './components/BookPage';
import WelcomePage from './components/WelcomePage';


function App() {
  return (
    <div className="App">
      
     {/* <Display /> */}
     {/* <View /> */}
     {/* <Settings /> */}
     {/* <Interface /> */}
     <Routes>
      <Route path='/' element={<WelcomePage />} />
      <Route path='/v' element={<View />} />
      <Route path='/s' element={<Settings />} />
      <Route path='/b' element={<BookPage />} />
     </Routes>
    
     
    </div>
  );
}

export default App;
