import gql from 'graphql-tag'
import GraphqlClient from '../src/graphql/graphql-client'

GraphqlClient.query({
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
