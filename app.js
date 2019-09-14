import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { mapping, light as lightTheme } from '@eva-design/eva'
import { ApplicationProvider } from 'react-native-ui-kitten'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import IconWithBadge from './src/components/IconWithBadge'
import MediumScreen from './src/screens/medium/medium-screen'
import CnnScreen from './src/screens/cnn/cnn-screen'
import ArticleDetail from './src/screens/article-detail/article2.container'

const CnnStack = createStackNavigator(
	{
		Cnn: CnnScreen,
		ArticleDetail: ArticleDetail,
	},
	{
		headerMode: 'none',
	},
)

const BottomTabNavigator = createBottomTabNavigator(
	{
		Medium: MediumScreen,
		Cnn: CnnStack,
	},
	{
		initialRouteName: 'Cnn',
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state
				let IconComponent = FontAwesome
				let iconName
				if (routeName === 'Medium') {
					iconName = 'ios-bookmarks'
					IconComponent = HomeIconWithBadge
				} else if (routeName === 'Cnn') {
					iconName = 'newspaper-o'
				}

				return (
					<IconComponent
						name={iconName}
						size={25}
						color={tintColor}
					/>
				)
			},
		}),
		tabBarOptions: {
			activeTintColor: 'tomato',
			inactiveTintColor: 'gray',
		},
	},
)

const HomeIconWithBadge = props => {
	// You should pass down the badgeCount in some other ways like react context api, redux, mobx or event emitters.
	return <IconWithBadge {...props} badgeCount={3} />
}

const App = createAppContainer(BottomTabNavigator)

export default () => (
	<ApplicationProvider mapping={mapping} theme={lightTheme}>
		<App />
	</ApplicationProvider>
)
