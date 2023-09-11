import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  const [users, setUsers] = useState([])
  console.log(users)


  
  return (
    <div className="app">
    <BrowserRouter>
    <Routes>
    <Route path='/' exact element={<Home 
    users={users}
    setUsers={setUsers}
     />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
