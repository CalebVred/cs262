import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Kerbal Space Program: Fake Moon Landing Expansion', rating: 5, body:'lorem ipsum', key: '1'},
        { title: 'Badman: Arkham Autonomous Zone', rating: 2, body: 'lorem ipsum', key: '2'},
        { title: 'Charted 5: The Found City', rating: 4, body: 'lorem ipsum', key: '3'}
    ]);

    return (
        <View style={globalStyles.container}>
            <FlatList data={reviews} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                    <Text style={globalStyles.titleText}>{ item.title }</Text>
                </TouchableOpacity>
            )} />
        </View>
    );
}
