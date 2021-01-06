import React, {useState, useEffect} from 'react';
import {Text, View, Modal, TouchableOpacity} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {useDispatch} from 'react-redux';
import {setConnection} from '../../redux/actions/connectionAction';

function ModalNetworkError() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      dispatch(setConnection(state));
      if (state.type === 'unknown') {
        setShowModal(false);
      } else if (state.isConnected && state.isInternetReachable) {
        setShowModal(false);
      } else if (
        state.type !== '' &&
        state.isConnected &&
        !state.isInternetReachable
      ) {
        setShowModal(false);
      } else {
        console.log('Koe Puta');
        setShowModal(true);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [showModal, dispatch]);

  return (
    <Modal visible={showModal} animationType="fade" transparent={true}>
      <View
        accessibilityLabel="modalView"
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
        <View style={{backgroundColor: 'white', padding: 20, borderRadius: 10}}>
          <View style={{marginBottom: 10}}>
            <Text accessibilityLabel="textTitle">Error</Text>
            <Text accessibilityLabel="textDescription">
              Please check your internet connection.
            </Text>
          </View>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: 'blue',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
            onPress={() => setShowModal(false)}>
            <Text style={{color: 'white'}}>Ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export default ModalNetworkError;
