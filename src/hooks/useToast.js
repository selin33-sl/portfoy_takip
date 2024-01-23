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
      console.log('111111', toastSuccessMessage);
      toastComp('success', toastSuccessMessage);
      setTimeout(() => {
        dispatch(resetStore);
      }, 2000);
    } else if (status === 'error') {
      console.log('2222222222', toastErrorMessage);
      toastComp('error', toastErrorMessage);
      setTimeout(() => {
        dispatch(resetStore);
      }, 2000);
    }
  }, [status, resetStore, toastSuccessMessage, toastErrorMessage]);
};
