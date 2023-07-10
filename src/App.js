import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Paralal from './pages/Paralal';
import Marvel from './pages/Marvel';
import Search from './pages/Search';
import Watch from './pages/Watch';
import TestData from './pages/TestData';

function App() {
  return (
    <div className="">
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/para' element={<Paralal/>}/>
          <Route path='/Marvel' element={<Marvel/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/watch' element={<Watch/>}/>
          <Route path='/developer' element={<TestData/>}/>




        </Routes>
    </div>
  );
}

export default App;
