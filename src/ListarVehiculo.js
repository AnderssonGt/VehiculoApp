import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Alert,
  Pressable,
  Image,
  FlatList,
  Modal
} from 'react-native'
import PocketBase from 'pocketbase';

const ListarVehiculo = ({setMostrarListado}) => {

  const client = new PocketBase('http://127.0.0.1:8090');

  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    getMarcas()
  })

  const getMarcas = () => {
    client.records.getList('marca', 1, 50).then((result: any) => {
      // success...
      

      setMarcas(result.items)

    }).catch((error) => {
      // error...
      console.log('Error:', error);
    });
  }

  
  return (
    <SafeAreaView>

      <Pressable
        style={styles.botonAgregar}
        onPress={() => {setMostrarListado(false)}}
      >
        <Text style={styles.textoBoton}>CERRAR</Text>
      </Pressable>
      
      <Text style={styles.txt}>
        Marcas:
      </Text>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop:60
  },
  botonAgregar: {
    borderRadius: 25,
    backgroundColor: '#fff',
    marginHorizontal: 80,
    padding: 10,
    transform: [{ translateY: 50 }],
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,

    marginTop: -40
  },
  textoBoton: {
    color: '#000',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
  
});

export default ListarVehiculo;
