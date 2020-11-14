/**
 * @author: chv5
 */
import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

import Card from '../shared/card';
/**
 * Default function for the Review Details screen
 * @param {var} route gives the route to the review
 * @param {var} navigation navigates to the review
 */
export default function ReviewDetails({ route, navigation }) {
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{ route.params.title }</Text>
                <Text>{ route.params.body }</Text>
                <Text>{ route.params.rating }</Text>
            </Card>
        </View>
    );
}
