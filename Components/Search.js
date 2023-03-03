import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Search() {
    return (
        <View style={styles.search_view}>

            <TextInput style={styles.search_bar} placeholder='search your food' />
            <Text style={styles.search_btn}>search!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    search_view: {
        display: 'flex',
        flexDirection: 'row'
    },
    search_bar: {
        width: 250,
        height: 40,
        paddingLeft: 20,
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginLeft:30
    },
    search_btn: {
        fontSize: 18,
        marginLeft:20,
        fontWeight:'bold',
        marginTop:5

    }
})