import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback as TWF,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const initialState = {
  comment: '',
  editMode: false,
};
export default class extends Component {
  state = {
    ...initialState,
  };

  handleAddComment = () => {
    Alert.alert('Adicionado!', this.state.comment);
  };

  render() {
    let commentArea = null;
    if (this.state.editMode) {
      commentArea = (
        <View style={styles.container}>
          <TextInput
            placeholder="Pode comentar..."
            style={styles.input}
            autoFocus={true}
            value={this.state.comment}
            onChangeText={(comment) => this.setState({comment})}
            onSubmitEditing={this.handleAddComment}
          />
          <TWF onPress={() => this.setState({editMode: false})}>
            <Icon name="times" size={15} color="#555" />
          </TWF>
        </View>
      );
    } else {
      commentArea = (
        <TWF onPress={() => this.setState({editMode: true})}>
          <View style={styles.container}>
            <Icon name="comment-o" size={25} color="#555" />
            <Text style={styles.caption}>Adicione um comentário...</Text>
          </View>
        </TWF>
      );
    }
    return <View style={styles.mainContainer}>{commentArea}</View>;
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  caption: {
    marginLeft: 10,
    fontSize: 12,
    color: '#CCC',
  },
  input: {
    width: '90%',
  },
});
