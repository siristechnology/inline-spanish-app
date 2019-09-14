import React from 'react'
import { Text } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

import { ArticleList1 } from './articleList1.component'

export const FETCH_ARTICLES_QUERY = gql`
	query fetchArticles {
		fetchArticles {
			title
			url
			lead_image_url
			excerpt
			content
			source {
				name
				logoLink
			}
			author
			date_published
		}
	}
`

export default function CnnScreen() {
	const { loading, error, data } = useQuery(FETCH_ARTICLES_QUERY, {
		variables: {},
	})
	if (loading) return <Text>Loading...</Text>
	if (error) return <Text>Error!</Text>

	return <CnnArticleList articles={data.fetchArticles} />
}

class CnnArticleList extends React.Component<NavigationScreenProps> {
	private onItemPress = article => {}
	private onItemLikePress = article => {}
	private onItemCommentPress = article => {}

	public render() {
		return (
			<ArticleList1
				articles={this.props.articles}
				onItemPress={this.onItemPress}
				onItemLikePress={this.onItemLikePress}
				onItemCommentPress={this.onItemCommentPress}
			/>
		)
	}
}
