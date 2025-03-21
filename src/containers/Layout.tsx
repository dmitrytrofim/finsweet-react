import TheWrapper from '@/containers/TheWrapper';
import Header from '@/containers/TheHeader';
import Footer from '@/containers/TheFooter';
import { Outlet } from 'react-router';

function Layout() {
 return (
  <TheWrapper>
   <Header />
   <main className="">
    <Outlet />
   </main>
   <Footer />
  </TheWrapper>
 );
}

export default Layout;
