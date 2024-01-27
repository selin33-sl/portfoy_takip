import {useEffect} from 'react';
import {toastComp} from '../components';

export const useToast = (
  status,
  resetStore,
  toastSuccessMessage,
  toastErrorMessage,
  dispatch,
) => {
  useEffect(() => {
    if (status === 'success') {
      toastComp('success', toastSuccessMessage);
      setTimeout(() => {
        dispatch(resetStore);
      }, 2000);
    } else if (status === 'error') {
      toastComp('error', toastErrorMessage);
      setTimeout(() => {
        dispatch(resetStore);
      }, 2000);
    }
  }, [status, resetStore, toastSuccessMessage, toastErrorMessage]);
};
