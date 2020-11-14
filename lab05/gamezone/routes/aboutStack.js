import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Header from '../shared/header';
import About from '../screens/about';

const Stack = createStackNavigator();
/**
 * Default export function to navigation to About screen
 * @param {navigation} navigation navigates to about screen
 */
export default function AboutStack( {navigation} ) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="About GameZone"
                component={About}
                options={{
                    headerLeft: () =>  <Header navigation={navigation} title='About GameZone'/>
                }}
            />
        </Stack.Navigator>
    );
};