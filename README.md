# React Native Projects

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
