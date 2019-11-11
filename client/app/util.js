import { StackActions, NavigationActions } from 'react-navigation';

function switchScreen(name, navigation) {
	navigation.dispatch(StackActions.reset({
		index: 0,
		actions: [
			NavigationActions.navigate({ routeName: name }),
		],
	}));
}

function pushScreen(name, navigation) {
	navigation.navigate(name);
}

export { switchScreen, pushScreen };
