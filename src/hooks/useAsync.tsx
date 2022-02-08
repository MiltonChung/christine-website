import * as React from 'react';

type AsyncState<T, S> = {
  status: 'idle' | 'loading' | 'error' | 'success';
  data: T | null;
  error: S;
};

type InitialAsyncState<T, S> = {
  status?: 'idle' | 'loading' | 'error' | 'success';
  data: T | null;
  error?: S;
};

type UseAsyncResult<T, S> = {
  isIdle: boolean;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  reset: () => void;
  setData: (data: T) => void;
  setError: (error: S) => void;
  run: (promise: Promise<T>) => Promise<T>;
} & AsyncState<T, S>;

const defaultState: AsyncState<unknown, null> = {
  status: 'idle',
  data: null,
  error: null
};

const useAsync = <T, S = unknown>(
  initialState?: InitialAsyncState<T, S>
): UseAsyncResult<T, S> => {
  const cancelRef = React.useRef(false);
  const initialStateRef = React.useRef<AsyncState<T, S>>({
    ...defaultState,
    ...initialState
  });
  // state dipatch function and state utility fns
  const [state, unsafeSetState] = React.useReducer(
    (state: AsyncState<T, S>, updates: Partial<AsyncState<T, S>>) => ({
      ...state,
      ...updates
    }),
    initialStateRef.current
  );

  React.useEffect(() => {
    return () => {
      cancelRef.current = true;
    };
  }, []);

  const safeSetState = React.useCallback((updates: Partial<AsyncState<T, S>>) => {
    if (!cancelRef.current) unsafeSetState(updates);
  }, []);

  const setData = React.useCallback(
    (data: T) => {
      if (!cancelRef.current) safeSetState({ data, status: 'success' });
    },
    [safeSetState]
  );
  const setError = React.useCallback(
    error => safeSetState({ error, status: 'error' }),
    [safeSetState]
  );
  const reset = React.useCallback(
    () => safeSetState(initialStateRef.current),
    [safeSetState]
  );

  // Runs and asynchronous function and handles updating all state hooks.
  const run = React.useCallback(
    (promise: Promise<T>) => {
      // this clears when using setData and setError below.
      safeSetState({ status: 'loading' });
      return promise.then(
        data => {
          setData(data);
          return data;
        },
        error => {
          setError(error);
          return Promise.reject(error);
        }
      );
    },
    [safeSetState, setData, setError]
  );

  return {
    isLoading: state.status === 'loading',
    isError: state.status === 'error',
    isSuccess: state.status === 'success',
    isIdle: state.status === 'idle',
    reset,
    setData,
    setError,
    run,
    ...state
  };
};

export { useAsync };