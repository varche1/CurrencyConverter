import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import color from 'color';

import styles from './styles';

const InputWithButon = (props) => {
  const { onPress, buttonText, editable = true } = props;
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier);

  const contaiterStyle = [styles.container];
  if (editable === false) {
    contaiterStyle.push(styles.containerDisabled);
  }

  return (
    <View style={contaiterStyle}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.buttonContainer}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
    </View>
  );
};

InputWithButon.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
};

export default InputWithButon;
