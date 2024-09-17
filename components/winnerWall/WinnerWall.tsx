import WinnerWallStyle from "./WinnerWallStyle";
import { View, Text, Image, ActivityIndicator } from "react-native";

const winnerCode = [
  {
    name: "Harish",
    id: 1,
    source: require("../../assets/images/winners/Harish.png"),
  },
  {
    name: "Hashim",
    id: 2,
    source: require("../../assets/images/winners/Hashim.png"),
  },
  {
    name: "Rizwan",
    id: 3,
    source: require("../../assets/images/winners/Rizwan.png"),
  },
];
const WinnerWall = ({ winner }: any) => {
  let winnerVal: any = [];
  if (winner) {
    winnerVal = winnerCode.filter((data) => data.name === winner.img);
  }

  return !winner ? (
    <ActivityIndicator size="large" color="#0000ff" />
  ) : (
    <View>
      <View style={WinnerWallStyle.mainHeader}>
        <Text style={WinnerWallStyle.headerMainTxt}>Latest Winner</Text>
      </View>
      <View style={WinnerWallStyle.headerDetails}>
        <Text style={WinnerWallStyle.headerTxt}>
          Winner : {winnerVal[0].name}
        </Text>
        <Image source={winnerVal[0].source} style={WinnerWallStyle.img}></Image>
      </View>
    </View>
  );
};

export default WinnerWall;
