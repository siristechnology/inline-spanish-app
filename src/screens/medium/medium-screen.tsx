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
			original_content
			translated_content
			source {
				name
				logoLink
			}
			author
			date_published
			likes
		}
	}
`

class CnnArticleList extends React.Component<NavigationScreenProps> {
	private onItemPress = article => {
		const { navigation } = this.props
		navigation.navigate('ArticleDetail', { article })
	}

	public render() {
		return (
			<ArticleList1
				articles={this.props.articles}
				onItemPress={this.onItemPress}
			/>
		)
	}
}

export default function CnnScreen(props) {
	const { loading, error, data } = useQuery(FETCH_ARTICLES_QUERY, {
		variables: {},
	})
	if (loading) return <Text>Loading...</Text>
	if (error) return <Text>Error!</Text>

	const { navigation } = props

	return (
		<CnnArticleList articles={data.fetchArticles} navigation={navigation} />
	)
}
