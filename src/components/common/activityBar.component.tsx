import React from 'react'
import { View } from 'react-native'
import {
	ThemedComponentProps,
	ThemeType,
	withStyles,
} from 'react-native-ui-kitten/theme'

interface ComponentProps {
	children?
}

export type ActivityBarProps = ThemedComponentProps & ComponentProps

class ActivityBarComponent extends React.Component<ActivityBarProps> {
	public render() {
		const { style, themedStyle, children, ...restProps } = this.props

		return (
			<View style={[themedStyle.container, style]} {...restProps}>
				{children}
			</View>
		)
	}
}

export const ActivityBar = withStyles(
	ActivityBarComponent,
	(theme: ThemeType) => ({
		container: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
		},
	}),
)
