
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState([]);
  const [items, setItems] = useState([
    { label: 'Dancing', value: 'dancing' },
    { label: 'Singing', value: 'singing' },
    { label: 'Something', value: 'something' },
    { label: 'Nothing', value: 'nothing' },
    { label: 'Music', value: 'musics' },
    { label: 'Movie', value: 'movies' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Activities</Text>
      <DropDownPicker
        open={isOpen}
        setOpen={setIsOpen} // Handles dropdown opening and closing
        value={currentValue}
        setValue={setCurrentValue} // Updates selected values
        items={items}
        setItems={setItems} // Updates item list (useful if you want to add/remove dynamically)
        maxHeight={200}
        multiple={true} // Enables multiple selection
        min={1} // Minimum number of selections required
        max={4} // Maximum number of selections allowed
        placeholder="Select Your Choice"
        placeholderStyle={{ color: 'gray', fontWeight: 'bold', fontSize: 16 }}
        showTickIcon={true}
        disableBorderRadius={true}
        theme="LIGHT"
         // theme="Dark"
        mode="BADGE" // Displays selected items as badges
        badgeColors={['red', 'blue', 'green', 'black']}
        badgeTextStyle={{ color: 'white' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default App;


