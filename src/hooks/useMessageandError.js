import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useToast} from './useToast';
import {Loader} from '../components';

export const useMessageAndErrorUser = (
  globalSelector,
  dispatch,
  resetStore,
) => {
  const {isLoading, message, status} = useSelector(state =>
    globalSelector(state),
  );

  console.log('isLoading:', isLoading);
  console.log('messagee:', message);
  console.log('statuss:', status);

  //   useEffect(() => {
  //     if (status === 'success' || status === 'error') {
  //       useToast(status, resetStore, message, message, dispatch);
  //     }
  //   }, [status, message, dispatch, resetStore]);

  useEffect(() => {
    if (isLoading) {
      console.log('LOADİNG ÇALIŞTI');
      Loader();
    }
    console.log('LOADİNG DURDU');
  }, [isLoading]);
};
