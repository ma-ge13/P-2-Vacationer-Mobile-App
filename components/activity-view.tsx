import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StatusBar,
  Text,
  View,
  StyleSheet,
  Pressable,
  Modal,
  Alert,
} from 'react-native';
import { Activity, backendAddress } from '../dtos/activity';
import ActivityModal from './activity-modal';

export default function ActivityView() {
  // const activities: Activity[] = [
  //   {
  //     id: '101',
  //     title: 'Mini Golf',
  //     desc: '9 rounds at our mini golf course',
  //     startTime: 1644012548,
  //     endTime: 1643998146,
  //     location: 'Mini Golf Course',
  //     status: 'On Schedule',
  //   },
  //   {
  //     id: '202',
  //     title: 'Casino Night',
  //     desc: 'Blackjack and Poker until 2am',
  //     startTime: 1644012000,
  //     endTime: 1644026400,
  //     location: 'Casino',
  //     status: 'On Schedule',
  //   },
  // ];
  const [activities, setActivities] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDetails, setModalDetails] = useState({});

  useEffect(() => {
    getActivities();
  }, []);

  async function getActivities() {
    try {
      const response = await axios.get(`${backendAddress}/activities`);
      const acts: Activity[] = response.data;
      setActivities(acts);
    } catch (error) {
      console.log(error);
    }
  }

  const Item = ({ title, desc, startTime, endTime, location, status }) => (
    <Pressable
      onPress={() => {
        setModalVisible(true);
        setModalDetails({
          desc: desc,
          startTime: startTime,
          endTime: endTime,
          location: location,
          status: status,
        });
      }}>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      desc={item.desc}
      startTime={item.startTime}
      endTime={item.endTime}
      location={item.location}
      status={item.status}
    />
  );
  return (
    <View style={styles.container}>
      <Text style={styles.modalText}>Activity List Here</Text>
      <FlatList
        data={activities}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}></FlatList>

      <ActivityModal
        details={modalDetails}
        modalVisible={modalVisible}
        onClose={() => setModalVisible(!modalVisible)}
      />
    </View>
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
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
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
