import React, {  useState } from "react";

import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
  Modal,
  StatusBar
} from "react-native";
import Formulario from "./src/components/Formulario";

export default function App() {
  //color hooks en la parte superior, no puede ser condicionaesl.
  // const [cliente, setCiente]=useState({})//se aplica arrayDestructuring, multiplesStates, setCliente modifica el state en la app
  // const [clientes, setCientes]=useState([])

  const [modalVisible, setModalVisible] = useState(false); //modalVisible es solo de lectura

  // setTimeout(()=>{
  //   setModalVisible(true)
  // })
  // console.log(modalVisible)//consultar react native debugger o flipperk

  const nuevaCitaHandler = () => {
    console.log("Diste click..");
  };

  return (
    // <Text>Hola mundo</Text>
    //SafeAreaView es solo para android por la parte superiod
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de Citas{" "}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      {/* <Button title='Boton Nuevo' onPress={console.log('Hola desde boton')}>
      </Button> */}
      {/* <Pressable onLongPress={funcionNueva}>
        <Text>Boton Pressable</Text>
      </Pressable> */}
      {/* title es un prop */}
      {/* Dentro de onPress se puede ejecutar javascript */}
      {/* <Button title='Nueva Cita' onPress={console.log('Presionaste en el boton')}>
    
      </Button> */}
      {/* Pressable soporta mas eventos  */}

      {/* pressable hace que cualquier elemento se presione sobre el */}

      {/* <Pressable onPress={()=>{console.log('presionaste el boton')}} onLongPress={()=>{console.log('Mantuviste presionado')}}>
          <Text>Nueva Cita</Text>
        </Pressable> */}
      <Pressable
        style={styles.btnNuevaCita}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
      </Pressable>

      <Formulario modalVisible={modalVisible} />
    </SafeAreaView>
    // <View>
    //   <Text>Hola mundo</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4F6",
    flex: 1,
    marginTop:StatusBar.currentHeight
  },
  titulo: {
    textAlign: "center",
    fontSize: 30,
    color: "#374151",
    fontWeight: "600",
  },
  tituloBold: {
    fontWeight: "900",
    color: "#6D28D9",
  },
  btnNuevaCita: {
    backgroundColor: "#6D28D9",
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextoNuevaCita: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 18,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  noPacientes: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
  },
  listado: {
    marginTop: 50,
    marginHorizontal: 30,
  },
});
