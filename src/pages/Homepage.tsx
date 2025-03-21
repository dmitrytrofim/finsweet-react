import Container from '@/containers/Container';
import { Link, Outlet } from 'react-router';

function Homepage() {
 return (
  <>
   <section className="">
    <Container>
     <div className="">home</div>
     <div className="mb-[50px]">
      <Link to="/">test1</Link>
      <Link to="/test2">test2</Link>
     </div>
     <Outlet />
    </Container>
   </section>
  </>
 );
}

export default Homepage;
