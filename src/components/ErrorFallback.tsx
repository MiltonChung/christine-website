import * as React from "react";
import { FComponent } from "../types/common";

type ErrorFallbackProps = {
  error: any;
  resetErrorBoundary: any;
};

const ErrorFallback: FComponent<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <main className="error-boundary" role="alert">
      <h3>Oops, something went wrong:</h3>
      <pre>Error: {error.message}</pre>
      <p>
        Apologies! It encountered an error from which it couldn&apos;t recover.
        If you wish to retry, click &apos;Try again&apos; below to refresh the
        page. Thanks!
      </p>
      <button className="primary-button" onClick={resetErrorBoundary}>
        Try again
      </button>
    </main>
  );
};

export { ErrorFallback };
