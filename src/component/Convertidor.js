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
            setResultado(res.toFixed(2).toString());
        }

    };

    const euro=()=>{
        if (parseFloat(MonedaMXN) <= 0) {
            setResultado("Error: Valor negativo")
        }else {
            const res = parseFloat(MonedaMXN) * 0.048;
            setResultado(res.toFixed(2).toString());
        }
    };

    const yen=()=>{
        if (parseFloat(MonedaMXN) <= 0) {
            setResultado("Error: Valor negativo")
        }else{
            const res = parseFloat(MonedaMXN) * 7.31;
            setResultado(res.toFixed(2).toString());
        }
    };

    const libra=()=>{
        if (parseFloat(MonedaMXN) <= 0) {
            setResultado("Error: Valor negativo")
        }else {
            const res = parseFloat(MonedaMXN) * 0.044;
            setResultado(res.toFixed(2).toString());
        }
    };

    const yuan=()=>{
        if (parseFloat(MonedaMXN) <= 0) {
            setResultado("Error: Valor negativo")
        }else{
            const res = parseFloat(MonedaMXN) * 2.75;
            setResultado(res.toFixed(2).toString());
        }
    };

    const ntd=()=> {
        if (parseFloat(MonedaMXN) <= 0) {
            setResultado("Error: Valor negativo")
        }else {
            const res = parseFloat(MonedaMXN) * 0.61;
            setResultado(res.toFixed(2).toString());
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <Text style={styles.text}>Convertidor de Divisas</Text>
                <Image source={require('../../images/Divisa.png')} style={{margin:10}}/>
                <TextInput
                    style={styles.input}
                    placeholder="Valor MXN"
                    placeholderTextColor="black"
                    keyboardType="numeric"
                    onChangeText={setMonedaMXN}/>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={dolar}>
                        <Text style={styles.buttonText}>Dolar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={euro}>
                        <Text style={styles.buttonText}>Euro</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={yen}>
                        <Text style={styles.buttonText}>Yen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={libra}>
                        <Text style={styles.buttonText}>Libra</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={yuan}>
                        <Text style={styles.buttonText}>Yuan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={ntd}>
                        <Text style={styles.buttonText}>NTD</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.resultado}>Resultado: ${resultado}</Text>
            </View>
        </TouchableWithoutFeedback>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B2FFFF',
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
        marginHorizontal: 15
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
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlignVertical: 'top',
    }
})