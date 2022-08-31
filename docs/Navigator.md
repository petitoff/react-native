# Navigator

## type
Tworzymy `type` dla naszego navigatora. W tym przykładzie `screens` nie posiadają żadnych typów.
``` ts
export type RootStackParamList = {
    Home: undefined;
    Profile: undefined;
    Settings: undefined;
};
```

## Stack
Następnie tworzymy `stack`. Wybieramy jedną z dostępnych opcji np. `createNativeStackNavigator`. Dodajemy typ podczas tworzenia.
``` ts
const Stack = createNativeStackNavigator<RootStackParamList>();
```
Tworzymy navigator z dostępnych komponentów. `name` może być zdefiniowany taki jak w `RootStackParamList`.
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