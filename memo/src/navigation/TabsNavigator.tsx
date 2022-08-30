import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screens/SettingsScreen";
import HomeStackNavigator from "./HomeStackNavigator";

import { BottomTabNavigatorParamList } from "./types";

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const TabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
