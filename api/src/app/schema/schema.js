const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} = require('graphql');
const UserType = require('./types/user');
const User = require('../models/User');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve(){
        return User.find({}).sort({'date': -1}).limit(5);
      }
    },
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        lifes: { type: new GraphQLNonNull(GraphQLInt) },
        laps: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve(parent, args){
        const { name, lifes, laps } = args;
        const user = new User({ name, lifes, laps });

        return user.save();
      }
    },
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
