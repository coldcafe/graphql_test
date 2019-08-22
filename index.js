const express = require('express');
const graphqlHTTP = require('express-graphql');


const { schema, root } = require('./example/' + process.argv[2])

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }),
);

app.listen(5000);

console.log('Running a GraphQL API server at http://localhost:5000/graphql');