import React from 'react';

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error: any) {
    if (error && error.toString().indexOf('ChunkLoadError') > -1) {
      return {
        hasError: true,
      };
    }
  }

  render() {
    if (this.state.hasError) {
      return <div>error</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
