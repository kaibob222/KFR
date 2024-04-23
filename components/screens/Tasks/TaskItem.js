import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

const TaskItem = ({
  task,
  handleEditTask,
  handleToggleCompletion,
  handleDeleteTask,
  handleAddTask,
}) => {
  return (
    <View style={styles.taskItem}>
      <Text
          style={[
            styles.taskText,
            task.status === "Completed" && styles.completedTaskText,
          ]}
        >
          {task.title}
        </Text>
      <View style={styles.separatorLine} />

      <View style={styles.taskTextContainer}>
        
        <Text style={styles.taskDescription}>{task.description}</Text>
        <Text style={styles.taskStatus}>Status: {task.status}</Text>
        <Text style={styles.taskDeadline}>Deadline: {task.deadline}</Text>
        <Text style={styles.taskCreatedAt}>Created: {task.createdAt}</Text>
      </View>

      {/* Кнопки edit, done и delete */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleEditTask(task)}>
          <Image
            source={require("../../../assets/icons/edit-icon.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleToggleCompletion(task.id)}>
          <Image
            source={require("../../../assets/icons/done-icon.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteTask(task.id)}>
          <Image
            source={require("../../../assets/icons/delete-icon.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* Разделительная линия */}
      
    </View>
  );
};

export default TaskItem;
