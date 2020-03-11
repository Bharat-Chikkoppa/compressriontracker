import React, { Component } from "react";
import { Image, StyleSheet, ScrollView, TextInput } from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings';

import { Divider, Button, Block, Text, Switch } from "../components";
import { theme, mocks } from "../constants";

class Sstat extends Component {
  state = {
    stats: {}
  };

  componentDidMount() {
    this.setState({ stats: this.props.stats });
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

 ratingCompleted(rating) {
  console.log("Rating is: " + rating)
};

  render() {
    const { stats, editing } = this.state;


    return (
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>
            Status
          </Text>

        </Block>

        <ScrollView showsVerticalScrollIndicator={false}>
        <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />
        <Block style={styles.inputs}>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>
                  Prescribed Stockings
                </Text>
                <Text bold>{stats.stockings}</Text>
              </Block>             
            </Block>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>
                  Usage From
                </Text>
                <Text bold>{stats.usagefrom}</Text>
              </Block>             
            </Block>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>
                  Current pressure
                </Text>
                <Text bold>{stats.pressure}</Text>
              </Block>
            </Block>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 0 }}>
                  Bluetooth
                </Text>
                <Text bold>{stats.bluetooth}</Text>
              </Block>             
            </Block>
            
          </Block>
          
          <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />
          <Block style={styles.inputs}>
          <Block row space="between" margin={[10, 50]} style={styles.inputRow}>
              <Block>
                <Text bold h2 style={{ marginBottom: 10 }}>
                  Rate your comfort!!!
                </Text>
              </Block> 
              </Block>
            <Block row space="between" margin={[0, 50]} style={styles.inputRow}>
            <AirbnbRating
              count={5}
              reviews={["Too Tight", "Tight", "OK", "Comfortable", "Fits Perfectly"]}
              defaultRating={5}
              size={30}
              onFinishRating={this.ratingCompleted}
            />          
              </Block>
            </Block>
          <Divider />

          
        </ScrollView>
      </Block>
    );
  }
}

Sstat.defaultProps = {
  stats: mocks.stats
};

export default Sstat;

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