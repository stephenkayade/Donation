import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import SingleDonationItem from '../screens/SingleDonationItem/SingleDonationItem';
import { Routes } from './Routes';
import Login from '../screens/login/Login';
import Register from '../screens/Register/Register';

const Stack = createStackNavigator();

export const NonAuthenticated = () => {

    return (
        <Stack.Navigator
        initialRouteName={Routes.Login}
            screenOptions={{
                header: () => null,
                headerShown: false,
            }}
        >
            <Stack.Screen name={Routes.Login} component={Login} />
            <Stack.Screen name={Routes.Register} component={Register} />
        </Stack.Navigator>
    );

};

export const Authenticated = () => {
    
    return (
        <Stack.Navigator
        initialRouteName={Routes.Home}
            screenOptions={{
                header: () => null,
                headerShown: false,
            }}
        >
            <Stack.Screen name={Routes.Home} component={Home} />
            <Stack.Screen name={Routes.SingleDonationItem} component={SingleDonationItem} />
        
        </Stack.Navigator>
    );
}

export default NonAuthenticated;
