import { Animated, StyleSheet } from "react-native";
import TaskList from "./TaskList";

const styles = StyleSheet.create({
  taskItem: {
    backgroundColor: "#fff",
    marginBottom: 10,
    paddingVertical: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "grey"
  },

  separatorLine: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    paddingVertical: 10,
  },

  taskHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  
  taskText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#333",
    left: 30,
  },
  completedTaskText: {
    textDecorationLine: "line-through",
    color: "gray",
  },

  buttonContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 10,
    position: 'absolute',
    right: 0,
    marginRight: 10,
  },
  
  editContainer: {
    flexDirection: 'column', 
    paddingHorizontal: 60,
    justifyContent: 'space-between',
  },

  editButton: {
    justifyContent: 'center', 
    flexDirection: 'column',
  },

  addButton: {
    color: "#007BFF",
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "center",
    alignItems: "center",
    fontSize: 25,
    borderWidth: 1,
    borderColor: "#007BFF",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    width: 150
  },

  inputText: {
    borderWidth: 1, 
    borderColor: 'grey',
    alignSelf: "center", 
    borderRadius: 10, 
    paddingHorizontal: 10, 
    marginTop: 20, 
    paddingVertical: 10, 
    width: 380, 
  },
  
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 6,
    marginVertical: 6,
  },
  
  taskBottom: {
    justifyContent: "center",
    alignItems: "center",
  },

  taskTextContainer: {
    flex: 1,
  },

  taskDescription: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    alignSelf: "center",
    paddingTop: 20,
  },

  taskStatus: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    alignSelf: "center",
  },

  taskDeadline: {
    fontSize: 16,
    color: "#DD1D07",
    textAlign: "center",
    alignSelf: "center",
  },

  taskCreatedAt: {
    fontSize: 16,
    color: "#006FC8",
    textAlign: "center",
    alignSelf: "center",
  },
  
  container: {
    paddingHorizontal: 25,
    paddingVertical: 25,
  }
});

export default styles;
