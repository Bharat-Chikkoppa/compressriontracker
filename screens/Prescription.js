import React, { Component } from "react";
import { Image, StyleSheet, ScrollView, TextInput } from "react-native";
import Slider from "react-native-slider";

import { Divider, Button, Block, Text, Switch } from "../components";
import { theme, mocks } from "../constants";

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
