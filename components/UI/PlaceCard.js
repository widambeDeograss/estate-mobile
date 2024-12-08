import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  FlatList,
} from "react-native";
import { SCREEN_HEIGHT } from "../../constants/UiData";
import Colors from "../../constants/Colors";

const Slide = ({ item }) => {
  console.log(item);
  return (
    <View style={{ alignItems: "center" }}>
      <Image source={{ uri: item }} style={styles.image} />
      <View>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

const PlaceCard = (props) => {
  console.log(props.images);

  let TouchableCmp = TouchableOpacity;
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onSelect} useForeground>
          <View style={styles.imageContainer}>
            {/* <FlatList
                ref={ref}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                // contentContainerStyle={{ SCREEN_HEIGHT: SCREEN_HEIGHT * 0.75 }}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={props?.images}
                pagingEnabled
                renderItem={({ item }) => <Slide item={item} />}
              /> */}
            <Image source={{ uri: props.images[0] }} style={styles.image} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              {props?.images?.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.indicator,
                    currentSlideIndex == index && {
                      backgroundColor: Colors.accent,
                      width: 25,
                    },
                  ]}
                />
              ))}
            </View>
          </View>
        </TouchableCmp>
      </View>
      <View style={styles.details}>
        <View>{props.children}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 0.7,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
  },
  touchable: {
    borderRadius: 10,
    overflow: "hidden",
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: "grey",
    marginHorizontal: 3,
    borderRadius: 2,
  },
  imageContainer: {
    width: "100%",
    height: "80%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  details: {
    alignItems: "flex-start",

    height: "20%",
    padding: 10,
    marginTop: -50,
  },
  title: {
    fontFamily: "inter-bold",
    fontSize: 18,
    marginVertical: 2,
  },
  price: {
    fontFamily: "Roboto-regular",
    fontSize: 14,
    color: "#888",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "23%",
    paddingHorizontal: 20,
  },
});

export default PlaceCard;
