import './App.css';
import { Routes, Route } from 'react-router-dom'
import AllUsers from './pages/AllUsers';
import AddUser from './pages/AddUser';

function App() {
  return (
    <Routes>

      <Route path='/' element={<AllUsers/>} />
      <Route path='/form' element={<AddUser/>} />

    </Routes>
  );
}

export default App;
