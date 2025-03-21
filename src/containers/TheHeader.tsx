import Container from '@/containers/Container';
import logo from '@/assets/img/svg/logo.svg';
import { Link } from 'react-router';

function Header() {
 return (
  <header className="text-t-light bg-b-black">
   <Container>
    <div className="">
     <img className="" src={logo} alt="" />
     <nav className="">
      <ul className="">
       <Link to="/">home</Link>
       <Link to="/about">about</Link>
      </ul>
     </nav>
    </div>
   </Container>
  </header>
 );
}

export default Header;
