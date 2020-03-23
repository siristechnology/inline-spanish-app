import React from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { Article2 } from './article2.component'

interface State {
	article
}

export default class Article2Container extends React.Component<
	NavigationScreenProps,
	State
> {
	public render(): React.ReactNode {
		const {
			navigation: {
				state: {
					params: { article },
				},
			},
		} = this.props

		return <Article2 article={article} navigation={this.props.navigation} />
	}
}
