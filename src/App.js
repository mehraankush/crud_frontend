import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import{ NewUser, Navbar,Landing,AllUsers,EditUser}  from './component';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/AllUsers' element={ <AllUsers/>} />
          <Route path='/AddUsers' element={ <NewUser/>} />
          <Route path='/edit/:id' element={ <EditUser/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
