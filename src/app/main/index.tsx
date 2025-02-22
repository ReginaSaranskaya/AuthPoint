import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AuthPage } from '@/pages/Login/AuthPage';
import styles from './style.module.scss';
import { HomePage } from '@/pages/Home/HomePage';

export const MainLayout = () => {
  return (
    <main className={styles.Main}>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </main>
  );
};
