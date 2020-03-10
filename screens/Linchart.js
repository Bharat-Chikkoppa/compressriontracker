import React from "react";
import {
  SafeAreaView,
  StyleSheet
} from "react-native";

import {
  LineChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";


import { Block, Text } from "../components";
import * as mocks from "../constants/mocks";

class Linchart extends React.Component {
    state = {
    };
    renderChart() {

        return (
          <LineChart
          data={{
            // labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: mocks.chart
              }
            ]
          }}
          width={0.9*Dimensions.get("window").width } // from react-native
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
        );
      }

      renderHeader() {
        const { user } = this.props;
    
        return (
          <Block flex={0.42} column style={{ paddingHorizontal: 15 }}>
            <Block flex={false} row style={{ paddingVertical: 15 }}>
              <Block  style={{ marginLeft: 10 }}>
                <Text h1 black >
                  My Usage
                </Text>
              </Block>
            </Block>
            <Block center flex={1}>{this.renderChart()}</Block>
          </Block>
        );
      }
      render() {
        return (
          <SafeAreaView style={styles.safe}>
            {this.renderHeader()}
          </SafeAreaView>
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
  }
});

