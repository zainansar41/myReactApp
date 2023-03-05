import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'


export default function LoginPage() {
    return (
        <ScrollView >
            <View style={styles.Login}>
                <View style={styles.welcome}><Text style={styles.welcome_txt}>Welcome</Text></View>
                <View style={styles.Foodie_moodie}><Text style={styles.Foodie_moodie_txt}>Foodie Moodie</Text></View>
                <View style={styles.input_fields}>
                    <View style={styles.input}>
                        <Text style={styles.input_txt}>Email</Text>
                        <TextInput style={styles.input_field} placeholder='E-mail....' />
                    </View>
                    <View style={styles.input} >
                        <Text style={styles.input_txt}>Password</Text>
                        <TextInput style={styles.input_field} placeholder='Enter Password' />
                    </View>
                    <View style={styles.forgot}><Text style={styles.forgot_txt}>forgot Password?</Text></View>
                    <View style={styles.btn_div}>
                        <TouchableOpacity style={styles.Login_btn}>
                            <Text style={styles.Login_btn_Text}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.other}>
                    <View><Text style={styles.Login_with}>Or Login with</Text></View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Login: {
        flex: 1,
        display: 'flex',
        margin: 40
    },
    welcome: {
        flex: .3,
        marginTop: 40,
    },
    welcome_txt: {
        fontSize: 28,
        fontWeight: '700'
    },
    Foodie_moodie: {
        marginTop: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Foodie_moodie_txt: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#F16767'
    },
    input_fields: {
        marginTop: 30
    },
    input: {
        display: 'flex',
        flexDirection: 'row',
        height: 45,
        backgroundColor: '#EEEEEE',
        paddingHorizontal: 10,
        borderRadius:10,
        marginBottom:40
    },
    input_txt: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: '600',
        textAlign:'center'
    },
    input_field: {
        height: 45,
        width: 250,
        paddingLeft: 15,
        fontSize: 18
    },
    forgot:{
        marginTop:-30,
        marginLeft:200,
    },
    forgot_txt:{
        color:'blue'
    },
    btn_div: {
        marginTop: 40,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
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
        fontSize: 24,
        color:'#fff'
    },
    other:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    Login_with:{
        fontSize:16,
        marginBottom:40
    }
})