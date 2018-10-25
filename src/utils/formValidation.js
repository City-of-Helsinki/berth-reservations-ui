import Joi from 'joi';
import { set } from 'lodash';

export default schema => values => {
  const thingis = Joi.validate(values, schema, { abortEarly: false, allowUnknown: true });
  console.log(thingis);
  const { error } = thingis;
  if (error && error.details) {
    const { details } = error;
    const issues = details.reduce((reduction, current) => {
      const { path, key, message } = current;
      return set(reduction, path || key, message);
    }, {});
    console.log(('Found issues:', issues, values));
    return issues;
  }
  console.log('Valid:', values);
  return {};
};
