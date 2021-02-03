import { useEffect, useState } from 'react';

const DISMISS_TIMEOUT = 10000;

const useAutoDismissAlert = (): [boolean, (visible: boolean) => void] => {
  // eslint-disable-next-line no-undef
  const [dismissTimeout, setDismissTimeout] = useState<null | NodeJS.Timeout>(null);
  const [alertVisible, setAlertVisible] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      if (dismissTimeout) {
        clearTimeout(dismissTimeout);
      }
    };
  }, [dismissTimeout]);

  const setAlertVisibleWithTimeout = (value: boolean) => {
    if (!value) {
      setAlertVisible(false);
    } else {
      setAlertVisible(true);
      setDismissTimeout(
        setTimeout(() => {
          setAlertVisible(false);
        }, DISMISS_TIMEOUT)
      );
    }
  };

  return [alertVisible, setAlertVisibleWithTimeout];
};

export default useAutoDismissAlert;
