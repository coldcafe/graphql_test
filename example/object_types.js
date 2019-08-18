const { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
exports.schema = buildSchema(`
  type RandomDie {
    numSides: Int!
    rollOnce: Int!
    roll(numRolls: Int!): [Int]
  }

  type Query {
    getDie(numSides: Int): RandomDie
  }
`);

// The root provides a resolver function for each API endpoint
exports.root = {
  getDie: function({ numSides }) {
    return new RandomDie(numSides || 6);
  }
};

class RandomDie {

  constructor(numSides) {
    this.numSides = numSides;
  }

  rollOnce() {
    return 1 + Math.floor(Math.random() * this.numSides);
  }

  roll({ numRolls }) {
    var output = [];
    for (var i = 0; i < numRolls; i++) {
      output.push(this.rollOnce());
    }
    return output;
  }

}