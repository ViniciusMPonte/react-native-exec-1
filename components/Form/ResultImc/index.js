import { View, Text, TouchableOpacity, Share } from "react-native"
import React from "react"
import styles from "./style"

export default function ResultImc(props) {
    async function onShare() {
        await Share.share({
            message: "Meu imc hoje é: " + props.resultImc,
        })
    }

    return (
        <View>
            <View style={styles.shareView}>
                {props.resultImc == null ? (
                    <View />
                ) : (
                    <TouchableOpacity
                        onPress={onShare}
                        style={styles.shareButton}
                    >
                        <Text style={styles.shareButtonText}>Share</Text>
                    </TouchableOpacity>
                )}
            </View>

            <Text style={styles.messageResultImc}>
                {props.messageResultImc}
            </Text>

            <Text style={styles.resultImc}>{props.resultImc}</Text>
        </View>
    )
}
