import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useAuth } from '../../contexts/AuthContext';

const Layout = () => {
  const { user } = useAuth();
  const location = useLocation();

  // Check if we're in the dashboard area
  const isDashboard = user && (
    location.pathname === '/dashboard' ||
    location.pathname === '/profile' ||
    location.pathname === '/interview-assistant'
  );

  return (
    <div className="flex flex-col min-h-screen noise-bg">
      <Header showNav={!isDashboard} />
      <main className="flex-grow">
        <Outlet />
      </main>
      {!isDashboard && <Footer />}
    </div>
  );
};

export default Layout;