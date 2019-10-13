import { Alert } from 'react-native'
import RNRestart from 'react-native-restart'
import {
	setJSExceptionHandler,
	setNativeExceptionHandler,
} from 'react-native-exception-handler'

const ErrorHandler = (e, isFatal) => {
	if (isFatal) {
		Alert.alert(
			'Unexpected error occurred',
			`
        Error: Fatal ${e.name} ${e.message}

        We will need to restart the app.
        `,
			[
				{
					text: 'Restart',
					onPress: () => {
						RNRestart.Restart()
					},
				},
			],
		)
	} else {
		console.log(e) // So that we can see it in the ADB logs in case of Android if needed
	}
}

setJSExceptionHandler(ErrorHandler)

setNativeExceptionHandler(errorString => {
	//You can do something like call an api to report to dev team here
	// When you call setNativeExceptionHandler, react-native-exception-handler sets a
	// Native Exception Handler popup which supports restart on error in case of android.
	// In case of iOS, it is not possible to restart the app programmatically, so we just show an error popup and close the app.
	// To customize the popup screen take a look at CUSTOMIZATION section.
})
