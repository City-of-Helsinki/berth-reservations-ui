module.exports = {
  type: 'array',
  minItems: 5,
  maxItems: 15,
  items: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        faker: 'random.uuid'
      },
      name: {
        type: 'string',
        faker: 'name.findName'
      },
      email: {
        type: 'string',
        format: 'email',
        faker: 'internet.email'
      }
    },
    required: ['id', 'name', 'email']
  }
};
