import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Footer from './Components/Footer/Footer';
// import Header from './Components/Header/Header';

//Importamos los diferentes componentes:

import Login from './Containers/Login/Login';

function App() {

  return (

    <div className="App">

      <BrowserRouter>

        // <Header />

        <Routes>


          <Route path={'/login'} element={<Login />} />


        </Routes>

        // <Footer />

      </BrowserRouter>

    </div>

  );
  
}

export default App;
