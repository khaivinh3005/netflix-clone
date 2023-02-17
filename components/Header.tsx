import { FaBell, FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import MenuComponent from './Menu';
import MenuAccount from './MenuAccount';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout, loading } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick: any = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`${isScrolled && 'bg-red-500'}`}>
      <div className='flex items-center space-x-2 md:space-x-10'>
        <img
          src='https://rb.gy/ulxxee'
          width={100}
          height={100}
          className='cursor-pointer object-contain'
        />

        <MenuComponent />

        <ul className='hidden space-x-4 md:flex'>
          <li className='headerLink cursor-default font-semibold text-white hover:text-white'>
            Home
          </li>
          <li className='headerLink'>TV Shows</li>
          <li className='headerLink'>Movies</li>
          <li className='headerLink'>New & Popular</li>
          <li className='headerLink'>My List</li>
        </ul>
      </div>
      <div className='flex items-center space-x-4 text-sm font-light relative'>
        <FaSearch className='sm hidden h-6 w-6 sm:inline' />

        <p className='hidden lg:inline'>Kids</p>
        <FaBell className='sm hidden h-6 w-6 sm:inline' />

        <img
          src='https://rb.gy/g1pwyx'
          alt=''
          className='cursor-pointer rounded'
          id='basic-button'
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        />
        <MenuAccount
          open={open}
          anchorEl={anchorEl}
          handleClose={handleClose}
        />
      </div>
    </header>
  );
};

export default Header;
