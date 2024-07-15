import React, {useState} from 'react';
import {TextInput, TextInputProps} from '../components/TextInput/TextInput';
import {Icon} from '../components/Icon/Icon';

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput(props: PasswordInputProps) {
  const [isSecureTextEntry, setSecureTextEntry] = useState(true);
  function toogleSecureTextEntry() {
    setSecureTextEntry(prev => !prev);
  }
  return (
    <TextInput
      {...props}
      secureTextEntry={isSecureTextEntry}
      RightComponent={
        <Icon
          onPress={toogleSecureTextEntry}
          color="gray2"
          name={isSecureTextEntry ? 'eyeOff' : 'eyeOn'}
        />
      }
      boxProps={{mb: 's48'}}
    />
  );
}
