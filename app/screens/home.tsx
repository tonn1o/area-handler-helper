import React from 'react';
import { ScrollView, View, Text } from 'react-native';

const HomeScreen = () => (
  <View>
    <ScrollView>
      <View>
        <Text>Hello World</Text>
      </View>
    </ScrollView>
  </View>
);

HomeScreen.navigationOptions = {
  header: null,
};

export default HomeScreen;
