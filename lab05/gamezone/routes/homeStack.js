/**
 * @author: chv5
 */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Header from '../shared/header';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const Stack = createStackNavigator();
/**
 * Default export function to nagivation to home screen
 * @param {navigation} navigation navigates to home screen 
 */
export default function HomeStack( {navigation} ) {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle:{backgroundColor:'#ddd'}
        }}>
            <Stack.Screen
                name="GameZone"
                component={Home}
                options={{
                    headerLeft: () =>  <Header navigation={navigation} title='GameZone'/>
                }}
            />
            <Stack.Screen
                name="ReviewDetails"
                component={ReviewDetails}
                options={{title: 'Review Details'}}
            />
        </Stack.Navigator>
    );
};
