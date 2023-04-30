import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserMap = () => {
  const navigation = useNavigation();

  const handleImageClick = () => {
    // Navigate to the next page here
    navigation.navigate('navigateAuto');
  };

  return (
    <TouchableOpacity onPress={handleImageClick} style={styles.container}>
      <Image
        source={require('../../public/assests/images/findRide.png')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginTop: 20,
    width: "100%",
    height: "100%",
  },
});

export default UserMap;
