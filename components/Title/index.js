import { Text, View } from 'react-native';
import styles from './styles';


export default function Title(){
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>ONEBITHEALTH</Text>
        </View>
    );
}