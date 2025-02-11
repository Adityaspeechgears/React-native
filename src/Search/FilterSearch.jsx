


import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const App = () => {
  const Data = [
    { label: "Dancing", value: "dancing" },
    { value: "1", label: "JAVA" },
    { value: "2", label: "OPPS" },
    { value: "3", label: "JAVASCRIPT" },
    { value: "4", label: "PYTHON" },
  ];

  const [list, setList] = useState(Data);
  const [search, setSearch] = useState("");

  const filterList = (query) => {
    if (query === "") {
      setList(Data); // Reset to full list if the search query is empty
    } else {
      const newList = Data.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      );
      setList(newList);
    }
  };

  useEffect(() => {
    filterList(search);
  }, [search]);

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.search}>
        <Icon name="search" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="#999"
          value={search}
          onChangeText={(val) => setSearch(val)}
        />
      </View>

      {/* Filtered List */}
      <FlatList
        data={list}
        keyExtractor={(item) => item.value} // Fixed key extractor
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listText}>{item.label}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No results found</Text>
        } // Handle empty state
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  search: {
    flexDirection: "row",
    backgroundColor: "#EBE9E9",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 5,
    color: "#000",
  },
  listItem: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#EBE9E9",
    borderRadius: 5,
  },
  listText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  emptyText: {
    textAlign: "center",
    color: "#999",
    marginTop: 20,
    fontSize: 16,
  },
});

