import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';


import Page1 from './Pages/Page1';
import FirstPage from './Pages/FirstPage';
import LoginPage from './Pages/LoginPage';



export default function App() {
  return (
    <>
      {/* <Page1/> */}
      {/* <FirstPage/> */}
      <LoginPage/>
    </>

  );
}

const styles = StyleSheet.create({
  category_head: {
    margin: 20,
    fontSize: 18,
    fontWeight: 'bold'
  }
})

