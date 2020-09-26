import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { Text } from 'react-native-ui-kitten/ui'
import ArticleList1Container from '../../layouts/article-list1/articleList1.container'
import { CircularSpinner } from '../../components/common'

export const FETCH_ARTICLES_QUERY = gql`
	query fetchArticles {
		fetchArticles {
			_id
			title
			url
			lead_image_url
			excerpt
			original_content
			translated_content
			source {
				name
				logoLink
				category
			}
			author
			date_published
			date_modified
			likes
		}
	}
`

export default function NewsScreen(props) {
	const { loading, error, data } = useQuery(FETCH_ARTICLES_QUERY, {
		variables: {},
	})
	if (loading) {
		return <CircularSpinner />
	} else if (error) {
		return <Text>Error!</Text>
	}

	const { navigation } = props

	const articles = data.fetchArticles.filter(
		article => article.source && article.source.category === 'news',
	)

	return <ArticleList1Container articles={articles} navigation={navigation} />
}
