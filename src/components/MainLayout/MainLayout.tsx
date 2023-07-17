import React from 'react';
import Container from 'components/Container/Container';
import Appbar from 'components/Appbar/Appbar';
import './MainLayout.css';

interface IMainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({children}: IMainLayoutProps) {
  return (
    <div className="main-layout">
      <Appbar />

      <main>
        <Container>
          {children}
        </Container>
      </main>
    </div>
  )
}
