import React,{useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, Image} from 'react-native';

export default function Convertidor_Monedas(){
    const[MonedaMXN, setMonedaMXN] = useState('');
    const [resultado, setResultado] = useState('');

    const dolar=()=>{
        if (parseFloat(MonedaMXN) <= 0) {
            setResultado("Error: Valor negativo")
        }else{
            const res = parseFloat(MonedaMXN) * 0.055;
            setResultado("$" + res.toFixed(2).toString());
        }

    };

    const euro=()=>{
        if (parseFloat(MonedaMXN) <= 0) {
            setResultado("Error: Valor negativo")
        }else {
            const res = parseFloat(MonedaMXN) * 0.048;
            setResultado("$" + res.toFixed(2).toString());
        }
    };

    const yen=()=>{
        if (parseFloat(MonedaMXN) <= 0) {
            setResultado("Error: Valor negativo")
        }else{
            const res = parseFloat(MonedaMXN) * 7.31;
            setResultado("$" + res.toFixed(2).toString());
        }
    };

    const libra=()=>{
        if (parseFloat(MonedaMXN) <= 0) {
            setResultado("Error: Valor negativo")
        }else {
            const res = parseFloat(MonedaMXN) * 0.044;
            setResultado("$" + res.toFixed(2).toString());
        }
    };

    const yuan=()=>{
        if (parseFloat(MonedaMXN) <= 0) {
            setResultado("Error: Valor negativo")
        }else{
            const res = parseFloat(MonedaMXN) * 2.75;
            setResultado("$" + res.toFixed(2).toString());
        }
    };

    const ntd=()=> {
        if (parseFloat(MonedaMXN) <= 0) {
            setResultado("Error: Valor negativo")
        }else {
            const res = parseFloat(MonedaMXN) * 0.61;
            setResultado("$" + res.toFixed(2).toString());
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <Text style={styles.text}>Convertidor de Divisas</Text>
                <Text style={styles.text}>Para Pesos Mexicanos</Text>
                <Image source={require('../../images/Divisa.png')} style={{margin:10}}/>
                <TextInput
                    style={styles.input}
                    placeholder="Valor MXN"
                    placeholderTextColor="black"
                    keyboardType="numeric"
                    onChangeText={setMonedaMXN}/>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={dolar}>
                        <Image source={require('../../images/USA.png')} style={styles.icon}/>
                        <Text style={styles.buttonText}>Dolar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={euro}>
                        <Image source={require('../../images/UE.png')} style={styles.icon}/>
                        <Text style={styles.buttonText}>Euro</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={yen}>
                        <Image source={require('../../images/Japon.png')} style={styles.icon}/>
                        <Text style={styles.buttonText}>Yen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={libra}>
                        <Image source={require('../../images/UK.png')} style={styles.icon}/>
                        <Text style={styles.buttonText}>Libra</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={yuan}>
                        <Image source={require('../../images/China.png')} style={styles.icon}/>
                        <Text style={styles.buttonText}>Yuan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={ntd}>
                        <Image source={require('../../images/Taiwan.png')} style={styles.icon}/>
                        <Text style={styles.buttonText}>NTD</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.resultado}>Resultado: {resultado}</Text>
            </View>
        </TouchableWithoutFeedback>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#327ba8',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 25,
        borderWidth: 2,
        color: '#F0F0F0'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 25,
    },
    button: {
        flex: 1,
        backgroundColor: '#D3D3D3',
        padding: 10,
        borderRadius: 10,
        borderColor: 'black',
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    buttonText: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    resultado: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#F0F0F0'
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlignVertical: 'top',
        color: '#F0F0F0'
    },
    icon: {
        width: 35,
        height: 25,
        margin: 5
    }
})