import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'


export default function LoginPage() {
    return (
        <ScrollView>
            <View><Text>Welcome</Text></View>
            <View><Text>Foodie Moodie</Text></View>
            <View>
                <View>
                    <Text>Email</Text>
                    <TextInput placeholder='E-mail' />
                </View>
                <View>
                    <Text>Password</Text>
                    <TextInput placeholder='Enter Password' />
                </View>
                <View><Text>forgot Password</Text></View>
                <View>
                    <TouchableOpacity>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <View><Text>Or Login with</Text></View>
            </View>
        </ScrollView>
    )
}