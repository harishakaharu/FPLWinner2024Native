import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { database } from "../../firebase";
import { ref, set } from "firebase/database";
import ListOfPrevWinnerStyle from "./ListOfPrevWinnersStyle";
import { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

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

const ListOfPrevWinners = ({ listOfWinner, onRefershHandler }: any) => {
  const [showPrevWinnerFlag, setShowPrevWinnerFlag] = useState(false);
  const deleteHandler = (idCode: any) => {
    if (listOfWinner.length > 1) {
      const newList = listOfWinner.filter(
        (oldVal: any) => oldVal.idCode !== idCode
      );
      const pushArrayToFirebase = async () => {
        const dbRef = ref(database, "listOfWinners");
        await set(dbRef, newList);
        console.log("Array pushed successfully!");
        setShowPrevWinnerFlag(false);
        onRefershHandler();
      };
      setShowPrevWinnerFlag(true);
      pushArrayToFirebase();
    } else {
      console.log("Too short to delete the Value");
    }
  };
  return !listOfWinner ? (
    <ActivityIndicator size="large" color="#0000ff" />
  ) : (
    <>
      <View style={ListOfPrevWinnerStyle.mainHeader}>
        <TouchableOpacity
          style={ListOfPrevWinnerStyle.button}
          onPress={() => setShowPrevWinnerFlag((Prev) => !Prev)}
        >
          <Text style={ListOfPrevWinnerStyle.buttonText}>
            Show Previous Winners
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {listOfWinner.map((val: any) => (
          <View key={val.idCode}>
            {showPrevWinnerFlag && (
              <View style={ListOfPrevWinnerStyle.winnerContainer}>
                <View style={ListOfPrevWinnerStyle.listView}>
                  <View style={ListOfPrevWinnerStyle.viewTxt}>
                    <Text style={ListOfPrevWinnerStyle.listTxt}>
                      Winner of {val.month} is {val.img}
                    </Text>
                  </View>
                  <View style={ListOfPrevWinnerStyle.imgView}>
                    <Image
                      source={
                        winnerCode.filter(
                          (winnVal) => winnVal.name === val.img
                        )[0].source
                      }
                      style={ListOfPrevWinnerStyle.img}
                    ></Image>
                  </View>
                  <TouchableOpacity style={ListOfPrevWinnerStyle.deleteIcon}>
                    <Icon
                      name="delete"
                      size={20}
                      color="#ff6666"
                      onPress={() => deleteHandler(val.idCode)}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default ListOfPrevWinners;
