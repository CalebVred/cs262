/**
 * @author: chv5
 */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

/**
 * Default function of the home screen that presents a list of reviews and access to information about those reviews.
 * @param {navigation} navigation 
 * @returns Flatlist of cards containing links to the game reviews
 */
export default function Home({ navigation }) {
    const [reviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);

    return (
        <View style={globalStyles.container}>
            <FlatList data={reviews} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                    <Card>
                        <Text style={globalStyles.titleText}>{ item.title }</Text>
                    </Card>
                </TouchableOpacity>
            )} />
        </View>
    );
}
