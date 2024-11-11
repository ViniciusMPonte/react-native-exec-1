import { View, Text, TextInput, Button } from 'react-native';
import React from 'react';
import ResultImc from './ResultImc.js';


export default function Form(){

    const [height, setHeight] = React.useState(null)
    const [weight, setWeight] = React.useState(null)
    const [messageImc, setMessageImc] = React.useState('preencha o peso e altura')
    const [imc, setImc] = React.useState(null)
    const [textButton, setTextButton] = React.useState('Calcular')

    function imcCalculator() {
        return setImc((weight/(height**2)).toFixed(2))
    }

    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc('Seu imc é igual: ')
            setTextButton('Calcular novamente')
            return
        }
        setImc(null)
        setTextButton('Calcular')
        setMessageImc('preencha o peso e altura')
    }


    return(
        <View>
            <View>

                <Text>Altura</Text>
                <TextInput
                    onChangeText={setHeight}
                    value={height}
                    placeholder='Ex: 1,75'
                    keyboardType='numeric'
                />

                <Text>Peso</Text>
                <TextInput
                    onChangeText={setWeight} 
                    value={weight}
                    placeholder='Ex: 75,365'
                    keyboardType='numeric'
                />

                <Button
                    title={textButton}
                    onPress={() => validationImc()}
                />

            </View>

            <ResultImc
                messageResultImc={messageImc}
                resultImc={imc}
            />

        </View>
    );
}