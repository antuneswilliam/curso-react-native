import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './pages/main';

const AppNavigator = createStackNavigator(
    {
        JSHunt: {
            screen: Main,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: "#da552f"
                },
                headerTintColor: "#FFF"
            },
        },
        
        //Details: DetailsScreen,

    },
    {
        initialRouteName: 'JSHunt',
    }
);

export default createAppContainer(AppNavigator);