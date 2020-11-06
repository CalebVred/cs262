import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Home({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch('https://pacific-citadel-39324.herokuapp.com/playergames')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }, []);
  
    return (
        <View style={{ flex: 1, padding: 24 }}>
          {isLoading ? <ActivityIndicator/> : (
              <FlatList
                  data={data}
                  keyExtractor={({ id }, index) => id.toString()}
                  renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                          <Card>
                                <Text style={globalStyles.titleText}> {item.email}, {item.name}</Text>
                          </Card>
                      </TouchableOpacity>
                      
                  )}
              />
          )}
        </View>
    );
}
