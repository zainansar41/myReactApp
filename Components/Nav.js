import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import hamburger from '../assets/hamburger.png'

export default function Nav() {
  return (
    <View style={styles.container}>
      <Image style={styles.Image_style} source={hamburger} />
      <Text style={styles.Name}>Hello Zain ul abidin</Text>
      <Text style={styles.Food_tagLine}>Choose Your Favourite Food</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: .23,
    marginTop: 30
  },
  Image_style: {
    width: 30,
    height: 30,
    marginBottom: 20
  },
  Name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  Food_tagLine: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom:15
  }
});