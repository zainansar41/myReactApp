import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image,Alert } from 'react-native';
import { useState } from 'react';
import pizza from '../assets/pizza.jpg'
import shawarma from '../assets/shawarma.jpg'
import burger from '../assets/burger.jpg'


const category_btn = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={()=>{
        Alert.alert('want to see category ',item.title)
    }}>
        <Image style={styles.card_img} source={item.img} />
        <Text style={styles.card_text}>{item.title}</Text>

    </TouchableOpacity>
);

export default function Category() {
    const [Category, setCategory] = useState([
        {
            key: 1,
            title: "Pizza",
            img: pizza
        },
        {
            key: 2,
            title: "Burger",
            img: burger
        },
        {
            key: 3,
            title: "shawarma",
            img: shawarma
        }
    ])
    return (
        <>
            <View style={styles.catogery_div}>
                <FlatList
                    data={Category}
                    keyExtractor={item => item.key}
                    renderItem={category_btn}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    catogery_div:{
        margin:10,
        marginLeft:30
    },
    card: {
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-evenly',
        alignItems:'center',
        width: 180,
        height: 70,
        backgroundColor:'lightgrey',
        borderRadius:10,
        marginLeft:20
    },
    card_img: {
        width: 60,
        height: 60,
        borderRadius: 60
    },
    card_text:{
        fontSize:20,
        fontWeight:'600',
    }
})