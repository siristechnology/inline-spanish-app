import React from 'react'
import { NavigationScreenProps } from 'react-navigation'
// import { Article } from '@src/core/model'
// import { articles } from '@src/core/data/article'
import { ArticleList1 } from './articleList1.component'

interface State {
	// articles: Article[]
}

export const articles = [
	{
		image:
			'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
		title: 'How To Eat Healthy',
		description:
			'The easiest way to make sure your inter meal nibbling stays on track is to have...',
		content:
			"There's a lot of advice out there on how to eat healthy, and if we're being honest, it can sometimes feel like too much to think about. Especially when you're hungry. Remember when you were a kid and eating was as simple as open, chew, enjoy? Yes, those were simpler times. Now, knowing how to eat healthy doesn't seem quite as straightforward. Between the diet fads, gourmet trends, and a rotating roster of superfoods, eating well has gotten, well, complicated.",
		author: {
			firstName: 'suraj',
			lastName: 'shrestha',
		},
		date: 'Today 12:35 pm',
		tips: 10,
		likes: 320,
	},
]

export default class CnnScreen extends React.Component<
	NavigationScreenProps,
	State
> {
	public state: State = {
		articles: articles,
	}

	private onItemPress = article => {}
	private onItemLikePress = article => {}
	private onItemCommentPress = article => {}

	public render() {
		return (
			<ArticleList1
				articles={articles}
				onItemPress={this.onItemPress}
				onItemLikePress={this.onItemLikePress}
				onItemCommentPress={this.onItemCommentPress}
			/>
		)
	}
}
