import { Text, View, ScrollView } from 'react-native';
import React from 'react';

const Area = () => (
  <View>
    <ScrollView>
      <View>
        <Text>Area Screen</Text>
      </View>
    </ScrollView>
  </View>
);

Area.navigationOptions = {
  header: null,
};

export default Area;
