import { ApolloServer } from "apollo-server"
import mongoose from "mongoose"

import typeDefs from './graphql/typeDefs.js'
import resolvers from './graphql/resolvers.js'

const mongoURL = "mongodb://127.0.0.1:27017/graphql"


const server = new ApolloServer({
    typeDefs,
    resolvers
})


mongoose.connect(mongoURL)
    .then(() => {
        server.listen({ port: 5000 }, (() => console.log(`Apollo server started at ${5000}`)))
    })
    .catch((error) => {
        console.log("error in server", error)
    })