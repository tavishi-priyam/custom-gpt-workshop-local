
import React, { useState, useCallback } from 'react';
import { Layout } from './components/Layout';
import { Toast } from './components/Toast';
import { PageId } from './types';
import { Home } from './pages/Home';
import { WorkshopPage } from './pages/WorkshopPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'copywriter':
        return <WorkshopPage type="copywriter" showToast={showToast} />;
      case 'reporter':
        return <WorkshopPage type="reporter" showToast={showToast} />;
      case 'client':
        return <WorkshopPage type="client" showToast={showToast} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
      <Layout activePage={currentPage} onNavigate={handleNavigate}>
        {renderPage()}
      </Layout>
      <Toast message={toastMessage} isVisible={toastVisible} />
    </>
  );
};

export default App;
