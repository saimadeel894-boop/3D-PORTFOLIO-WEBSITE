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
          minHeight: '400px',
          height: '100%',
          width: '100%',
          color: 'white',
          textAlign: 'center',
          padding: '40px 20px',
          background: 'rgba(0,0,0,0.8)',
          borderRadius: '20px',
          border: '1px solid rgba(0,255,255,0.2)',
          backdropFilter: 'blur(10px)',
          margin: '20px 0'
        }}>
          <div className="fallback-container" style={{ width: '100%' }}>
            {this.props.fallback}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;