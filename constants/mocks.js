const categories = [
  {
    id: "patient_prescription",
    name: "My Prescription",
    tags: [],
    //count: 147,
    image: require("../assets/icons/prescription2.png")
  },
  {
    id: "usage",
    name: "My Usage",
    tags: [],
    //count: 16,
    image: require("../assets/icons/usage.png")
  },
  {
    id: "status",
    name: "My status",
    tags: [],
    //count: 68,
    image: require("../assets/icons/status.png")
  },
  {
    id: "support",
    name: "Support",
    tags: [],
    //count: 17,
    image: require("../assets/icons/support.png")
  },
  {
    id: "connection",
    name: "Bluetooth",
    tags: [],
    //count: 47,
    image: require("../assets/icons/bluetooth.png")
  }
  /*{
    id: "fertilizers",
    name: "fertilizers",
    tags: ["products", "shop"],
    count: 47,
    image: require("../assets/icons/fertilizers.png")
  }*/
];

const products = [
  {
    id: 1,
    name: "16 Best Plants That Thrive In Your Bedroom",
    description:
      "Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.",
    tags: ["Interior", "27 m²", "Ideas"],
    images: [
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      // showing only 3 images, show +6 for the rest
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png")
    ]
  }
];

const explore = [
  // images
  require("../assets/images/explore_1.png"),
  require("../assets/images/explore_2.png"),
  require("../assets/images/explore_3.png"),
  require("../assets/images/explore_4.png"),
  require("../assets/images/explore_5.png"),
  require("../assets/images/explore_6.png")
];

const profile = {
  username: "react-ui-kit",
  location: "Europe",
  email: "contact@react-ui-kit.com",
  avatar: require("../assets/images/avatar.png"),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false
};

const details = {
  doctorname: "Dr. Stephan H",
  nursename: "Jane",
  hospital: "University Hospital Galway",
  stockings: "Class B",
  notes: "Physiotherapy treatment"
};

const chart = [
  1.1,
  3,
  1.5,
  2.3,
  3.2,
  7,
  8.2,
  1.2,
  2,
  1.2,
  8,
  3.8,
  5.8,
  3.9,
  5.1,
  0.1,
  6
];

export { categories, explore, products, profile, details,chart };
