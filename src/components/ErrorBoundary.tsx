import React from 'react';

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error: any) {
    if (error) {
      return {
        hasError: true,
      };
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error">
          <div
            style={{
              textAlign: 'center',
              position: 'absolute',
              top: '20%',
            }}
          >
            일시적인 오류가 발생하였습니다.
            <br />
            <br />
            잠시후 다시 접속해주세요
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
