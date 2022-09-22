import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Footer from './Components/Footer/Footer';
// import Header from './Components/Header/Header';

//Importamos los diferentes componentes:

import Login from './Containers/Login/Login';
import LeaderBoard from './Containers/LeaderBoard/LeaderBoard';

function App() {

  return (

    <div className="App">

      <BrowserRouter>

        

        <Routes>


          <Route path={'/'} element={<Login />} />
          <Route path={'/leaderboard'} element={<LeaderBoard />} />


        </Routes>


      </BrowserRouter>

    </div>

  );

}

export default App;
