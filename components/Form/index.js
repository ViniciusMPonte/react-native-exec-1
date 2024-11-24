import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard,
} from "react-native"
import React from "react"
import ResultImc from "./ResultImc"
import styles from "./style"

export default function Form() {
    //STATES
    const [height, setHeight] = React.useState(null)
    const [weight, setWeight] = React.useState(null)
    const [messageImc, setMessageImc] = React.useState(
        "preencha o peso e altura"
    )
    const [imc, setImc] = React.useState(null)
    const [textButton, setTextButton] = React.useState("Calcular")
    const [errorMessage, setErrorMessage] = React.useState(null)

    //FUNCTIONS
    function imcCalculator() {
        let weightNumber = parseFloat(weight.replace(',', '.'))
        let heightNumber = parseFloat(height.replace(',', '.'))
        return setImc((weightNumber / heightNumber ** 2).toFixed(2))
    }

    function verificationImc() {
        if (imc == null) {
            setErrorMessage("campo obrigatório*")
            Vibration.vibrate()
        }
    }

    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual: ")
            setTextButton("Calcular novamente")
            setErrorMessage(null)
            return
        }
        verificationImc()
        setTextButton("Calcular")
        setMessageImc("preencha o peso e altura")
        setImc(null)
    }

    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex: 1,75"
                    keyboardType="numeric"
                    style={styles.input}
                />
                <Text style={styles.errorMessage}>{errorMessage}</Text>

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex: 75,365"
                    keyboardType="numeric"
                    style={styles.input}
                />
                <Text style={styles.errorMessage}>{errorMessage}</Text>

                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => validationImc()}
                >
                    <Text style={styles.textButtonCalculator}>
                        {textButton}
                    </Text>
                </TouchableOpacity>
            </View>

            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </Pressable>
    )
}
