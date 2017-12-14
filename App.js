import React from 'react';
import { StatusBar,StyleSheet, Text, View, Button, Alert,TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '首页', 
    headerTitleStyle :{
      fontFamily: 'PingFangSC-Medium',
      textAlign:'center',
      alignSelf:'center',
      color:'#FFFFFF',
      opacity:0.87,
      fontSize:18
    },
    headerStyle:{
    backgroundColor:'#3F51B5',
    },
    headerLeft: (
      <Icon
        name= "md-menu"
        onPress={() => Alert.alert(
          'Alert Title',
          '打开侧边栏',
        )}
        size={20}
        color='#FFFFFF'
        style={{marginLeft :12, color:'#FFFFFF'}}
      />
    ),
    headerRight: (
      <Icon 
        backgroundColor="#3F51B5" 
      />
    )
  };
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar
          backgroundColor="#3F51B5"
          barStyle="light-content"
        />
        <Text>欢迎来到首页</Text>
      </View>
    )
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
});

export default class App extends React.Component {
  render() {
    return  <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
