import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

export default function App() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const images = [
        require('../assets/banner/1.jpg'),
        require('../assets/banner/2.jpg'),
        require('../assets/banner/3.jpg'),
        require('../assets/banner/4.jpg'),
        require('../assets/banner/5.jpg'),
        require('../assets/banner/6.jpg'),
        require('../assets/banner/7.jpg')
    ];

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json')
        // fetch('https://api.cekpoint.glumory.id/api/posts')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error),)
            .finally(() => setLoading(false));
    }, []);

    return (

        <View style={{ flex: 1, padding: 24 }}>
            
            <SliderBox images={images} />

          {isLoading ? <Text>Loading...</Text> : 
          ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
              {/* <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.title}</Text> */}
              {/* <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Articles:</Text> */}
              {/* <FlatList
                data={data.articles}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                  <Text>{item.id + '. ' + item.title}</Text>
                )}
              /> */}
            </View>
          )}
          
        </View>
      );
}