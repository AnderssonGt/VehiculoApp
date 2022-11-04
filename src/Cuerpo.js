import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Alert,
  Pressable,
  Image,
  TextInput,
  ScrollView,
} from 'react-native'
import { Picker } from '@react-native-picker/picker';

const Cuerpo = ({ setMarca, Marca }) => {
  return (

    <View style={styles.cuerpo}>

      <View style={styles.contenedor}>

        <Text style={styles.txt}>Marca</Text>
        <Picker
          selectedValue={Marca}
          onValueChange={Item => setMarca(Item)}
        >
          <Picker.Item label='- Seleccione Marca -' value='' />
        </Picker>
      </View>

      <View style={styles.contenedor}>
        <Text style={styles.txt}>Linea</Text>
        <Picker
          selectedValue={Marca}
          onValueChange={Item => setMarca(Item)}
        >
          <Picker.Item label='- Seleccione Linea -' value='' />
        </Picker>
      </View>

      <View style={styles.contenedor}>
        <Text style={styles.txt}>color</Text>
        <Picker
          selectedValue={Marca}
          onValueChange={Item => setMarca(Item)}
        >
          <Picker.Item label='- Seleccione Color-' value='' />
        </Picker>
      </View>

      <View style={styles.contenedor}>

        <Text style={styles.txt}>Vehiculo</Text>
        <View style={styles.cajainput}>
          <TextInput
            style={styles.input}
            placeholder='Ingrese Matricula'
            value={''}
            onChangeText={''}
          >
          </TextInput>
        </View>

        <Picker
          selectedValue={Marca}
          onValueChange={Item => setMarca(Item)}
        >
          <Picker.Item label='- Seleccione Numero De Puertas-' value='' />
        </Picker>

        <Picker
          selectedValue={Marca}
          onValueChange={Item => setMarca(Item)}
        >
          <Picker.Item label='- Seleccione Tamaño Del Motor-' value='' />
        </Picker>

        <View style={styles.cajainput}>
          <TextInput
            style={styles.input}
            placeholder='Ingrese Año Del Vehiculo'
            value={''}
            onChangeText={''}
          >
          </TextInput>
        </View>

        <Picker
          selectedValue={Marca}
          onValueChange={Item => setMarca(Item)}
        >
          <Picker.Item label='- Seleccione Tipo De Caja-' value='' />
        </Picker>

        <Picker
          selectedValue={Marca}
          onValueChange={Item => setMarca(Item)}
        >
          <Picker.Item label='- Seleccione Tipo De Vidrios-' value='' />
        </Picker>

        <Picker
          selectedValue={Marca}
          onValueChange={Item => setMarca(Item)}
        >
          <Picker.Item label='- Seleccione Tipo De Combustible-' value='' />
        </Picker>

      </View>

      <Pressable
        style={styles.botonAgregar}
        onPress={() => {}}
      >
        <Text style={styles.textoBoton}>Guardar Vehiculo</Text>
      </Pressable>
    </View>


  );
}
const styles = StyleSheet.create({
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',

  },
  cuerpo: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    minHeight: 950,
    marginBottom: 10,
    borderBottomRightRadius: 50,
  },
  contenedor: {
    borderRadius: 25,
    backgroundColor: '#fff',
    marginHorizontal: 15,
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

    marginTop: 10
  },
  cajainput: {
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 10
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

    marginTop: 15
  },
  textoBoton: {
    color: '#000',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
});

export default Cuerpo;
