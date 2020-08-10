import React from 'react';
interface State {
  hasError: boolean;
  fallbackComponent?: any;
}

interface Props {
  fallbackComponent?: any;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    if (process.env.NODE_ENV === 'development') {
      console.log(error, errorInfo)
    }
  }

  render() {
    const { fallbackComponent } = this.props;
    if (this.state.hasError) {
      return fallbackComponent ? fallbackComponent() : <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}