import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import HomePage from './components/pages/HomePage';
import Search from './components/pages/Search';
import Detail from './components/pages/Detail';
import NotFound from './components/pages/404';

function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="search" element={<Search />} />
               <Route path="detail" element={<Detail />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
         </div>
      </BrowserRouter>
   );
}

export default App;
