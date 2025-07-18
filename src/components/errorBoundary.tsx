"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-primary-bg text-primary-text">
          <div className="text-center p-8">
            <h1 className="text-4xl font-bold mb-4 text-primary-error">
              Oops! Something went wrong
            </h1>
            <p className="text-lg mb-6">
              We're sorry, but something unexpected happened.
            </p>
            <button
              className="bg-primary-accent text-primary-secondary px-6 py-2 rounded-md hover:bg-primary-hover transition-colors"
              onClick={() => this.setState({ hasError: false })}
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
