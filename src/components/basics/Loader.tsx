import React, {FC} from 'react';
import {ActivityIndicator, Platform, StatusBar, View} from 'react-native';
import loaderStyles from '../../styles/loaderStyles';
import colors from '../../utility/colors';
import {LoaderProps} from '../../types/LoaderProps';

const Loader: FC<LoaderProps> = ({isLoading}) =>
  isLoading ? (
    <View
      style={[
        Platform.OS == 'ios' ? {} : loaderStyles.modalView,
        loaderStyles.loaderStyle,
      ]}>
      <ActivityIndicator size={'large'} color={colors.primary} />
    </View>
  ) : null;

export default Loader;
