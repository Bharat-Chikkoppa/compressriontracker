import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import * as Font from "expo-font";
import { LineChart, Path } from "react-native-svg-charts";
import { Line } from "react-native-svg";
import * as shape from "d3-shape";

import { Block, Text } from "../components";
import * as theme from "../constants/theme";
import * as mocks from "../constants/mocks";

class Usage extends React.Component {
    state = {
    };
    renderChart() {
        const { chart } = this.props;
        const LineShadow = ({ line }) => (
          <Path
            d={line}
            fill="none"
            stroke={theme.colors.primary}
            strokeWidth={7}
            strokeOpacity={0.07}
          />
        );
    
        return (
          <LineChart
            yMin={0}
            yMax={10}
            data={chart}
            style={{ flex: 2 }}
            curve={shape.curveMonotoneX}
            svg={{
              stroke: theme.colors.primary,
              strokeWidth: 1.25
            }}
            contentInset={{ left: theme.sizes.base, right: theme.sizes.base }}
          >
            <LineShadow belowChart={true} />
            <Line
              key="zero-axis"
              x1="0%"
              x2="100%"
              y1="50%"
              y2="50%"
              belowChart={true}
              stroke={theme.colors.gray}
              strokeDasharray={[2, 10]}
              strokeWidth={1}
            />
          </LineChart>
        );
      }

      renderHeader() {
        const { user } = this.props;
    
        return (
          <Block flex={0.42} column style={{ paddingHorizontal: 15 }}>
            <Block flex={false} row style={{ paddingVertical: 15 }}>
              <Block center>
                <Text h3 white style={{ marginRight: -(25 + 5) }}>
                  Blood Requests
                </Text>
              </Block>
              {/* <Image style={styles.avatar} source={user.avatar} /> */}
            </Block>
            <Block card shadow color="white" style={styles.headerChart}>
              <Block row space="between" style={{ paddingHorizontal: 30 }}>
                <Block flex={false} row center>
                  <Text h1>291</Text>
                  <Text caption bold tertiary style={{ paddingHorizontal: 10 }}>
                    -12%
                  </Text>
                </Block>
                <Block flex={false} row center>
                  <Text caption bold primary style={{ paddingHorizontal: 10 }}>
                    +49%
                  </Text>
                  <Text h1>481</Text>
                </Block>
              </Block>
              <Block
                flex={0.5}
                row
                space="between"
                style={{ paddingHorizontal: 30 }}
              >
                <Text caption light>
                  Available
                </Text>
                <Text caption light>
                  Requests
                </Text>
              </Block>
              <Block flex={1}>{this.renderChart()}</Block>
            </Block>
          </Block>
        );
      }
      render() {
        // if (!this.state.fontsLoaded) {
        //   return (
        //     <Block center middle>
        //       <Image
        //         style={{ width: 140, height: 140 }}
        //         source={require("../assets/icons/pots.png")}
        //       />
        //     </Block>
        //   );
        // }
    
        return (
          <SafeAreaView style={styles.safe}>
            {this.renderHeader()}
          </SafeAreaView>
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
      backgroundColor: theme.colors.primary
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
  
