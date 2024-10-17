import Logo from '../assets/images/Logo.svg';

const Nav = () => {

    return <nav className="flex items-center justify-between p-4 bg-green-800 text-white">
        <img src={Logo} alt="Logo" />
        <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Menu</a></li>
        <li><a href='#'>Reservations</a></li>
        <li><a href='#'>Order Online</a></li>
        <li><a href='#'>Login</a></li>
        </ul>

    </nav>;
  };

  export default Nav;