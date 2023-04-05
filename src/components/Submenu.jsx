import { useGlobalContext } from '../contexts/Context';
import sublinks from '../data';

const Submenu = () => {
  const { pageId } = useGlobalContext();

  const currentPage = sublinks.find((sublink) => sublink.pageId === pageId);

  return (
    <div className={pageId ? 'submenu show-submenu' : 'submenu'}>
      <h5>{currentPage?.page}</h5>
      <div
        className='submenu-links'
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr',
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, label, url, icon } = link;
          return (
            <a href={url} key={id}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Submenu;
