# React Native Projects
## DOCS
[GO TO DOCS](https://github.com/petitoff/react-native/tree/main/docs)

## Redux
- [redux](https://github.com/petitoff/react-native/tree/main/redux) -> [live](https://snack.expo.dev/@petitoff/github.com-petitoff-react-native:redux)
- [redux-basic](https://github.com/petitoff/react-native/tree/main/redux-basic) -> [live](https://snack.expo.dev/@petitoff/redux-basic)

# Navigation
- [navigator-basic](https://github.com/petitoff/react-native/tree/main/navigator-basic) -> [live](https://snack.expo.dev/@petitoff/navigator-basic)

# OLD
## Target Sum
### [Live preview](https://snack.expo.dev/@petitoff/targetsum)

Uses classes to create components

```js
class App extends React.Component {
  render() {
    return <View></View>;
  }
}

export default App;
```

Props have PropTypes

```js
static propTypes = {
  randomNumberCount: PropTypes.number.isRequired,
  initialSeconds: PropTypes.number.isRequired,
  onPlayAgain: PropTypes.func.isRequired,
};
```

## Bake Sale
[Live preview](https://snack.expo.dev/@petitoff/bakesale)

## Navigation And Routers

[Live preview](https://snack.expo.dev/@petitoff/navigationandroutes)

Navigating Between Screens
``` js
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
        />
        <Stack.Screen
          name="BigImageView"
          component={ImageScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

## Expense Tracker
[Live preview](https://snack.expo.dev/@petitoff/expense-tracker)

## ts-navigation
[Live preview](https://snack.expo.dev/@petitoff/ts-navigation)

Data is hardcoded in `HomeScreen.tsx`
``` ts
const DATA = [
  {
    id: 1,
    name: 'Luke Skywalker',
    birth_year: '19BBY',
  },
  {
    id: 2,
    name: 'C-3PO',
    birth_year: '112BBY',
  },
  {
    id: 3,
    name: 'R2-D2',
    birth_year: '33BBY',
  },
  {
    id: 4,
    name: 'Darth Vader',
    birth_year: '41.9BBY',
  },
  {
    id: 5,
    name: 'Leia Organa',
    birth_year: '19BBY',
  },
];
```

`index.tsx` is RootNavigator
``` ts
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};
```

`Tabs.tsx` is Tab Navigator
``` ts
const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
```
