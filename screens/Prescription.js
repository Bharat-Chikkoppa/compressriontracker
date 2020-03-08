import React, { Component } from "react";
import { Image, StyleSheet, ScrollView, TextInput } from "react-native";
import Slider from "react-native-slider";

import { Divider, Button, Block, Text, Switch } from "../components";
import { theme, mocks } from "../constants";

export default class Prescription extends Component{

    state ={
        details: {}
    };

    componentDidMount() {
        this.setState({ details: this.props.details });
        console.log(details);

    }
    

    render(){
    const { details } = this.state;
    return(
    <Block>
    <Block flex={false} row center space="between" style={styles.header}>
        <Text h1 bold>
        Prescription
        </Text>
    </Block>
    <ScrollView showsVerticalScrollIndicator={false}>
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
              </Block>
              <Text bold>{details.nursename}</Text>
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
              </Block>
              <Text bold>{details.nursename}</Text>
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

          <Divider />

          <Block style={styles.toggles}>
            <Block
              row
              center
              space="between"
              style={{ marginBottom: theme.sizes.base * 2 }}
            >
              <Text gray2>Notifications</Text>
              <Switch
                value={this.state.notifications}
                onValueChange={value => this.setState({ notifications: value })}
              />
            </Block>

            <Block
              row
              center
              space="between"
              style={{ marginBottom: theme.sizes.base * 2 }}
            >
              <Text gray2>Newsletter</Text>
              <Switch
                value={this.state.newsletter}
                onValueChange={value => this.setState({ newsletter: value })}
              />
            </Block>
          </Block>
        </ScrollView>
    
    </Block>
    )
    }
      
    };
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
      },
      thumb: {
        width: theme.sizes.base,
        height: theme.sizes.base,
        borderRadius: theme.sizes.base,
        borderColor: "white",
        borderWidth: 3,
        backgroundColor: theme.colors.secondary
      },
      toggles: {
        paddingHorizontal: theme.sizes.base * 2
      }
    });
