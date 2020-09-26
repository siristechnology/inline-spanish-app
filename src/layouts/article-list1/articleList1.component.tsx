import React from 'react'
import {
	ThemedComponentProps,
	ThemeType,
	withStyles,
} from 'react-native-ui-kitten/theme'
import { FlatList } from 'react-navigation'
import { ArticleList1Item } from './articleList1Item.component'

interface ComponentProps {
	articles
	onItemPress: (article) => void
}

export type ArticleList1Props = ThemedComponentProps & ComponentProps

class ArticleList1Component extends React.Component<ArticleList1Props> {
	private onItemPress = article => {
		this.props.onItemPress(article)
	}

	private renderItem = info => {
		const { themedStyle } = this.props

		return (
			<ArticleList1Item
				style={themedStyle.item}
				article={info.item}
				onPress={this.onItemPress}
			/>
		)
	}

	public render() {
		const { themedStyle, articles } = this.props

		return (
			<FlatList
				contentContainerStyle={themedStyle.container}
				data={articles}
				renderItem={this.renderItem}
				keyExtractor={item => item._id}
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
