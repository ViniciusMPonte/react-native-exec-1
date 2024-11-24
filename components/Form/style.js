import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#fff",
        alignItems: "center",
        marginTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 30,
    },
    formLabel: {
        color: "#000",
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        backgroundColor: "#f6f6f6",
        height: 40,
        width: "90%",
        margin: 12,
        marginBottom: 0,
        borderRadius: 50,
        paddingLeft: 10,
    },
    errorMessage: {
        color: "#ff0043",
        fontWeight: "bold",
        paddingLeft: 20,
        marginBottom: 30
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#ff0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30,
    },
    textButtonCalculator: {
        fontSize: 20,
        color: "#fff",
    },
});

export default styles;
