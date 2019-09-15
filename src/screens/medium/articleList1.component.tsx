import React from 'react'
import {
	ThemedComponentProps,
	ThemeType,
	withStyles,
} from 'react-native-ui-kitten/theme'
import { List } from 'react-native-ui-kitten/ui'
import { ArticleList1Item } from './articleList1Item.component'

interface ComponentProps {
	articles
	onItemPress: (article) => void
	onItemLikePress: (article) => void
	onItemCommentPress: (article) => void
}

export type ArticleList1Props = ThemedComponentProps & ComponentProps

class ArticleList1Component extends React.Component<ArticleList1Props> {
	private onItemPress = article => {
		this.props.onItemPress(article)
	}

	private onItemLikePress = article => {
		this.props.onItemLikePress(article)
	}

	private onItemCommentPress = article => {
		this.props.onItemCommentPress(article)
	}

	private renderItem = info => {
		const { themedStyle } = this.props

		return (
			<ArticleList1Item
				style={themedStyle.item}
				article={info.item}
				onPress={this.onItemPress}
				onLikePress={this.onItemLikePress}
				onCommentPress={this.onItemCommentPress}
			/>
		)
	}

	public render() {
		const { themedStyle, articles } = this.props

		return (
			<List
				contentContainerStyle={themedStyle.container}
				data={articles}
				renderItem={this.renderItem}
			/>
		)
	}
}

export const ArticleList1 = withStyles(
	ArticleList1Component,
	(theme: ThemeType) => ({
		container: {
			paddingHorizontal: 16,
			paddingVertical: 8,
			backgroundColor: theme['background-basic-color-2'],
		},
		item: {
			marginVertical: 8,
			backgroundColor: theme['background-basic-color-1'],
		},
	}),
)
