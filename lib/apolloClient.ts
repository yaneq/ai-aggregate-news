import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

export const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT,
      headers: {
        'x-hasura-admin-secret':
          'zsOtTmF75MVua1VF4sFgjrEQ932Nhh1lHVIqqImeUfWJU7EPu6K5pVtB1Ta1wCfY',
      },
    }),
    cache: new InMemoryCache(),
  })
}
