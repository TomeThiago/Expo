import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { AsyncStorage } from "react-native";

import api from '../../services/api';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export default class Main extends Component {
    state = { 
        pedido: [], 
        pedidoInfo: {},
        page: 1,
        novoPedido: ''
    };

    async componentDidMount() {
        this.loadPedidos();
    }

    loadPedidos = async (page = 1) => {
        const response = await api.get(`/pedido?page=${page}`);
        const { docs, ...pedidoInfo } = response.data;
        this.setState({ 
            pedido: [... this.state.pedido, ...docs], 
            pedidoInfo ,
            page
        });
    }

    novoPedido = async () => {
        const response = await api.post('/pedido', {});
        await AsyncStorage.setItem('@DeliveryNow: pedido', response.data._id);
        this.props.navigation.navigate('Itens');
    }

    consultarPedido = async (ID) => {
        await AsyncStorage.setItem('@DeliveryNow: pedido', ID);
        this.props.navigation.navigate('Itens');
    }

    excluirPedido = async (ID) => {
        await api.delete(`/pedido/${ID}`);
        this.setState({ pedido: []});
        this.loadPedidos();
        Alert.alert('Atenção','Pedido excluído com sucesso!');
    }

    renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => this.consultarPedido(item._id)} style={styles.items} 
            onLongPress={() => this.loadOptions(item._id)}>
            <View style={styles.pedidoContainer}>
                <Text style={styles.pedidoNumero}>{item.numero}</Text>
            </View>
            <Text style={styles.pedidoMesa}>{item.mesa}</Text>
            
            <Text style={styles.pedidoTotal}>{item.total.toFixed(2)}</Text>    
        </TouchableOpacity>
    );

    loadMoreItems = () => {
        const { page, pedidoInfo } = this.state;

        if (page === pedidoInfo.pages) return;

        const pageNumber = page + 1;

        this.loadPedidos(pageNumber);
    }

    loadOptions = (ID) => {
        Alert.alert(
            'Alerta',
            'Deseja excluir o pedido selecionado?',
            [
              {
                text: 'Não',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'Sim', onPress: () => this.excluirPedido(ID)},
            ],
            {cancelable: false},
          );
    }



    render() {
        return ( 
            <View style={{flex: 1}}>
                <View style={styles.container}>
                    <FlatList
                        contentContainerStyle={styles.list}
                        data={this.state.pedido}
                        keyExtractor={item => item._id}
                        ItemSeparatorComponent={() => <View style={styles.separator} />}
                        renderItem={this.renderItem}
                        refreshing={true}
                        onEndReached={this.loadMoreItems}
                        onEndReachedThreshold={0.2}
                    />
                    
                    <TouchableOpacity style={styles.floatButton} onPress={() => this.novoPedido()}>
                        <Icon name='add' size={24} color="#FFF" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}