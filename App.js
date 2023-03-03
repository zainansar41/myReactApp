import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Nav from './Components/Nav';
import Search from './Components/Search';
import Category from './Components/Category';
import Popular from './Components/Popular';

export default function App() {
  return (
    // <Bottom/>
    <ScrollView>
      <Nav />
      <Search />
      <Text style={styles.category_head}>Food Category</Text>
      <Category/>
      <Popular/>

    </ScrollView>
  );
}

const styles= StyleSheet.create({
  category_head:{
    margin:20,
    fontSize:18,
    fontWeight:'bold'
  }
})

