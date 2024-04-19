import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import Login from "../screens/login";
import NewUser from "../screens/cadastro";


const Stack = createNativeStackNavigator();

const AppRoute = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen 
                    name="Login" 
                    component={Login} 
                    options={{ headerShown : false }}
                    />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown : false }}>
                </Stack.Screen>
                <Stack.Screen
                    name="Cadastro"
                    component={NewUser}
                    options={{ headerShown : false }}>
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppRoute;