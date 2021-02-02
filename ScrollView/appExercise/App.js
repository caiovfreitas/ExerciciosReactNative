import React, { Component }from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import Pessoas from './src/Pessoas';
class App extends Component{

  constructor(props){
    super(props);
      this.state={
        feed:[
          {id:1, nome: 'Caio', idade: '24', email: 'caio@gmail.com'},
          {id:2, nome: 'Leticia', idade: '22', email: 'leticya@gmail.com'},
          {id:3, nome: 'Lara', idade: '07', email: 'lara@gmail.com'},
          {id:4, nome: 'Paulo', idade: '15', email: 'paulo@gmail.com'},
        ]
      };
  }

  render(){
    return(
      <View style={styles.container}>

      <FlatList 
      data={this.state.feed}
      keyExtractor={(item) => item.id}
      renderItem={ ({item}) => <Pessoas data={item} /> }
      />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});

export default App;