import React, { Component } from "react";
import { StyleSheet, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { Card, Badge, Button, Block, Text, Divider } from "../components";
import { theme, mocks } from "../constants";

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <Image source={{uri:item.photo}}  style={{width:60, height:60,borderRadius:30}} />
      <View style={{alignItems:"center",flex:1}}>
        <Text style={{fontWeight:"bold"}}>{item.name}</Text>
        <Text>{item.position}</Text>
      </View>
      <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}
          key="prescription"
          onPress={() => navigation.navigate("Prescription")}
          >
        <Text style={{color:"green"}}>Details</Text>
      </TouchableOpacity>
    </View>
  );
}

class PatientList extends Component {
  state = {
    details: {}
  };

  componentDidMount() {
    this.setState({ details: this.props.details });
  }
  // constructor(props){
  //   super(props);
  //   this.showDetails = this.showDetails.bind(this);// you should bind this to the method that call the props
  // }

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


  render(){
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
            renderItem={({ item }) => <Item item={item}/>}
            keyExtractor={item => item.email}
          />
        </View>
      </Block>
    );
  }
}
PatientList.defaultProps = {
  profile: mocks.profile,
  categories: mocks.categories
};

export default PatientList;


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
