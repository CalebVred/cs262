import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
//import {GoogleBookSearch} from 'react-native-google-books';

export default function App (){
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=E.%20Michael%20Jones&key=AIzaSyDRdusKHpQ9X9t41xI8eIh8pvC8nUGaLKI')
      .then((response) => response.json())
      .then((json) => setData(json.items))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))      
    });

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.volumeInfo.title}, {item.volumeInfo.authors}</Text>
          )}
        />
      )}
    </View>
  );
}