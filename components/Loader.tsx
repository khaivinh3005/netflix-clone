import React from 'react';
import ReactLoading from 'react-loading';

type Props = {
  color: string;
};

const Loader = ({ color }: Props) => {
  return (
    <ReactLoading
      className='m-auto h-7 w-7 text-gray-200 dark:text-transparent'
      type={'spin'}
      color={color}
      height={'1.75rem'}
      width={'1.75rem'}
    />
  );
};

export default Loader;
