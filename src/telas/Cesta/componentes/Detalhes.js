import React from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco, botao }) {
    return <>
    <Texto style={estilos.nome}>{ nome }</Texto>
    <View style={estilos.fazenda}>
        <Image source={ logoFazenda } style={estilos.imagemFazenda} />
        <Texto style={estilos.nomeFazenda}>{ nomeFazenda }</Texto>
    </View>
    <Texto style={estilos.descricao}>
        { descricao }
    </Texto>
    <Texto style={estilos.preco}>{ preco }</Texto>

    <Pressable style={estilos.botao} onPress={() => {
            style={
                backgroundColor: "#1a6b59"
            }
        }
    }>
        <Texto style={estilos.textoBotao}> { botao } </Texto>
    </Pressable>
    </>
}

const estilos = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    botao: {
        marginTop: 16,
        backgroundColor: "#2a9f85",
        paddingVertical: 16,
        borderRadius: 6,

    },
    textoBotao: {
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    },
})