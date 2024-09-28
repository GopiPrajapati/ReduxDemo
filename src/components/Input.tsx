import React, {FC, useState} from 'react';
import {Text, TextInput, Pressable, View, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../utility/colors';
import fonts from '../utility/fonts';
import {InputProps} from '../types/InputProps';

export interface TextInputContainerProps {
  fontSize?: 100;
}

const Input: FC<InputProps> = ({
  hint,
  value,
  onChange,
  style,
  maxLength,
  keyboardType,
  isPassword,
  isLabelShown = true,
  conStyle = {},
  isMandatory = false,
  error = '',
  multiline = false,
  placeholder = null,
  onSubmitEditing,
  editable = true,
  autoCapitalize = 'none',
  label,
  errorStyle,
  leftIcon,
  rightIcon,
  inputTextCon,
  labelTextStyle,
  placeHolderTextColor,
  inputMode,
}) => {
  const [isPassShown, setIsPassShown] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={[styles.textCon, conStyle]}>
      {isLabelShown ? (
        <Text style={[styles.labelText, labelTextStyle]}>
          {label ? label : hint}
          {isMandatory ? (
            <Text style={[styles.error, errorStyle]}>{` *`}</Text>
          ) : null}
        </Text>
      ) : null}
      <View
        style={[
          styles.inputCon,
          {borderColor: isFocus ? colors.purple : colors.placeHolderColor},
          inputTextCon,
        ]}>
        {leftIcon ? leftIcon : null}
        <TextInput
          placeholderTextColor={
            placeHolderTextColor ? placeHolderTextColor : colors.hintColor
          }
          placeholder={placeholder ?? hint}
          style={[styles.input, style]}
          value={value}
          onChangeText={onChange}
          maxLength={maxLength}
          secureTextEntry={isPassword && !isPassShown}
          keyboardType={keyboardType}
          multiline={multiline}
          textAlignVertical={multiline ? 'top' : 'center'}
          onSubmitEditing={onSubmitEditing}
          editable={editable}
          // autoCapitalize={'none'}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          inputMode={inputMode}
          textContentType="oneTimeCode"
          autoCorrect={false}
          spellCheck={false}
          inputAccessoryViewID={'123'}
          autoCapitalize="none"
        />
        {rightIcon ? rightIcon : null}
        {isPassword ? (
          <Pressable onPress={() => setIsPassShown(!isPassShown)}>
            <Feather
              name={isPassShown ? 'eye-off' : 'eye'}
              style={styles.icon}
              size={hp(3)}
            />
          </Pressable>
        ) : null}
      </View>

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};
export default Input;

const styles = StyleSheet.create({
  inputCon: {
    marginTop: hp(0),
    borderRadius: hp(1.1),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: wp(2),
    shadowOffset: {width: 0, height: 0},
    shadowColor: colors.gray,
    shadowRadius: 2,
    shadowOpacity: 0.5,
    elevation: 5,
    borderWidth: hp(0.2),
    borderColor: colors.gray,
  },
  input: {
    fontSize: hp(1.8),
    fontFamily: fonts.sueEllenFrancisco,
    color: colors.black,
    textAlignVertical: 'center',
    paddingVertical: hp(1.4),
    paddingHorizontal: wp(2.5),
    borderRadius: hp(1),
    flex: 1,
  },
  labelText: {
    color: colors.black,
    marginBottom: hp(0.8),
    fontSize: hp(1.7),
    fontFamily: fonts.sueEllenFrancisco,
  },
  error: {
    marginTop: hp(1.5),
    color: colors.red,
    fontSize: hp(1.6),
  },
  icon: {
    color: colors.eyeColor,
    marginEnd: wp(2.5),
  },
  textCon: {
    marginTop: hp(2),
  },
});
