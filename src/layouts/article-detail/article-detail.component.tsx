import React from 'react'
import { ImageBackground, View } from 'react-native'
import moment from 'moment'
import {
	ThemedComponentProps,
	ThemeType,
	withStyles,
} from 'react-native-ui-kitten/theme'
import { Avatar, Text, Button } from 'react-native-ui-kitten/ui'
import { ContainerView, textStyle } from '../../components/common'
import { ClockIconOutline } from '../../assets/icons'

interface ComponentProps {
	article
	navigate
}

export type Article2Props = ThemedComponentProps & ComponentProps

class Article2Component extends React.Component<Article2Props> {
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

				<View style={themedStyle.detailsContainer}>
					<Text style={themedStyle.titleLabel} category="h5">
						{article.title}
					</Text>

					<View style={themedStyle.dateContainer}>
						{ClockIconOutline(themedStyle.dateIcon)}
						<Text
							style={themedStyle.dateLabel}
							appearance="hint"
							category="p2">
							{this.getRelativeTime(
								article.date_published || article.date_modified,
							)}
						</Text>
					</View>

					{this.createContentView(
						article.original_content,
						article.translated_content,
					)}

					<View style={themedStyle.readMoreBtnWrapper}>
						<Button
							onPress={this.handleLinkClick}
							style={themedStyle.readMoreBtn}>
							{'Read Original Source'}
						</Button>
					</View>
				</View>
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

	private handleLinkClick = () => {
		const link = this.props.article.url
		this.props.navigation.navigate('ArticleWeb', { link })
	}
}

export const Article2 = withStyles(Article2Component, (theme: ThemeType) => ({
	container: {
		flex: 1,
		backgroundColor: theme['background-basic-color-1'],
	},
	detailsContainer: {
		paddingHorizontal: 24,
		paddingVertical: 4,
	},
	image: {
		minHeight: 175,
	},
	authorPhoto: {
		position: 'absolute',
		left: 24,
		bottom: -24,
		margin: 0,
		borderWidth: 2,
		borderColor: theme['border-basic-color-2'],
	},
	titleLabel: {
		marginTop: 32,
		...textStyle.headline,
	},
	dateContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 4,
	},
	dateIcon: {
		width: 16,
		height: 16,
		tintColor: theme['text-hint-color'],
	},
	dateLabel: {
		marginLeft: 4,
		...textStyle.paragraph,
	},
	translatedLabel: {
		flex: 1,
	},
	englishLabel: {
		flex: 1,
		color: theme['text-hint-color'],
	},
	contentLabel: {
		flex: 1,
		marginVertical: 24,
		...textStyle.paragraph,
	},
	readMoreBtnWrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 8,
	},
	readMoreBtn: {
		width: 200,
	},
}))
