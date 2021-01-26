import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeToken = async (value) => {
    try {
      await AsyncStorage.setItem('@storageToken', value)
    } catch (e) {
        console.log(e);
    }
  }

export const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('@storageToken')
    //   if (value !== null) {
        return value;
    //   }
    } catch(e) {
      console.log(e);
    }
  }