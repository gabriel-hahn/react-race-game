const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    date: { type: GraphQLString },
    lifes: { type: GraphQLInt },
    laps: { type: GraphQLInt },
  })
});

module.exports = UserType;
