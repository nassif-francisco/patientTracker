import { useMemo } from 'react'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { HttpLink } from '@apollo/client/link/http'

export const client =  new ApolloClient({
  ssrMode: false,
  link:new HttpLink({
    uri: '/api/graphql',
  }),
  cache: new InMemoryCache(),
})