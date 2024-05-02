
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Alert } from "react-native";
import React, * as react from "react";
import { db } from "../../firebase/firebaseconfig";
import {
  doc,
  setDoc,
  deleteDoc,
  collection,
  updateDoc,
  getDoc,
} from "firebase/firestore";

export default function Crud() {
  const [name, setName] = react.useState<string>("");
  const [descricao, setDescricao] = react.useState<string>("");
  const [preco, setPreco] = react.useState<number>();
  const [quantidade, setQuantida] = react.useState<number>();
  const [prodInfo, setProdInfo] = react.useState<any | undefined>(null);
  


  const handleCreate = async () => {
    try {
      await setDoc(doc(db, "estoque", name), {
        Produto: name,
        Nome: name,
        descricao: descricao,
        preco: preco,
        quantidade: quantidade
      });
      Alert.alert("Sucesso", "Produto criado com sucesso!");
    } catch (error: any) {
      console.log("Erro ao criar o documento: ", error);
    }
  }

  const handleRead = async () => {
    try {
      const docRef = doc(db, "estoque", name);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const data = docSnap.data();
        setProdInfo({
          Nome: data.Nome,
          descricao: data.descricao,
          preco: data.preco,
          quantidade: data.quantidade
        });
      } else {
        console.log("No such document!");
        setProdInfo(null); // Se não houver documento, defina prodInfo como null para limpar os dados antigos
      }
    } catch (error: any) {
      console.log("Erro ao ler documento: ", error);
    }
  }

  const handleUpdate = async () => {
    try {
      const docRef = doc(db, "estoque", name);
      await updateDoc(docRef, {
        Produto: name,
        Nome: name,
        descricao: descricao,
        preco: preco,
        quantidade: quantidade
      });
      Alert.alert("Sucesso", "Produto atualizado com sucesso!");
    } catch (error: any) {
      console.log("Error updating document: ", error);
    }
  }

  const handleDelete = async () => {
    try {
      const docRef = doc(db, "estoque", name);
      await deleteDoc(docRef);
      Alert.alert("Sucesso", "Produto deletado com sucesso!");
    } catch (error: any) {
      console.log("Erro ao deletar o documento: ", error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={{ color: "white", fontSize: 20 }}>
          Controle de estoque
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Nome"
            style={styles.input}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Descrição"
            onChangeText={(text) => setDescricao(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Preço"
            keyboardType="number-pad"
            style={styles.input}
            onChangeText={(text) => setPreco(Number(text))}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Quantidade"
            keyboardType="number-pad"
            style={styles.input}
            onChangeText={(text) => setQuantida(Number(text))}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.delete} onPress={handleDelete}>
            <Text style={{ color: "white" }}>Deletar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.update} onPress={handleUpdate}>
            <Text style={{ color: "white" }}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.create} onPress={handleCreate}>
            <Text style={{ color: "white" }}>Criar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.read} onPress={handleRead}>
            <Text style={{ color: "white" }}>Busca</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.dataContainer}>
        <Text style={{ color: "white", fontSize: 20, marginBottom: 20, marginTop: 50 }}>Nome: {prodInfo?.Nome}</Text>
        <Text style={{ color: "white", fontSize: 20, marginBottom: 20  }}>Descrição: {prodInfo?.descricao}</Text>
        <Text style={{ color: "white", fontSize: 20, marginBottom: 10  }}>Preço: {prodInfo?.preco}</Text>
        <Text style={{ color: "white", fontSize: 20, marginBottom: 10  }}>Quantidade: {prodInfo?.quantidade}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  content: {
    flex: 1,
    marginTop: 55,
    marginHorizontal: 15,
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dataContainer: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 15,
  },
  // buttons
  delete: {
    backgroundColor: "#771515",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  update: {
    backgroundColor: "#771515",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  create: {
    backgroundColor: "#771515",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  read: {
    backgroundColor: "#771515",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    color: '#white'
    
  },
});
