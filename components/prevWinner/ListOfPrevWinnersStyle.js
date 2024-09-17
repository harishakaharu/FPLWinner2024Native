import { StyleSheet } from "react-native";
const ListOfPrevWinnerStyle = StyleSheet.create({
  mainHeader: { margin: 10 },
  headerTxt: { color: "white", fontSize: 16 },
  listView: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },

  deleteIcon: { marginLeft: 40 },
  headerInputTxt: {
    color: "white",
    fontSize: 16,
    marginLeft: 20,
  },
  listTxt: {
    color: "white",
    fontSize: 14,
    marginLeft: 10,
  },
  viewTxt: { width: 230 },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  img: {
    width: 40,
    height: 40,
    alignSelf: "center",
  },
  imgView: { width: 100 },
  winnerContainer: {},
});
export default ListOfPrevWinnerStyle;
