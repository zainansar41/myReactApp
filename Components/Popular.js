import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import { useState } from 'react';
import pizza from '../assets/pizza.jpg'
import shawarma from '../assets/shawarma.jpg'
import burger from '../assets/burger.jpg'


const category_btn = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={()=>{
        Alert.alert('Want to Buy?',item.title)
    }}>
        <Image style={styles.card_img} source={item.img} />
        <Text style={styles.card_text}>{item.title}</Text>

    </TouchableOpacity>
);

export default function Popular() {
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
        <View style={styles.Popular_div}>
            <View style={styles.heading_view}>
                <Text style={styles.Popular_tag}>Popular Food</Text>
                <Text style={styles.see_all}>see all</Text>
            </View>
            <View style={styles.catogery_div}>
                <FlatList
                    data={Category}
                    keyExtractor={item => item.key}
                    renderItem={category_btn}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    heading_view: {
        margin: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    Popular_tag: {
        fontSize: 20,
        fontWeight: '800'
    },
    see_all: {
        color: 'blue',
        fontSize: 16
    },
    Popular_div: {
        flex: .7
    },
    catogery_div: {
        margin: 10,
        marginLeft: 30
    },
    card: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: 180,
        height: 180,
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        marginLeft: 20
    },
    card_img: {
        width: 150,
        height: 100,
        borderRadius: 10
    },
    card_text: {
        fontSize: 22,
        fontWeight: '600',
    }
})