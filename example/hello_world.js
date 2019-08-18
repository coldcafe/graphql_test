const { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
exports.schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
exports.root = {
  hello: () => {
    return 'Hello world!';
  },
};