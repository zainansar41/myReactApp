import { View, Text, StyleSheet, SectionList, Image, TouchableOpacity } from 'react-native'

import React, { useState, useEffect } from 'react'






export default function SectionPage() {
    const [Category, setCategory] = useState([
        {
            key: 1,
            title: "Pizza",
            data: [{ key: 1, title: "tikka" }, { key: 2, title: "chicken" }, { key: 3, title: "beef" }]
        },
        {
            key: 2,
            title: "Burger",
            data: [{ key: 4, title: "Cheese  burger" }, { key: 5, title: "patty burger" }, { key: 6, title: "beef" }]
        },
        {
            key: 3,
            title: "shawarma",
            data: [{ key: 7, title: "Cheese  shawarma" }, { key: 8, title: "Zinger Shawarma" }, { key: 9, title: "Arabic Shawarma" }]
        },
        {
            key: 4,
            title: "Drinks",
            data: [{ key: 10, title: "Coke" }, { key: 11, title: "Sprite" }, { key: 6, title: "Fanta" }]
        }

    ])
    const [pizzaclr, setpizzaclr] = useState([])

    return (
        <>
            <View style={styles.catogery_div}>
                <SectionList
                    sections={Category}
                    // horizontal
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={{ fontWeight: 'bold', marginTop: 50, fontSize: 25, marginBottom: 40 }}>{title}</Text>
                    )}
                    keyExtractor={item => item.key}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={[styles.card, { backgroundColor: pizzaclr[item.key] ? "red" : "lightgrey" }]} onPress={() => {
                            setpizzaclr(prevState => {
                                const newState = [...prevState];
                                newState[item.key] = !newState[item.key];
                                return newState;
                            });
                        }}>
                            <Text style={styles.card_text}>{item.title}</Text>

                        </TouchableOpacity>
                    }
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    catogery_div: {
        margin: 10,

    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: 350,
        height: 70,
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        marginLeft: 10,
        marginBottom: 20,

    },
    card_img: {
        width: 60,
        height: 60,
        borderRadius: 60
    },
    card_text: {
        fontSize: 20,
        fontWeight: '600',
    }
})