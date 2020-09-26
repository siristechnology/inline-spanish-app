import React from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { Article2 } from './article-detail.component'
import AntDesign from 'react-native-vector-icons/AntDesign'

interface State {
	article
}

export default class Article2Container extends React.Component<
	NavigationScreenProps,
	State
> {
	private navigateBack = () => {
		this.props.navigation.goBack()
	}

	public render(): React.ReactNode {
		const BackIcon = (
			<AntDesign
				name="back"
				size={24}
				color="grey"
				onPress={this.navigateBack}
				style={{
					padding: 8,
				}}
			/>
		)

		const {
			navigation: {
				state: {
					params: { article },
				},
			},
		} = this.props

		const articleContainer = (
			<Article2 article={article} navigation={this.props.navigation} />
		)

		return articleContainer
	}
}
