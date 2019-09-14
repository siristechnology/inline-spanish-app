import React from 'react'
import { AppRegistry, YellowBox } from 'react-native'
import App from './app'
import { name as appName } from './app.json'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'

YellowBox.ignoreWarnings([
	'Warning: componentWillMount is deprecated',
	'Warning: componentWillReceiveProps is deprecated',
	'Module RCTImageLoader requires',
])

const cache = new InMemoryCache()
const link = new HttpLink({
	uri:
		'https://inline-spanish-service-qa.azurewebsites.net/api/inline-spanish-api?code=7QS3vqn/FryCmswWYRt1Ueqg1WwcvHTKmgJqiIxIWsHaTq4RKnrQSQ==',
	fetch,
})

const client = new ApolloClient({
	cache,
	link,
})

const ApolloApp = () => (
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
)

AppRegistry.registerComponent(appName, () => ApolloApp)
