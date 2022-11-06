import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Alert,
  Pressable,
  Image,
  ScrollView,
  Modal
} from 'react-native'
import ListarVehiculo from './src/ListarVehiculo';
import Encabezado from './src/Cuerpo';
import Cuerpo from './src/Cuerpo';
import PocketBase from 'pocketbase';


const App = () => {

  const [Marca, setMarca] = useState('');
  const [MostrarListado, setMostrarListado] = useState(false);

  return (

    <SafeAreaView style={styles.cuerpo}>
      <ScrollView>

        <Text style={styles.txt}>Nuevo Vehiculo</Text>
        <Image
          style={styles.imagen}
          source={require('./img/vehiculo.png')}
        ></Image>
        
        <Cuerpo
          Marca={Marca}
          setMarca={setMarca}
          setMostrarListado={setMostrarListado}
        />

        <Modal
        animationType='slide'
        visible={MostrarListado}
        >
        <ListarVehiculo
        MostrarListado={MostrarListado}
        setMostrarListado={setMostrarListado}
        />
        </Modal>

        

      </ScrollView>
    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  imagen: {
    width: '100%',
    height: 150,
    marginHorizontal: 5
  },
  txt: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#fff',
    textTransform: 'uppercase',
  },
  cuerpo: {
    backgroundColor: '#000',
    flex: 0,
  },
});

export default App;
