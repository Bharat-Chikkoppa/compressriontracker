import React, { Component } from "react";
import { Image, StyleSheet, ScrollView, TextInput } from "react-native";
import Slider from "react-native-slider";

import { Divider, Button, Block, Text, Switch,Card } from "../components";
import { theme, mocks } from "../constants";

import firebase from 'firebase';

class Prescription extends Component {
  state = {

    details: {}
  };

  componentDidMount() {
    this.setState({ details: this.props.details });
  }

  /*handleEdit(name, text) {
    const { details } = this.state;
    details[name] = text;

    this.setState({ details });
  }

  toggleEdit(name) {
    const { editing } = this.state;
    this.setState({ editing: !editing ? name : null });
  }*/

  //renderEdit(name) {
    /*const { details, editing } = this.state;

    if (editing === name) {
      return (
        <TextInput
          defaultValue={details[name]}
          onChangeText={text => this.handleEdit([name], text)}
        />
      );
    }*/

    //return <Text bold>{details[name]}</Text>;
 // }

 componentWillMount() {

       // To Configure react native app with cloud of Google Firebase database !
       var firebaseConfig = {
         apiKey: "AIzaSyDaVtfZ9h0A2ECQ5pF9r6HGk7rmRmv0EIg",
         authDomain: "stocking-tracker.firebaseapp.com",
         databaseURL: "https://stocking-tracker.firebaseio.com",
         projectId: "stocking-tracker",
         storageBucket: "stocking-tracker.appspot.com",
         messagingSenderId: "528805073233",
         appId: "1:528805073233:web:23aeaa8aadeb4cb97c0370",
         measurementId: "G-DFHHG84ZLG"
       };
       // Initialize Firebase
       //firebase.initializeApp(firebaseConfig);

       if (!firebase.apps.length) {
         firebase.initializeApp(firebaseConfig);
       }

       // firebase.database().ref('locations').on('value', (data) => {
       //    var pressureData = data.val();
       //    var pressureValues = [];
       //    console.log(pressureData);
       //    for(i=0;i<pressureData.length;i++){
       //      console.log("*********"+pressureData[i].stockingPressure);
       //      pressureValues.push(pressureData[i].stockingPressure);
       //    }
       // })
       var firebaseRef = firebase.database().ref('locations');
       firebaseRef.on("child_added", function(child) {
         var pressureData = child.val();
         console.log(child.key+': '+JSON.stringify(child.val().stockingPressure));
       });

     }

  render() {
    const { details, editing } = this.state;

    return (
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>
            Prescription
          </Text>
          <Button>
            <Image source={details.avatar} style={styles.avatar} />
          </Button>
        </Block>

        <ScrollView showsVerticalScrollIndicator={false}>
        <Block style={{ marginLeft: 15,marginRight: 25 }}>
          <Card center middle shadow style={{ backgroundColor: "#57c2e6" }}>
            <Block style={{ marginLeft: -160, color: "#32cd32" }}>
              <Text
                medium
                h2
                height={0}
                style={{ fontWeight: "bold", color: "#ffffff" }}
              >
              Hello! Bharat
              </Text>
              <Text medium h4 height={0} style={{ color: "#ffffff" }}>
              Your Next Appointment
              </Text>
              <Text h1
                style={{
                  position: "absolute",
                  right: -150,
                  top: 7,
                  fontWeight: "bold",
                  color: "#ff039a"
                }}
              >
                28 Feb
              </Text>
            </Block>
          </Card>
        </Block>
        <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />
        <Block style={styles.inputs}>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>
                  Doctor
                </Text>
                <Text bold>{details.doctorname}</Text>
              </Block>
            </Block>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>
                  Nurse
                </Text>
                <Text bold>{details.nursename}</Text>
              </Block>
            </Block>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>
                  Hospital
                </Text>
                <Text bold>{details.hospital}</Text>
              </Block>
            </Block>
          </Block>


          <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />
          <Block style={styles.inputs}>
          <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>
                  Compression Stockings
                </Text>
                <Text bold>{details.stockings}</Text>
              </Block>
            </Block>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>
                  Additional Notes
                </Text>
                <Text bold>{details.notes}</Text>
              </Block>
            </Block>
            </Block>

          <Divider />


        </ScrollView>
      </Block>
    );
  }
}

Prescription.defaultProps = {
  details: mocks.details
};

export default Prescription;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2
  },
  inputs: {
    marginTop: theme.sizes.base * 0.7,
    paddingHorizontal: theme.sizes.base * 2
  },
  inputRow: {
    alignItems: "flex-end"
  },
  sliders: {
    marginTop: theme.sizes.base * 0.7,
    paddingHorizontal: theme.sizes.base * 2
  }
});
