import { useState } from 'react';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Orders from './components/Orders';

function App() {
  const [activeTab, setActiveTab] = useState('Profile');

  const renderTab = () => {
    switch(activeTab) {
      case 'Profile':
        return <Profile />;
      case 'Settings':
        return <Settings />;
      case 'Orders':
        return <Orders />;
      default:
        return <Profile />;
    }
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Dashboard</h2>

      {/* Tabs */}
      <div style={{ marginBottom: '20px' }}>
        {['Profile', 'Settings', 'Orders'].map(tab => (
          <button 
            key={tab} 
            onClick={() => setActiveTab(tab)}
            style={{ 
              margin: '0 5px', 
              padding: '10px 20px', 
              backgroundColor: activeTab === tab ? 'lightblue' : 'white'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{ border: '1px solid gray', padding: '20px', width: '400px', margin: '0 auto' }}>
        {renderTab()}
      </div>
    </div>
  );
}

export default App;