import React from 'react'
import { StyleProp, TextStyle } from 'react-native'
import {
	ThemedComponentProps,
	ThemeType,
	withStyles,
} from 'react-native-ui-kitten/theme'
import {
	ActivityBar,
	ActivityBarProps,
	LikeButton,
	ReactionBar,
} from '../../components/common'

interface ComponentProps {
	comments: number
	likes: number
	textStyle?: StyleProp<TextStyle>
}

export type ArticleActivityBarProps = ThemedComponentProps &
	ActivityBarProps &
	ComponentProps

class ArticleActivityBarComponent extends React.Component<
	ArticleActivityBarProps
> {
	public render(): React.ReactNode {
		const {
			themedStyle,
			textStyle,
			likes,
			children,
			...restProps
		} = this.props

		return (
			<ActivityBar {...restProps}>
				{children}
				<ReactionBar>
					<LikeButton textStyle={textStyle} activeOpacity={0.75}>
						{`${likes || 0}`}
					</LikeButton>
				</ReactionBar>
			</ActivityBar>
		)
	}
}

export const ArticleActivityBar = withStyles(
	ArticleActivityBarComponent,
	(theme: ThemeType) => ({}),
)
