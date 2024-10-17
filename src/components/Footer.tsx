import Logo from '../assets/images/Logo.svg';

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="Logo" />
      <div>
      <span>Doormat Navigation</span>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Menu</a></li>
        <li><a href='#'>Reservations</a></li>
        <li><a href='#'>Order Online</a></li>
        <li><a href='#'>Login</a></li>
      </ul>
      </div>

      <div>
      <span>Contact</span>
      <ul>
            <li><a href='#'>LittleLemon@hotmail.com</a></li>
      </ul>
      </div>

      <div>
      <span>Social Media Links</span>
      <ul>
        
      </ul>
      </div>
     

    </footer>
  );
};

export default Footer;
