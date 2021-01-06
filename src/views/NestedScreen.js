import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function NestedScreen() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{paddingBottom: 20}}>
        <Text>Nested Screen</Text>
      </View>
      <TouchableOpacity
        style={{padding: 20, backgroundColor: 'blue', borderRadius: 10}}
        onPress={() => navigation.goBack()}>
        <Text style={{color: 'white'}}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}
