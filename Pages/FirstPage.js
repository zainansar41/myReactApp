import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import backgroundImg from '../assets/backgroundImg.jpg'

export default function FirstPage() {
    return (
        <ImageBackground source={backgroundImg} style={styles.background}>
            <View style={{ flex: .8 }}></View>
            <View style={styles.content_view}>
                <Text style={styles.tagline_1}>Enjoy your Fast Food only in Foodie Moodie</Text>
                <Text style={styles.tagline_2}>This is the best place to buy food you want</Text>

                <View style={styles.btn_div}>
                    <TouchableOpacity style={styles.Login_btn}>
                        <Text style={styles.Login_btn_Text}>
                            Login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signup_btn}>
                        <Text style={styles.signup_btn_Text}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>

    )
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch' or 'contain'
    },
    content_view: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tagline_1: {
        fontSize: 30,
        fontStyle: 'italic',
        width: 350,
        fontWeight: '700',
        lineHeight: 45
    },
    tagline_2: {
        fontSize: 16,
        marginTop: 30
    },
    btn_div: {
        marginTop: 40
    }
    ,
    Login_btn: {
        width: 250,
        height: 60,
        backgroundColor: '#F16767',
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20

    },
    Login_btn_Text: {
        fontSize: 24
    },
    signup_btn: {
        borderColor:'#FCFFE7',
        width: 250,
        height: 60,
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3
    },
    signup_btn_Text: {
        fontSize: 24
    },


})

