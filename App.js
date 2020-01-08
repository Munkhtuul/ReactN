import React, { Component } from 'react';
import { Button, StyleSheet, View, Text, TextInput, Image, FlatList } from 'react-native';

export default class ButtonBasics extends Component {
  state  = {
    message: 'I am state'
  }

  handleButton = () => {
    this.setState({
      message: 'Button was clicked'
    });
  }
  render() {
    console.log("hello");
    return (

      <View style={styles.container}>
          <Text style={styles.bigBlue}>1</Text>
          <Text style={styles.red}>2</Text>
          <Text style={[styles.bigBlue, styles.red]}>5</Text>
          <Text>{this.state.message}</Text>
          <Image
            source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
            style={{width: 50, height: 50}}
          />
          <TextInput
            style={{height: 40,width: 200, borderWidth: 1,backgroundColor:'powderblue', borderColor: 'lightgray'}}
            value={this.state.message}
            onChangeText={(text) => this.setState({ message:text })}
          />
          <Button
            onPress = {this.handleButton}
            title= " My button"
            color = "#841584"
          />
          <FlatList
            data={[{ key: 'a'},{ key: 'b'}]}
            renderItem={({ item }) => <Text>{item.key}</Text>}
          />
          
      </View>
 
    );
  }
}




const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',    
  },
  bigBlue: {
    color: 'blue',
    fontWeight: "200",
    fontSize: 40,
  },
  red: {
    color: 'red',
  },
});

 


