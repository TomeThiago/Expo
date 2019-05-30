import React, { Component } from 'react';

import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { AsyncStorage } from "react-native";

import api from '../../services/api';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../../../assets/DeliveryLogo.png';
import styles from './styles';

export default class Login extends Component {
    state = {
        user: '',
        pass: '',
        showPass: true,
        press: false
    }

    async componentDidMount() {
        const box = await AsyncStorage.getItem('@DeliveryNow: user');
        /*if (box) {
            this.props.navigation.navigate('Main');    
        }*/
    }

    handleSignIn = async () => {
        const response = await api.post('/authenticate', {
                user: this.state.user,
                password: this.state.pass
        });

            const { usuario } = response.data;
            
            await AsyncStorage.setItem('@DeliveryNow: user', usuario);
            this.props.navigation.navigate('Main');
    }

    showPass = () => {
        if (this.state.press == false){
            this.setState({ showPass: false, press: true});
        }else {
            this.setState({ showPass: true, press: false})
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.tituloTxt}>Delivery Now</Text>

                <View style={styles.logoContainer}>
                    <Image source={Logo} style={{width: 110, height: 110,alignSelf: 'center'}}/>
                </View>

                <View>
                    <TextInput style={styles.input}
                        placeholder="Digite seu usuário ou email"
                        placeholderTextColor="#FFF"
                        returnKeyType="next"
                        keyboardType="email-address"
                        autoCapitalize='none'
                        autoCorrect={false}
                        onSubmitEditing={() => this.passwordInput.focus()}
                        onChangeText={(user) => this.setState({user})}
                        underlineColorAndroid="transparent"
                    />
                    
                    <TextInput style={styles.input}
                        placeholder="Digite sua senha"
                        placeholderTextColor="#FFF"
                        returnKeyType="go"
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={this.state.showPass}
                        ref={(input) => this.passwordInput = input}
                        onChangeText={(pass) => this.setState({pass})}
                        underlineColorAndroid="transparent">
                    </TextInput>
                </View>

                <TouchableOpacity style={styles.inputIconEye}
                    onPress={this.showPass}>
                    <Icon name={this.state.press == false ? 'ios-eye': 'ios-eye-off'} size={28} color={'#FFF'}/>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={this.handleSignIn} style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}