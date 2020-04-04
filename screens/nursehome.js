import React, { Component } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";

import { Card, Badge, Button, Block, Text } from "../components";
import { theme, mocks } from "../constants";
import firebase from 'firebase';

import usagelogo from "../assets/icons/usage.png";
import prescriptionlogo from "../assets/icons/prescription2.png";
import sstatlogo from "../assets/icons/status.png";
import supportlogo from "../assets/icons/support.png";
import bluetoothlogo from "../assets/icons/bluetooth.png";
const { width } = Dimensions.get("window");



class nursehome extends Component {

  renderItem = ({ item }) => {
  
    return (
      <View style={styles.listItem}>
        <Image source={{uri:item.photo}}  style={{width:60, height:60,borderRadius:30}} />
        <View style={{alignItems:"center",flex:1}}>
          <Text style={{fontWeight:"bold"}}>{item.name}</Text>
          <Text>{item.position}</Text>
        </View>
        <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}
            onPress={() => this.props.navigation.navigate("NursePatient")}
            >
          <Text style={{color:"green"}}>Details</Text>
        </TouchableOpacity>
      </View>
    );
  }
  state = {
    active: "Products",
    categories: [],
    details:{}
  };

  componentWillMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(mocks.firebaseConfig);
    }
    var firebaseRef = firebase.database().ref('locations');
    firebaseRef.on("child_added", function(child) {
      var pressureData = child.val();
      console.log(child.key+': '+JSON.stringify(child.val().stockingPressure));
    });
    
  }

  componentDidMount() {
    this.setState({ categories: this.props.categories });
    this.setState({ details: this.props.details });
  }

  state = {
    data:[
        {
            "name": "Christiana Lewis",
            "email": "miyah.myles@gmail.com",
            "position": "age: 48",
            "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6"
        },
        {
          "name": "Christiana ",
          "email": "miya.myles@gmail.com",
          "position": "age: 48",
          "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6"
      }
    ]
  }

  render() {
    const { details, editing } = this.state;
    const { navigation } = this.props;

    return (
      <Block>
         <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>
            Prescription
          </Text>
          {/* <Button>
            <Image source={details.avatar} style={styles.avatar} />
          </Button> */}
        </Block>
        <View style={styles.container}>
          <FlatList
            style={{flex:1}}
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={item => item.email}
            navigation={this.props.navigation}
          />
        </View>
      </Block>
    );
  }
}

nursehome.defaultProps = {
  profile: mocks.profile,
  categories: mocks.categories
};

export default nursehome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop:60
  },
  listItem:{
    margin:10,
    padding:10,
    backgroundColor:"#FFF",
    width:"80%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5
  }
});