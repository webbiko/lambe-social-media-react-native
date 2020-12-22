import React, {Component} from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import Header from '../components/Header';
import Post from '../components/Post';

const initialState = {
  posts: [
    {
      id: Math.random(),
      nickname: 'Rafael Pereira Filho',
      email: 'rafaelprrflh@gmail.com',
      image: require('../../assets/imgs/fence.jpg'),
      comments: [
        {
          nickname: 'John Ray Sheldon',
          comment: 'Stunning!',
        },
        {
          nickname: 'Ana Julia Arruda',
          comment: 'Foto linda! Onde foi tirada?',
        },
      ],
    },
    {
      id: Math.random(),
      nickname: 'Francisco Leandro Lima',
      email: 'chico@gmail.com',
      image: require('../../assets/imgs/bw.jpg'),
      comments: [],
    },
  ],
};

export default class Feed extends Component {
  state = {
    ...initialState,
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <FlatList
          data={this.state.posts}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({item}) => <Post key={item.id} {...item} />}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
