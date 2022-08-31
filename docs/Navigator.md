# Navigator

## import
``` ts
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
```

## type
Tworzymy `type` dla naszego navigatora. W tym przykładzie `screens` nie posiadają żadnych typów.
``` ts
export type RootStackParamList = {
    Home: undefined;
    Profile: undefined;
    Settings: undefined;
};
```

Gdybyśmy chcieli przesłać jakiś parametr wraz z nawigacją to robimy to za pomocą `route` i ustawiamy typ tego parametru. W tym przypadku jeżeli przechodzimy do widoku `Settings` to wymagamy parametru `userId` o typie `number`.
``` ts
export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: {
    userId: number;
  };
};
```

## Stack
Następnie tworzymy `stack`. Wybieramy jedną z dostępnych opcji np. `createNativeStackNavigator`. Dodajemy typ podczas tworzenia.
``` ts
const Stack = createStackNavigator<RootStackParamList>();
```
Tworzymy navigator z dostępnych komponentów. `name` ma być zdefiniowany taki jak w `RootStackParamList`.
``` ts
<Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={() => HomeScreen} />
    <Stack.Screen name="Profile" component={() => ProfileScreen} />
    <Stack.Screen name="Settings" component={() => SettingsScreen} />
</Stack.Navigator>
```

## `route` i `navigation`
Każdy z komponentów w `props` otrzymuje `route` i `navigation`.
``` ts
function ProfileScreen({ route, navigation }) {
  // ...
}
```

Możemy walidować czy otrzymaliśmy poprawny komponent. W tym przypadku dokonujemy walidacji czy otrzymaliśmy tylko "Profile", który został zdefiniowany w `name` oraz `RootStackParamList`.
``` ts
type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

function ProfileScreen({ route, navigation } : ProfileProps) {
    // ...
}
```

## Nawigowanie
Dzięki temu, że posiadamy parametr `navigation` możemy przemieszczać się po ekranach.
``` ts
navigation.navigate('Settings')
```

Jeżeli wymagamy parametru podczas tej nawigacji to przesyłamy go za pomocą obiektu.
``` ts
navigation.navigate('Settings', {userId: 4});
```
