import React, { Component } from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';

import Logo from '../../../assets/pizza-icon-gray.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export default class Home extends Component {

    listaPedidos = async () => {
        this.props.navigation.navigate('Main');
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.logoContainer}>
                    <Image source={Logo} style={{width: 115, height: 120,alignSelf: 'center'}}/>
                </View>
                
                <Text style={styles.tituloTxt}>O que você deseja fazer Hoje?</Text>

                <TouchableOpacity style={styles.floatButton} onPress={() => this.listaPedidos()}>
                    <Icon name='add' size={24} color="#FFF" />
                </TouchableOpacity>               
                
            </View>
        );
    }
}