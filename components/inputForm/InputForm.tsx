import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import InputFormStyle from "./InputFormStyle";
import { useEffect, useState } from "react";
import { database } from "../../firebase";
import { ref, set } from "firebase/database";

const InputForm = ({ data, onRefershHandler }: any) => {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedWinner, setSelectedWinner] = useState("Harish Singh Bisht");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [loadFlag, setLoadFlag] = useState(false);
  useEffect(() => {
    if (selectedWinner.includes("Harish")) {
      setSelectedImage("Harish");
    } else if (selectedWinner.includes("Rizwan")) {
      setSelectedImage("Rizwan");
    } else if (selectedWinner.includes("Hashim")) {
      setSelectedImage("Hashim");
    }
  }, [selectedWinner]);

  const submitHandler = () => {
    if (selectedAmount === "" || selectedWinner === "") {
      console.log("Fill the details");
    } else {
      const identi = Math.random() + selectedWinner;
      const winnerProf = [
        ...data,
        {
          idCode: identi,
          amount: selectedAmount,
          month: selectedMonth,
          name: selectedWinner,
          img: selectedImage,
        },
      ];
      const pushArrayToFirebase = async () => {
        const dbRef = ref(database, "listOfWinners");
        await set(dbRef, winnerProf);
        console.log("Array pushed successfully!");
        setLoadFlag(false);
        onRefershHandler();
      };
      setLoadFlag(true);
      pushArrayToFirebase();
    }
  };
  return (
    <View style={InputFormStyle.mainHeader}>
      <Image
        source={require("../../assets/images/adaptive-icon.png")}
        style={InputFormStyle.img}
      ></Image>
      <View>
        <View style={InputFormStyle.container}>
          <Text style={InputFormStyle.headerTxt}>Select the winner:</Text>
          <Picker
            style={InputFormStyle.pickerStyle}
            selectedValue={selectedWinner}
            onValueChange={(itemValue) => setSelectedWinner(itemValue)}
          >
            <Picker.Item
              label="Harish Singh Bisht"
              value="Harish Singh Bisht"
            />
            <Picker.Item
              label="Rizwan Farooqui Ahmed"
              value="Rizwan Farooqui Ahmed"
            />
            <Picker.Item label="Syed Hashim Abbas" value="Syed Hashim Abbas" />
          </Picker>
        </View>
      </View>
      <View>
        <View style={InputFormStyle.container}>
          <Text style={InputFormStyle.headerTxt}>Total expenditure:</Text>
          <TextInput
            style={InputFormStyle.headerInputTxt}
            value={selectedAmount}
            onChangeText={(text) => setSelectedAmount(text)}
            keyboardType="numeric"
            placeholder="Enter amount..."
            placeholderTextColor="#ccc"
          />
        </View>
      </View>
      <View>
        <View style={InputFormStyle.container}>
          <Text style={InputFormStyle.headerTxt}>Select the Month:</Text>
          <Picker
            style={InputFormStyle.pickerStyle}
            selectedValue={selectedMonth}
            onValueChange={(itemValue) => setSelectedMonth(itemValue)}
          >
            <Picker.Item label="January" value="January" />
            <Picker.Item label="February" value="February" />
            <Picker.Item label="March" value="March" />
            <Picker.Item label="April" value="April" />
            <Picker.Item label="May" value="May" />
            <Picker.Item label="June" value="June" />
            <Picker.Item label="July" value="July" />
            <Picker.Item label="August" value="August" />
            <Picker.Item label="September" value="September" />
            <Picker.Item label="October" value="October" />
            <Picker.Item label="November" value="November" />
            <Picker.Item label="December" value="December" />
          </Picker>
        </View>
      </View>
      <TouchableOpacity style={InputFormStyle.button} onPress={submitHandler}>
        {loadFlag ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <Text style={InputFormStyle.buttonText}>Submit Winner</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default InputForm;
