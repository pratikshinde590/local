import React from 'react';
import NavBar from '../components/menu/NavBar';

export default function Home() {
  return (
    <div className='w-100 vh-100'>
      <NavBar />
      <h2 className='mt-5 pt-5 text-center'>Home page</h2>
    </div>
  );
}