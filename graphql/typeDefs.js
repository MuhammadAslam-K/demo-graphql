import { gql } from 'apollo-server'

const typeDefs = gql`

    type User{
        name:String,
        age:String,
        gender:String,
        count:Int
    }

    input UserInput{
        name:String,
        age:String,
        gender:String
    }

    type Query{
        getUser(ID:ID!): User!
        getAllUsers(amount:Int):[User]
    }

    type Mutation{
        createUser(userinput:UserInput): User!
        updateUser(ID:ID!, userinput:UserInput!) : User!
    }

`
export default typeDefs