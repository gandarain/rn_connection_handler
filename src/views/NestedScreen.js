import React from 'react';
import {View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function NestedScreen() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{paddingBottom: 20}}>
        <Text>Nested Screen</Text>
      </View>
      <Button
        title="Go Back to Home Screen"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
