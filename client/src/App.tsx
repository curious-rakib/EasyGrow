import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './Pages/Signup/Signup.component';
import Login from './Pages/Login/Login.component';
import MapComponent from './components/Map/Map.component';
import SplashScreen from './Pages/SplashScreen/SplashScreen.component';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SplashScreen />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/map' element={<MapComponent />}></Route>
      </Routes>
    </>
  );
}

export default App;
