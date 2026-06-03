import { View, Text } from "react-native";

export default function HomeScreen({ route }) {
  const selectedCourse = route?.params?.selectedCourse;

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Selamat Datang Mahasiswa
      </Text>

      {selectedCourse && (
        <View
          style={{
            backgroundColor: "#E3F2FD",
            padding: 15,
            borderRadius: 10,
          }}
        >
          <Text>Mata Kuliah Dipilih:</Text>

          <Text
            style={{
              fontWeight: "bold",
              marginTop: 5,
            }}
          >
            {selectedCourse}
          </Text>
        </View>
      )}
    </View>
  );
}