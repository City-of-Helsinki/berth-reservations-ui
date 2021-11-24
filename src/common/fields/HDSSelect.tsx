import { Select, SelectProps } from 'hds-react';
import { useField, useForm } from 'react-final-form';

type Option = {
  label: string;
  value: string;
};

type Props = Omit<SelectProps<Option>, 'value' | 'onChange' | 'options' | 'defaultValue'> & {
  name: string;
  options: Option[];
  onChange: (value: string) => void;
};

const HDSSelect = ({ name, onChange, ...delegated }: Props) => {
  const {
    // Use custom onChange handler that accepts an Option object
    // instead of a change event.
    input: { onChange: _onChange, ...delegatedInputProps },
    meta: { touched, error },
  } = useField(name);
  const form = useForm();

  const handleChange = (option: Option) => {
    if (onChange) {
      onChange(option.value);
    } else {
      form.change(name, option.value);
    }
  };

  return (
    <Select<Option>
      {...delegatedInputProps}
      onChange={handleChange}
      error={touched && error}
      {...delegated}
      multiselect={false}
    />
  );
};

export default HDSSelect;
