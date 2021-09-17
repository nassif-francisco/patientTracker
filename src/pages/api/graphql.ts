import { ApolloServer } from 'apollo-server-micro'
import {  ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import  {schema}  from '../../../backend/graphql/schema'
import { connectMongoDb } from '../../../backend/mongodb'

const apolloServer = new ApolloServer({ schema, plugins: [ApolloServerPluginLandingPageGraphQLPlayground()] })

let isStarted = false

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function(req, res) {
 
  await connectMongoDb()

  if (!isStarted) {
    await apolloServer.start()
    isStarted = true
  }
  
  await apolloServer.createHandler({ path: '/api/graphql' })(req, res)
}