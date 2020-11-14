/**
 * @author: chv5
 */
import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

/**
 * Default function for the About screen
 */
export default function About() {
    return (
        <View style={globalStyles.container}>
            <Text>About Screen</Text>
        </View>
    );
};

