import { Menu, MenuItem } from '@mui/material';
import { useRouter } from 'next/router';
import React, { Dispatch, SetStateAction, useState } from 'react';
import useAuth from '../hooks/useAuth';

interface Props {
  open: boolean;
  handleClose: any;
  anchorEl: HTMLElement | null;
}

const MenuAccount = ({ anchorEl, open, handleClose }: Props) => {
  const { logout } = useAuth();
  const router = useRouter();
  return (
    <div style={{ position: 'relative' }}>
      <Menu
        id='basic-menu'
        className='menu-account'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => router.push('/account')}>My account</MenuItem>
        <MenuItem onClick={() => router.push('/account')}>Setting</MenuItem>
        <MenuItem
          onClick={() => {
            logout();
            handleClose();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuAccount;
