import Container from '@/containers/Container';
import logo from '@/assets/img/svg/logo.svg';

function Header() {
 return (
  <header className="bg-b-black">
   <Container>
    <div className="flex items-center gap-[32px] text-t-light p-[12px]">
     <a href="#" className="w-[140px] h-[29px]">
      <img className="" src={logo} alt="" />
     </a>
     <nav className="ml-auto">
      <ul className="flex items-center gap-[24px]">
       <li className="">
        <a href="#" className="">
         Home
        </a>
       </li>
       <li className="">
        <a href="#" className="">
         Blog
        </a>
       </li>
       <li className="">
        <a href="#" className="">
         About Us
        </a>
       </li>
       <li className="">
        <a href="#" className="">
         Contact us
        </a>
       </li>
      </ul>
     </nav>
     <a href="#" className="btn bg-b-light">
      Subscribe
     </a>
    </div>
   </Container>
  </header>
 );
}

export default Header;
