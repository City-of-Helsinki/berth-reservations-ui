import React from 'react';
import { Field, FieldRenderProps } from 'react-final-form';
import { FormattedMessage, InjectedIntlProps } from 'react-intl';
import {
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  InputGroup,
  InputGroupAddon,
  InputProps,
} from 'reactstrap';

import validator, { mustBePresent } from '../../../utils/formValidation';
import ScreenReaderLabel from './ScreenReaderLabel';

import Label from './Label';

type Props = FieldRenderProps<string, HTMLElement> & InjectedIntlProps;

const TextInput = (
  type: InputProps['type'],
  parser?: (locale: string) => (value: string, name: string) => any,
  formatter?: (locale: string) => (value: string, name: string) => any
) => ({
  id,
  name,
  label,
  required,
  prepend,
  append,
  text,
  validate,
  placeholder,
  parse,
  format,
  intl: { formatMessage, locale },
  ...rest
}: Props) => (
  <Field
    name={name}
    type={type}
    parse={parse ? parse : parser && parser(locale)}
    format={format ? format : formatter && formatter(locale)}
    required={required}
    validate={validator(required ? mustBePresent : null, validate || null)}
  >
    {({ input, meta }) => (
      <FormGroup>
        {label && <Label htmlFor={id} required={required} text={label} />}
        <ScreenReaderLabel
          id={`${id}-description`}
          prepend={prepend}
          append={append}
          textKey={label}
        />
        <InputGroup>
          {prepend && <InputGroupAddon addonType="prepend">{prepend}</InputGroupAddon>}
          <Input
            id={id}
            aria-labelledby={`${id}-description`}
            required={required}
            invalid={!!(meta.touched && meta.error)}
            placeholder={placeholder ? formatMessage({ id: placeholder }) : ''}
            {...input}
            {...rest}
            type={type}
          />
          {append && <InputGroupAddon addonType="append">{append}</InputGroupAddon>}{' '}
          {meta.error && (
            <FormFeedback>
              <FormattedMessage id={meta.error} />
            </FormFeedback>
          )}
          {text && (
            <FormText>
              <FormattedMessage id={text} />
            </FormText>
          )}
        </InputGroup>
      </FormGroup>
    )}
  </Field>
);

export default TextInput;
