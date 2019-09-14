import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'
import gql from 'graphql-tag'

const cache = new InMemoryCache()
const link = new HttpLink({
	uri:
		'https://inline-spanish-service-qa.azurewebsites.net/api/inline-spanish-api?code=7QS3vqn/FryCmswWYRt1Ueqg1WwcvHTKmgJqiIxIWsHaTq4RKnrQSQ==',
	fetch,
})

const client = new ApolloClient({
	cache,
	link,
})

client
	.query({
		query: gql`
			query fetchArticles {
				fetchArticles {
					title
					url
				}
			}
		`,
	})
	.then(result => console.log(result))
	.catch(result => console.log(result))
