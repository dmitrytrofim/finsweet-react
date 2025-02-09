import Layout from '@/components/Layout';
import Homepage from '@/pages/Homepage';
import Blogpage from '@/pages/Blogpage';
import { Routes, Route } from 'react-router';

function App() {
 return (
  <Routes>
   <Route path="/" element={<Layout />}>
    <Route index element={<Homepage />} />
    <Route path="blog" element={<Blogpage />} />
   </Route>
  </Routes>
 );
}

export default App;
