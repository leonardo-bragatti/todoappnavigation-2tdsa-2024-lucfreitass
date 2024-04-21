import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Task } from './Screens/ToDo';

import Details from './Screens/Details';
import ToDo from "./Screens/ToDo";

export type RootStackParamList = {
    ToDo: undefined;
    Details: { task: Task };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="ToDo" component={ToDo}/>
                <Stack.Screen name="Details" component={Details}/>
            </Stack.Navigator>
        </NavigationContainer>
     );
};

export default App; 