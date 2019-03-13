import { StackNavigator } from "react-navigation";
import HomeScreen from '../containers/HomeScreen';
import ProfileScreen from '../containers/ProfileScreen';
const AppNavigator = StackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
},
    {
        headerMode: 'none',
        initialRouteName: 'Home'
    }
);

export default AppNavigator;