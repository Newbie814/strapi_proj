import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../contexts/Context';
import NavLinks from './NavLinks';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  return (
    <nav>
      <div className='nav-center'>
        <h3 className='logo'>Strapi</h3>
        <button className='toggle-btn' onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};
export default Navbar;
