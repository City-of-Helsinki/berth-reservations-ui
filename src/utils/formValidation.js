import Joi from 'joi';

export default schema => values => {
  const { error } = Joi.validate(values, schema, { abortEarly: false });

  if (error && error.details) {
    const { details } = error;
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
