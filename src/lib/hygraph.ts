import { GraphQLClient } from 'graphql-request'

const graphQLClient = new GraphQLClient(import.meta.env.ASTRO_HYGRAPH_ENDPOINT)

export default graphQLClient
