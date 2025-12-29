import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          color: 'white',
          textAlign: 'center',
          padding: '20px',
          background: '#000'
        }}>
          <h2>Something went wrong with the 3D experience.</h2>
          <p>We're showing you a simplified version instead.</p>
          <div style={{ marginTop: '20px' }}>
            {this.props.fallback || <p>Displaying fallback content...</p>}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;