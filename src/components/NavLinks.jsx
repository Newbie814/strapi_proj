import { useGlobalContext } from '../contexts/Context';
import sublinks from '../data';

const NavLinks = () => {
  const { openSubmenu, closeSubmenu } = useGlobalContext();
  return (
    <ul className='nav-links'>
      {sublinks.map((subLink) => {
        const { pageId, page } = subLink;
        return (
          <button key={pageId} className='nav-link'>
            {page}
          </button>
        );
      })}
    </ul>
  );
};
export default NavLinks;
