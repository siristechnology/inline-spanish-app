import React from 'react'
import { NavigationScreenProps } from 'react-navigation'

import { ArticleList1 } from './articleList1.component'

export default class ArticleList1Container extends React.Component<
	NavigationScreenProps
> {
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
