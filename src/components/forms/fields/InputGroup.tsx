import React from 'react';
import { Field, FieldRenderProps } from 'react-final-form';
import { WithTranslation } from 'react-i18next';
import {
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  InputGroup as BSInputGroup,
  InputGroupAddon,
  InputProps,
} from 'reactstrap';

import validator, { mustBePresent } from '../../../utils/formValidation';
import ScreenReaderLabel from './ScreenReaderLabel';

import Label from './Label';

type Props = WithTranslation & FieldRenderProps<string, HTMLElement>;

const InputGroup = (
  type: InputProps['type'],
  parser?: (locale: string) => (value: string, name: string) => any,
  formatter?: (locale: string) => (value: string, name: string) => any
) => ({
  t,
  i18n: { language },
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
  tReady, // Excluded from 'rest'
  ...rest
}: Props) => {
  return (
    <Field
      name={name}
      type={type}
      parse={parse ? parse : parser && parser(language)}
      format={format ? format : formatter && formatter(language)}
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
          <BSInputGroup>
            {prepend && <InputGroupAddon addonType="prepend">{prepend}</InputGroupAddon>}
            <Input
              id={id}
              aria-labelledby={`${id}-description`}
              required={required}
              invalid={!!(meta.touched && meta.error)}
              placeholder={placeholder ? t(placeholder) : ''}
              {...input}
              {...rest}
              type={type}
            />
            {append && <InputGroupAddon addonType="append">{append}</InputGroupAddon>}{' '}
            {meta.error && (
              <FormFeedback>
                <span>{t(meta.error)}</span>
              </FormFeedback>
            )}
            {text && (
              <FormText>
                <span>{t(text)}</span>
              </FormText>
            )}
          </BSInputGroup>
        </FormGroup>
      )}
    </Field>
  );
};

export default InputGroup;
