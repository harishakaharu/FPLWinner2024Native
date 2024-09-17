import { Text, View, ActivityIndicator, ScrollView } from "react-native";
import React from "react";
import HomePageStyle from "./HomePage.style";
import InputForm from "../inputForm/InputForm";
import WinnerWall from "../winnerWall/WinnerWall";
import ListOfPrevWinners from "../prevWinner/ListOfPrevWinners";
import { useEffect, useState } from "react";
import { database } from "../../firebase";
import { ref, get } from "firebase/database";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [loadFlag, setLoadFlag] = useState(false);
  const fetchData = async () => {
    try {
      const dbRef = ref(database, "listOfWinners");
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        const data = snapshot.val() || [];
        setData(data);
        setLoadFlag(false);
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    setLoadFlag(true);
    fetchData();
  }, []);
  const reFreshData = () => {
    setLoadFlag(true);
    fetchData();
  };
  return (
    <ScrollView>
      <View style={HomePageStyle.main}>
        <Text style={HomePageStyle.headerTxt}>FPL Monthly Champion Wall</Text>
      </View>
      {loadFlag ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <InputForm data={data} onRefershHandler={reFreshData} />
          <WinnerWall winner={data[data.length - 1]} />
          <ListOfPrevWinners
            listOfWinner={data}
            onRefershHandler={reFreshData}
          />
        </View>
      )}
      <View style={HomePageStyle.footer}></View>
    </ScrollView>
  );
};

export default HomePage;
