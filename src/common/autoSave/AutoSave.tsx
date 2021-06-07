import { debounce } from 'lodash';
import { useCallback, useEffect } from 'react';
import { FormSpy } from 'react-final-form';

type AutoSaveProps<T> = {
  save: (values: T) => void;
  debounceInMs: number;
};

type AutoSaveComponentProps<T> = AutoSaveProps<T> & {
  values?: T;
};

const AutoSaveComponent = ({ save, values, debounceInMs }: AutoSaveComponentProps<any>) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSave = useCallback(
    debounce((values) => {
      save(values);
    }, debounceInMs),
    []
  );

  useEffect(() => {
    debouncedSave(values);
  }, [debounceInMs, debouncedSave, save, values]);

  return null;
};

const AutoSave = ({ save, debounceInMs }: AutoSaveProps<any>) => {
  return (
    <FormSpy subscription={{ values: true }}>
      {({ values }) => <AutoSaveComponent save={save} debounceInMs={debounceInMs} values={values} />}
    </FormSpy>
  );
};

export default AutoSave;
