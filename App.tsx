import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { 
  DashboardView, 
  AnalyticsView, 
  ProjectsView, 
  TeamView, 
  DocumentsView, 
  SettingsView 
} from './components/Views';
import { Page } from './types';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.DASHBOARD);

  const renderContent = () => {
    switch (activePage) {
      case Page.DASHBOARD:
        return <DashboardView />;
      case Page.ANALYTICS:
        return <AnalyticsView />;
      case Page.PROJECTS:
        return <ProjectsView />;
      case Page.TEAM:
        return <TeamView />;
      case Page.DOCUMENTS:
        return <DocumentsView />;
      case Page.SETTINGS:
        return <SettingsView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <Layout activePage={activePage} onNavigate={setActivePage}>
      {renderContent()}
    </Layout>
  );
};

export default App;
