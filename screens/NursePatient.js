import React from "react";

import { LineChart } from "react-native-chart-kit";
import {
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ToastAndroid,
  AppRegistry
} from "react-native";

import { Card, Badge, Button, Block, Text, Divider } from "../components";

import { theme, mocks } from "../constants";

import call from "react-native-phone-call";
import SendSMS from 'react-native-sms-x';

const { width } = Dimensions.get("window");

class Linchart extends React.Component {
  state = {};
  renderChart() {
    return (
      <Block flex={1.0} column style={{ paddingHorizontal: 0 }}>
        <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />
        <Image
          style={{ position: "absolute", left: 0, marginTop: 30 }}
          source={require("../assets/icons/usage.png")}
        />
        <Text h2 style={{ marginLeft: 40 }}>
          Usage Tracking
        </Text>
        <LineChart
          data={{
            // labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: mocks.chart
              }
            ]
          }}
          width={0.9 * Dimensions.get("window").width} // from react-native
          height={220}
          // yAxisLabel="$"
          // yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#000000",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#000000",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "2",
              strokeWidth: "2",
              stroke: "#00ff00"
            }
          }}
          // bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
        <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />

        <Block style={{ marginLeft: 5 }}>
          <Card
            center
            shadow
            style={{ backgroundColor: "#fafafa", paddingVertical: 25 }}
          >
            <Block style={{ marginLeft: -180, color: "#32cd32" }}>
              <Text
                medium
                h2
                style={{ fontWeight: "bold", color: "#adadad", marginTop: -15 }}
              >
                Average Usage
              </Text>
              <Text
                medium
                h3
                style={{
                  position: "absolute",
                  right: 0,
                  marginRight: -150,
                  marginTop: -12,
                  color: "#00ba09"
                }}
              >
                10 hr/day
              </Text>
            </Block>
          </Card>
        </Block>
      </Block>
    );
  }
  

  renderHeader() {
    const { user } = this.props;
    const args = {
      number: "9093900003", // String value with the number to call
      prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call
    };
    return (
        
      <Block flex={0.42} column style={{ paddingHorizontal: 15 }}>
        <Block flex={false} row style={{ paddingVertical: 15 }}>
          <Block style={{ marginLeft: 10 }}>
            <Text h1 black>
              Patient Profile
            </Text>
          </Block>
        </Block>
        <Block style={{ marginLeft: 5 }}>
          <Card
            center
            middle
            shadow
            style={{ backgroundColor: "#ffffff", paddingVertical: 55 }}
          >
            <Block >
            <Block center style={{ position:"relative" ,marginLeft:-20}} >
                <Image
                    style={{
                        position:"absolute",
                        right: 120,
                        top: -25,
                        width: 50,
                        height: 50
                    }}
                    source={require("../assets/icons/letterc.png")}
                />
                <Block style={{marginLeft:50 , position : "absolute" , width:200}}>
                    <Text medium h2 height={0} style={{ color: "#000000", marginLeft:10,marginTop:-45}}>
                        Christina Lewis
                    </Text>
                    <Text medium h4 height={0} style={{ color: "#000000", marginLeft:10,marginTop:0}}>
                        Female, 47
                    </Text>
                    <Text medium h4 height={0} style={{ color: "#30cf82", marginLeft:10,marginTop:0}}>
                        ID: 520
                    </Text>
                </Block>
            </Block>
            <Block style={{width:200, position:"absolute", marginLeft:100}}>
              <Button  style={{ marginLeft:10,width:40,marginTop:-30}} onPress={() => call(args).catch(console.error)}>
                    <Image
                        style={{
                        position: "absolute",
                        width: 40,
                        height: 40
                        }}
                        source={require("../assets/icons/supportnurse.png")}
                    />
              </Button>
            
              {/* <Button
                style={{ position: "absolute", marginLeft:230, marginTop: 0 }
                onPress={() => 
                    console.log("Button pressed")
                }
              >
                <Image
                  style={{
                    position: "absolute",
                    right: 0,
                    top: 7,
                    width: 30,
                    height: 30
                  }}
                  source={require("../assets/icons/message.png")}
                />
              </Button> */}

            </Block>
            </Block>
          </Card>
        </Block>
        <Block center flex={1}>
          {this.renderChart()}
        </Block>
      </Block>
    );
  }
  render() {
    return (
      <Block>
        <SafeAreaView style={styles.safe}>{this.renderHeader()}</SafeAreaView>
      </Block>
    );
  }
}
Linchart.defaultProps = {
  chart: mocks.chart
};
export default Linchart;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  headerChart: {
    paddingTop: 30,
    paddingBottom: 30,
    zIndex: 1
  },
  avatar: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    marginRight: 5
  },
  requests: {
    marginTop: -55,
    paddingTop: 55 + 20,
    paddingHorizontal: 15,
    zIndex: -1
  },
  requestsHeader: {
    paddingHorizontal: 20,
    paddingBottom: 15
  },
  request: {
    padding: 20,
    marginBottom: 15
  },
  requestStatus: {
    marginRight: 20,
    overflow: "hidden",
    height: 90
  },
  category: {
    // this should be dynamic based on screen width
    minWidth: width - theme.sizes.padding * 1.4 - theme.sizes.base,
    maxWidth: width - theme.sizes.padding * 1.4 - theme.sizes.base
  }
});
AppRegistry.registerComponent('NursePatient', () => NursePatient);
