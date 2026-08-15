import { GraphQLClient } from 'graphql-request'
const endpoint = import.meta.env.ASTRO_HYGRAPH_ENDPOINT
if (!endpoint) throw new Error('ASTRO_HYGRAPH_ENDPOINT não está configurada.')
const graphQLClient = new GraphQLClient(endpoint)
export default graphQLClient
