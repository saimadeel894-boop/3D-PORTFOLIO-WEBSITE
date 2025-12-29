import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Add basic error handling for the entire app
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

try {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} catch (error) {
  console.error('Failed to render app:', error);
  
  // Fallback UI if React fails to render
  document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    if (root) {
      root.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background: #000; color: #fff; text-align: center; padding: 20px;">
          <h1>Portfolio Loading Error</h1>
          <p>There was an issue loading the portfolio. Please try refreshing the page.</p>
          <button onclick="location.reload()" style="margin-top: 20px; padding: 10px 20px; background: #00ffff; color: #000; border: none; border-radius: 50px; cursor: pointer;">
            Refresh Page
          </button>
        </div>
      `;
    }
  });
}
