import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Submenu from './components/Submenu';
import { useGlobalContext } from './contexts/Context';

const App = () => {
  const { isSidebarOpen } = useGlobalContext();
  console.log(isSidebarOpen);
  return (
    <main>
      <Navbar />
      <Hero />
      <Submenu />
    </main>
  );
};
export default App;
