import Layout from '@/containers/Layout';
import Aboutpage from '@/pages/Aboutpage';
import Homepage from '@/pages/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
 return (
  <BrowserRouter>
   <Routes>
    <Route element={<Layout />}>
     <Route index element={<Homepage />} />
     <Route path="about" element={<Aboutpage />} />
    </Route>
   </Routes>
  </BrowserRouter>
 );
}

export default App;
