import { gql } from '@apollo/client'

export const typeDefs = gql`
  type User {
    id: String!
    name: String!
    lastname: String!
  }

  type Query {
    getUsers: [User]
    getUserById(id:String!):User
  }
  
  type Mutation {
    modifyUserById(id:String!, name:String!, lastname:String!):User
    createNewUser:User
    deleteUserById(id:String!):User
  }

  `
