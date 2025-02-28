import { StyleSheet, View, Pressable, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type Props = {
  label: String;
  icon?: keyof typeof Ionicons.glyphMap;
  theme?: "primary";
  onPress?: () => void;
};

export default function Button({ theme, label, icon, onPress = (() => alert("You pressed a button")) }: Props) {
  if (theme === "primary") {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18, },
        ]}
      >
        <Pressable style={[styles.button, { backgroundColor: "#fff" }]}>
          <FontAwesome
            name="picture-o"
            size={18}
            color={"#25292e"}
            style={styles.buttonIcon}
            onPress={onPress}
          />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={[styles.buttonContainer, {marginBottom: 3}]}>
      <Pressable
        style={styles.button}
        onPress={onPress}
      >
        {icon ? <Ionicons name={icon} style={styles.buttonIcon} size={24} /> : null}
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  buttonIcon: {
    paddingRight: 8,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonLabel: {
    color: "#000",
    fontSize: 16,
  },
  
});
