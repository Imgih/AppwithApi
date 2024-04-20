import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { styles } from '../styles';
import { useState } from 'react';
import { FIREBASE_AUTH } from '../firebase/firebaseconfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = FIREBASE_AUTH;
    const navigation = useNavigation();

    function userLogin() {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('Crud');
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            });
    }

    return (
        <View style={styles.fundo}>
            <Text style={styles.formTitle}>Login</Text>
            <StatusBar style="auto" />
            <TextInput
                style={styles.formInput}
                placeholder="E-mail"
                keyboardType='email-address'
                autoCapitalize='none'
                autoComplete='email'
                value={email}
                onChangeText={setEmail}
                placeholderTextColor="gray"
            />
            <TextInput
                style={styles.formInput}
                placeholder="Senha"
                autoCapitalize='none'
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                placeholderTextColor="gray"
            />
            <Pressable style={styles.formButton} onPress={userLogin}>
                <Text style={styles.textButton}>Login</Text>
            </Pressable>
            <View style={styles.forgot}>
                <Pressable style={styles.subButton}>
                    <Text style={styles.subTextButton}>Esqueci a senha</Text>
                </Pressable>
                <Pressable style={styles.subButton} onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.subTextButton}>Cadastro</Text>
                </Pressable>
            </View>
        </View>
    );
}
