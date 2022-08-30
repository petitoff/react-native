import type { CompositeNavigationProp } from "@react-navigation/native";
import type { RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type DetailsType = {
  name: string;
  img: string;
};

export type HomeStackNavigatorParamList = {
  Home: undefined;
  Details: DetailsType;
};

export type BottomTabNavigatorParamList = {
  HomeStack: HomeStackNavigatorParamList;
  Settings: undefined;
};

export type HomeScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<HomeStackNavigatorParamList, "Details">,
  BottomTabNavigationProp<BottomTabNavigatorParamList, "Settings">
>;

export type DetailsScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  "Details"
>;
