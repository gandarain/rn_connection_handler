import React from 'react';
import {View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{paddingBottom: 20}}>
        <Text>Home Screen</Text>
      </View>
      <Button
        title="Go to Nested Screen"
        onPress={() => navigation.navigate('Nested')}
      />
    </View>
  );
}
