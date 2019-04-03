import React from 'react';
import { Text, View, ScrollView, StyleSheet, Platform } from 'react-native';

import HeaderComponent from '../Components/HeaderComponent'

export default class MainScreen extends React.Component {
    render(){
        return(
            <View>
            <HeaderComponent {...this.props} ></HeaderComponent>
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.text}>
                    Main !
                </Text>
            </View>
            </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : '#fff',
        justifyContent : 'center',
        alignItems : 'center',
        
    },
    text: {
        fontSize : 30
    }
})