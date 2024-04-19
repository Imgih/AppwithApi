import React from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { styles } from "../styles";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebase/firebaseconfig";
import { useNavigation } from '@react-navigation/native';


export default function NewUser() {
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [ConPass, setConPass] = useState('');

    const auth = FIREBASE_AUTH
    const navigation = useNavigation();

    function newUser() {
        if(email === '' || Password === '' || ConPass === '') {
            alert('Todos os campos devem ser preenchidos')
            return;
        }
        if (Password.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres');
            return;
        }
        if(Password !== ConPass) {
            alert('As senhas não são iguais!')
            return;
        } else {
            createUserWithEmailAndPassword(auth, email, Password)
            .then((UserCredential) => {
                const user = UserCredential.user;
                alert('O usuário' + email + 'foi criado. Faça o login')
                navigation.navigate('Login');
            })
            .catch((error) => {
                const errorMessage = error.errorMessage;
                alert(errorMessage);
                navigation.navigate('Login');

            }
        )
        }

    }

    return (
        <View style={styles.fundo}>
            <Text style={styles.formTitle}>Novo Usuário</Text>
            <TextInput
                style={styles.formInput}
                placeholder="Email do Usuário"
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                value= {email}
                onChangeText={setEmail}
                placeholderTextColor="gray"
            />
            <TextInput
                style={styles.formInput}
                placeholder="Senha"
                autoCapitalize="none"
                secureTextEntry
                value= {Password}
                onChangeText={setPassword}
                placeholderTextColor="gray"
            />
             <TextInput
                style={styles.formInput}
                placeholder="Confirme a senha"
                autoCapitalize="none"
                secureTextEntry
                value= {ConPass}
                onChangeText={setConPass}
                placeholderTextColor="gray"
            />
            <Pressable
                style={styles.SendButton}
                onPress={newUser}
            >
                <Text style={styles.textButton}>
                    Cadastrar
                </Text>
            </Pressable>
            
        </View>
    )
}