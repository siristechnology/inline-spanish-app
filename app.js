import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { mapping, light as lightTheme } from '@eva-design/eva'
import { ApplicationProvider } from 'react-native-ui-kitten'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import MediumScreen from './src/screens/medium/medium-screen'
import CnnScreen from './src/screens/cnn/cnn-screen'
import ArticleDetail from './src/screens/article-detail/article2.container'

const MediumStack = createStackNavigator(
	{
		Medium: MediumScreen,
		ArticleDetail: ArticleDetail,
	},
	{
		headerMode: 'none',
	},
)

const BottomTabNavigator = createBottomTabNavigator(
	{
		Cnn: CnnScreen,
		Medium: MediumStack,
	},
	{
		initialRouteName: 'Medium',
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state
				let iconName
				if (routeName === 'Medium') {
					iconName = 'bookmark-o'
				} else if (routeName === 'Cnn') {
					iconName = 'newspaper-o'
				}

				return (
					<FontAwesome name={iconName} size={25} color={tintColor} />
				)
			},
		}),
		tabBarOptions: {
			activeTintColor: 'tomato',
			inactiveTintColor: 'gray',
		},
	},
)

const App = createAppContainer(BottomTabNavigator)

export default () => (
	<ApplicationProvider mapping={mapping} theme={lightTheme}>
		<App />
	</ApplicationProvider>
)
