import Joi from 'joi';

export default schema => values => {
  const { error } = Joi.validate(values, schema, { abortEarly: false });
  const { details } = error;
  if (details) {
    return details.reduce(
      (reduction, current) => ({
        ...reduction,
        [current.context.key]: current.message
      }),
      {}
    );
  }
  return {};
};
