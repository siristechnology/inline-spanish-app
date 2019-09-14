import React from 'react'
import { NavigationScreenProps } from 'react-navigation'
// import { Article } from '@src/core/model'
// import { articles } from '@src/core/data/article'
import { Article2 } from './article2.component'

interface State {
	article
}

const sampleArticle = {
	// image: imageArticle1Bg,
	title: 'How To Eat Healthy',
	description:
		'The easiest way to make sure your inter meal nibbling stays on track is to have...',
	content:
		"There's a lot of advice out there on how to eat healthy, and if we're being honest, it can sometimes feel like too much to think about. Especially when you're hungry. Remember when you were a kid and eating was as simple as open, chew, enjoy? Yes, those were simpler times. Now, knowing how to eat healthy doesn't seem quite as straightforward. Between the diet fads, gourmet trends, and a rotating roster of superfoods, eating well has gotten, well, complicated.",
	// author: profile2,
	date: 'Today 12:35 pm',
	tips: 10,
	// comments: comments,
	likes: 320,
}

export default class Article2Container extends React.Component<
	NavigationScreenProps,
	State
> {
	// public state: State = {
	// 	article: articles[0],
	// }

	private onCommentPress = () => {}

	private onLikePress = () => {}

	public render(): React.ReactNode {
		console.log('Printing this.props inside detail', this.props)

		const {
			navigation: {
				state: {
					params: { article },
				},
			},
		} = this.props

		// const { article } = this.props

		console.log('Printing article', article)

		return (
			<Article2
				article={article}
				onCommentPress={this.onCommentPress}
				onLikePress={this.onLikePress}
			/>
		)
	}
}
