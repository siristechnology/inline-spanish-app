import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { OfflineNotice } from '../components/offline-notification'
import Weather from '../components/weather.component.js'
import moment from 'moment'

class AppLayout extends React.PureComponent {
	render() {
		const { children } = this.props
		return (
			<View>
				<OfflineNotice />
				<View style={style.headerStyle}>
					<Text style={style.dateStyle}>
						{moment().format('MMMM Do, YYYY')}
					</Text>
					<Weather />
				</View>
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
	dateStyle: {
		fontWeight: 'bold',
		fontSize: 22,
		paddingTop: 5,
	},
	screenStyle: {
		backgroundColor: '#000000',
		paddingTop: 500,
	},
})

export default AppLayout
