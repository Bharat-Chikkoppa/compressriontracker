import React, { Component } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";

import { Card, Badge, Button, Block, Text } from "../components";
import { theme, mocks } from "../constants";

import usagelogo from "../assets/icons/usage.png";
import prescriptionlogo from "../assets/icons/prescription2.png";
import sstatlogo from "../assets/icons/status.png";
import supportlogo from "../assets/icons/support.png";
import bluetoothlogo from "../assets/icons/bluetooth.png";


const { width } = Dimensions.get("window");

class Browse extends Component {
  state = {
    active: "Products",
    categories: []
  };

  componentDidMount() {
    this.setState({ categories: this.props.categories });
  }

  handleTab = tab => {
    const { categories } = this.props;
    const filtered = categories.filter(category =>
      category.tags.includes(tab.toLowerCase())
    );

    this.setState({ active: tab, categories: filtered });
  };

  renderTab(tab) {
    const { active } = this.state;
    const isActive = active === tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => this.handleTab(tab)}
        style={[styles.tab, isActive ? styles.active : null]}
      >
        <Text size={16} medium gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { profile, navigation } = this.props;
    const { categories } = this.state;
    //const tabs = ["Products", "Inspirations", "Shop"];

    return (
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>
            Dashboard
          </Text>
          <Button onPress={() => navigation.navigate("Settings")}>
            <Image source={profile.avatar} style={styles.avatar} />
          </Button>
        </Block>



        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: theme.sizes.base * 2 }}
        >
          {/* <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>
            Prescription
          </Text>
          <Button onPress={() => navigation.navigate("Prescription")}>
            <Image source={profile.avatar} style={styles.avatar} />
          </Button>
        </Block> */}
        <Block flex={false} row center space="between" style={styles.header}>
        <TouchableOpacity
                key="prescription"
                onPress={() => navigation.navigate("Prescription")}
              >
          <Card center middle shadow style={styles.category}>
              <Badge
                margin={[0, 0, 15]}
                size={50}
                // color="rgba(41,216,143,0.20)"
              >
                <Image source = {prescriptionlogo} />
              </Badge>
              <Text medium height={20}>
                Prescription
              </Text>

          </Card>
        </TouchableOpacity>
          <TouchableOpacity
                key="usage"
                onPress={() => navigation.navigate("Usage")}
              >
          <Card center middle shadow style={styles.category}>
              <Badge
                margin={[0, 0, 15]}
                size={50}
                // color="rgba(41,216,143,0.20)"
              >
                <Image source = {usagelogo} size = {30} />
              </Badge>
              <Text medium height={20}>
                Usage
              </Text>

          </Card>
        </TouchableOpacity>
        </Block>
        <Block flex={false} row center space="between" style={styles.header}>
        <TouchableOpacity
                key="sstat"
                onPress={() => navigation.navigate("Sstat")}
              >
          <Card center middle shadow style={styles.category}>
              <Badge
                margin={[0, 0, 15]}
                size={50}
                // color="rgba(41,216,143,0.20)"
              >
                <Image source = {sstatlogo} />
              </Badge>
              <Text medium height={20}>
                Status
              </Text>

          </Card>
        </TouchableOpacity>
          <TouchableOpacity
                key="usage"
                onPress={() => navigation.navigate("Usage")}
              >
          <Card center middle shadow style={styles.category}>
              <Badge
                margin={[0, 0, 15]}
                size={50}
                // color="rgba(41,216,143,0.20)"
              >
                <Image source = {supportlogo} size = {30} />
              </Badge>
              <Text medium height={20}>
                Support
              </Text>

          </Card>
        </TouchableOpacity>
        </Block>
        <Block flex={false} row center space="between" style={styles.header}>
        <TouchableOpacity
                key="bluetootharduino"
                onPress={() => navigation.navigate("NursePatient")}
              >
          <Card center middle shadow style={styles.category}>
              <Badge
                margin={[0, 0, 15]}
                size={50}
                // color="rgba(41,216,143,0.20)"
              >
                <Image source = {bluetoothlogo} />
              </Badge>
              <Text medium height={20}>
                Bluetooth
              </Text>

          </Card>
        </TouchableOpacity>
        </Block>
        </ScrollView>
      </Block>
    );
  }
}

Browse.defaultProps = {
  profile: mocks.profile,
  categories: mocks.categories
};

export default Browse;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2
  },
 /* tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2
  },
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base
  }, */
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3
  },
  categories: {
    flexWrap: "wrap",
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5
  },
  category: {
    // this should be dynamic based on screen width
    minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2
  }
});
