import React from 'react';
import {
  Modal,
  Pressable,
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';

export default function ActivityModal({ details, modalVisible, onClose }) {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        onClose();
      }}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Text>Details: {details.desc}</Text>
          <Text>
            Start Time: {new Date(details.startTime * 1000).toLocaleString()}
          </Text>
          <Text>
            End Time: {new Date(details.endTime * 1000).toLocaleString()}
          </Text>
          <Text>Location: {details.location}</Text>
          <Text>Status: {details.status}</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => onClose()}>
            <Text style={styles.textStyle}>Close Info</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
