import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAsyncStorage = () => {


    const setStorage = async (key: string, value: string): Promise<void> => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (err) {
            console.log(err);
        }
    };

    const getStorage = async (key: string): Promise<string | null | undefined> => {
        try {
            const value = await AsyncStorage.getItem(key);
            return value;
        } catch (err) {
            console.log(err);
        }
    };

    return {
        setStorage,
        getStorage
    }
}
