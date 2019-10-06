import gql from 'graphql-tag'
import GraphqlClient from '../src/graphql/graphql-client'

describe('GraphqlClient', () => {
	it('fetchArticles should fetch articles', async () => {
		const { data } = await GraphqlClient.query({
			query: gql`
				query fetchArticles {
					fetchArticles {
						title
						url
					}
				}
			`,
		})

		console.log('Printing data', data)
	})
})
