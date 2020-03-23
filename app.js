import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { mapping, light as lightTheme } from '@eva-design/eva'
import { ApplicationProvider } from 'react-native-ui-kitten'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import DevScreen from './src/screens/dev/dev-screen'
import NewsScreen from './src/screens/news/news-screen'
import ArticleDetail from './src/layouts/article-detail/article2.container'
import './src/error/ErrorHandler'
import { ArticleWebviewComponent } from './src/components/common'

const NewsStack = createStackNavigator(
	{
		News: NewsScreen,
		ArticleDetail: ArticleDetail,
		ArticleWeb: ArticleWebviewComponent,
	},
	{
		headerMode: 'none',
	},
)

const DevStack = createStackNavigator(
	{
		Dev: DevScreen,
		ArticleDetail: ArticleDetail,
	},
	{
		headerMode: 'none',
	},
)

const BottomTabNavigator = createBottomTabNavigator(
	{
		News: NewsStack,
		Dev: DevStack,
	},
	{
		initialRouteName: 'News',
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state
				let iconName
				if (routeName === 'Dev') {
					iconName = 'code'
				} else if (routeName === 'News') {
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
			showLabel: false,
		},
	},
)

const App = createAppContainer(BottomTabNavigator)

export default () => (
	<ApplicationProvider mapping={mapping} theme={lightTheme}>
		<App />
	</ApplicationProvider>
)
