import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main/Main';
import Task from './pages/Task/Task';
import Header from './components/header/Header';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/main' element={<Main/>}/>
        <Route path='/task' element={<Task/>}/>
        <Route path='/*' element={<Navigate to='/main'/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
