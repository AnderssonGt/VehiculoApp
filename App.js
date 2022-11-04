import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Alert,
  Pressable,
  Image,
  ScrollView
} from 'react-native'
import NuevoVehiculo from './src/NuevoVehiculo';
import Encabezado from './src/Cuerpo';
import Cuerpo from './src/Cuerpo';


const App = () => {

  const [Marca, setMarca] = useState('');

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
        />

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
