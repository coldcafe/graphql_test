const { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
exports.schema = buildSchema(`
  type Query {
    ip: String
  }
`);

// The root provides a resolver function for each API endpoint
exports.root = {
  ip: function(args, request) {
    console.log(request.ip)
    return request.ip;
  }
};