import React from 'react'
import { ImageBackground, View } from 'react-native'
import moment from 'moment'
import {
	ThemedComponentProps,
	ThemeType,
	withStyles,
} from 'react-native-ui-kitten/theme'
import { Avatar, Text } from 'react-native-ui-kitten/ui'
import { ArticleActivityBar } from '../../components/articles'
import { ContainerView, textStyle } from '../../components/common'
import { ClockIconOutline } from '../../assets/icons'

interface ComponentProps {
	article
	onCommentPress: () => void
	onLikePress: () => void
}

export type Article2Props = ThemedComponentProps & ComponentProps

class Article2Component extends React.Component<Article2Props> {
	private onCommentButtonPress = () => {
		this.props.onCommentPress()
	}

	private onLikeButtonPress = () => {
		this.props.onLikePress()
	}

	public render(): React.ReactNode {
		const { themedStyle, article } = this.props

		return (
			<ContainerView style={themedStyle.container}>
				<ImageBackground
					style={themedStyle.image}
					source={{ uri: article.lead_image_url }}>
					<Avatar
						style={themedStyle.authorPhoto}
						size="large"
						source={{ uri: article.source.logoLink }}
					/>
				</ImageBackground>

				<Text style={themedStyle.titleLabel} category="h5">
					{article.title}
				</Text>
				{this.createContentView(
					article.original_content,
					article.translated_content,
				)}
				<ArticleActivityBar
					style={themedStyle.detailsContainer}
					comments={article.comments ? article.comments.length : 0}
					likes={article.likes}
					onCommentPress={this.onCommentButtonPress}
					onLikePress={this.onLikeButtonPress}>
					<View style={themedStyle.dateContainer}>
						{ClockIconOutline(themedStyle.dateIcon)}
						<Text
							style={themedStyle.dateLabel}
							appearance="hint"
							category="p2">
							{this.getRelativeTime(article.date_published)}
						</Text>
					</View>
				</ArticleActivityBar>
			</ContainerView>
		)
	}

	public getRelativeTime(date) {
		return moment(Number(date))
			.startOf('hour')
			.fromNow()
	}

	public createContentView(original_content, translated_content) {
		const { themedStyle } = this.props

		return (
			<View style={themedStyle.contentLabel}>
				{original_content.map((item, index) => {
					return (
						<View key={index}>
							<Text
								category="s1"
								style={themedStyle.translatedLabel}>
								{translated_content[index]}
							</Text>
							<Text
								category="s1"
								style={themedStyle.englishLabel}>
								{item}
							</Text>
						</View>
					)
				})}
			</View>
		)
	}
}

export const Article2 = withStyles(Article2Component, (theme: ThemeType) => ({
	container: {
		flex: 1,
		backgroundColor: theme['background-basic-color-1'],
	},
	detailsContainer: {
		paddingHorizontal: 24,
		paddingVertical: 24,
		borderTopWidth: 1,
		borderTopColor: theme['border-basic-color-2'],
	},
	dateContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	image: {
		minHeight: 175,
	},
	authorPhoto: {
		position: 'absolute',
		left: 24,
		bottom: -32,
		margin: 0,
		borderWidth: 2,
		borderColor: theme['border-basic-color-2'],
	},
	titleLabel: {
		marginHorizontal: 24,
		marginTop: 48,
		...textStyle.headline,
	},
	translatedLabel: {
		flex: 1,
	},
	englishLabel: {
		flex: 1,
		color: '#dadfe3',
	},
	contentLabel: {
		flex: 1,
		marginHorizontal: 24,
		marginVertical: 24,
		...textStyle.paragraph,
	},
	dateLabel: {
		marginLeft: 8,
		...textStyle.paragraph,
	},
	dateIcon: {
		width: 24,
		height: 24,
		tintColor: theme['text-hint-color'],
	},
}))
