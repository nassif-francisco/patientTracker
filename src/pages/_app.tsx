//import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/list-groups.css'
import { ApolloProvider } from '@apollo/client'
import { client } from '../utils/graphql/client'
import Layout from '../components/layout'

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}