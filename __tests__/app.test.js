import 'react-native'
import React from 'react'
import App from '../app.js'
import renderer from 'react-test-renderer'

jest.mock('NativeModules', () => ({
	UIManager: {
		RCTView: () => ({
			directEventTypes: {},
		}),
	},
	KeyboardObserver: {},
	RNGestureHandlerModule: {
		attachGestureHandler: jest.fn(),
		createGestureHandler: jest.fn(),
		dropGestureHandler: jest.fn(),
		updateGestureHandler: jest.fn(),
		State: {},
		Directions: {},
	},
	PlatformConstants: {
		forceTouchAvailable: false,
	},
	StatusBarManager: {
		HEIGHT: 42,
		setStyle: jest.fn(),
		setHidden: jest.fn(),
		setNetworkActivityIndicatorVisible: jest.fn(),
	},
	ReanimatedModule: {
		configureProps: jest.fn(),
		createNode: jest.fn(),
		connectNodes: jest.fn(),
	},
	AppCenterReactNativeAnalytics: {
		trackEvent: jest.fn(),
	},
}))

it('renders correctly', () => {
	renderer.create(<App />)
})
