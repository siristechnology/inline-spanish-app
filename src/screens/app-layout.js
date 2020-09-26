import React from 'react'
import { StyleSheet, View } from 'react-native'
import { OfflineNotice } from '../components/offline-notification'

class AppLayout extends React.PureComponent {
	render() {
		const { children, headerComponent } = this.props
		return (
			<View>
				<OfflineNotice />
				<View style={style.headerStyle}>{headerComponent}</View>
				{children}
			</View>
		)
	}
}

const style = StyleSheet.create({
	headerStyle: {
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingBottom: 10,
	},
	screenStyle: {
		backgroundColor: '#000000',
		paddingTop: 500,
	},
})

export default AppLayout
