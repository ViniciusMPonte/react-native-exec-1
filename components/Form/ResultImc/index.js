import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import styles from "./style"

export default function ResultImc(props) {
    return (
        <View>
            <View style={styles.shareView}>
                {props.resultImc == null ? (
                    <View />
                ) : (
                    <TouchableOpacity style={styles.shareButton}>
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
