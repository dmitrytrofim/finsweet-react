import Layout from '@/components/Layout';
import Homepage from '@/pages/Homepage';
import Blogpage from '@/pages/Blogpage';
import { Routes, Route } from 'react-router';
import Aboutpage from '@/pages/Aboutpage';
import Contactspage from '@/pages/Contactspage';

function App() {
 return (
  <Routes>
   <Route path="/" element={<Layout />}>
    <Route index element={<Homepage />} />
    <Route path="blog" element={<Blogpage />} />
    <Route path="about" element={<Aboutpage />} />
    <Route path="contacts" element={<Contactspage />} />
   </Route>
  </Routes>
 );
}

export default App;
