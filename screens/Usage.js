import React from "react";

import { LineChart } from "react-native-chart-kit";
import {
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from "react-native";

import { Card, Badge, Button, Block, Text, Divider } from "../components";

import { theme, mocks } from "../constants";

const { width } = Dimensions.get("window");

class Usage extends React.Component {
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

    return (
      <Block flex={0.42} column style={{ paddingHorizontal: 15 }}>
        <Block flex={false} row style={{ paddingVertical: 15 }}>
          <Block style={{ marginLeft: 10 }}>
            <Text h1 black>
              My Usage
            </Text>
          </Block>
        </Block>
        <Block style={{ marginLeft: 5 }}>
          <Card center middle shadow style={{ backgroundColor: "#30cf82" }}>
            <Block style={{ marginLeft: -160, color: "#32cd32" }}>
              <Text
                medium
                h2
                height={0}
                style={{ fontWeight: "bold", color: "#ffffff" }}
              >
                Good Condition
              </Text>
              <Text medium h4 height={0} style={{ color: "#ffffff" }}>
                Your Stocking
              </Text>
              <Image
                style={{
                  position: "absolute",
                  right: -150,
                  top: 7,
                  width: 40,
                  height: 40
                }}
                source={require("../assets/icons/tick.png")}
              />
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
Usage.defaultProps = {
  chart: mocks.chart
};
export default Usage;

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
