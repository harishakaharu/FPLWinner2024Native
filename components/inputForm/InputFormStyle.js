import { StyleSheet } from "react-native";
const InputFormStyle = StyleSheet.create({
  mainHeader: { margin: 10 },
  headerTxt: { color: "white", fontSize: 16 },
  pickerStyle: { color: "white", width: 260 },
  container: { flexDirection: "row", alignItems: "center" },
  headerInputTxt: { color: "white", fontSize: 16, marginLeft: 10 },
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
  img: { width: 100, height: 150, alignSelf: "center" },
});
export default InputFormStyle;
