import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { AdventureStackNavigator, HomeStackNavigator, ProfileStackNavigator, SeekerStackNavigator } from './navigators/Navigators';
import { colors } from '../theme/AppTheme';

interface Props {
  focused: boolean;
  color: string;
  size?: number;
}

const setTabIcons = ( props : Props, routeName : string ) => {
  const { color } = props;

  let iconName: string = '';
  switch (routeName) {
  case 'Home' :
      iconName = 'home-outline';
      break;

  case 'Seeker' :
      iconName = 'search-outline';
      break;

  case 'Adventure' :
      iconName = 'compass-outline';
      break;

  case 'Profile' :
      iconName = 'person-outline';
      break;
  }
  return <Icon name={ iconName } size={27} color={color} />;
};

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon : (props) => setTabIcons(props, route.name),
        tabBarLabelStyle: { marginBottom: 3 },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.inactive,
        tabBarStyle: { backgroundColor: colors.secondary }
      })}
    >
      <Tab.Screen name="Home" options={{ headerShown: false }} component={ HomeStackNavigator } />
      <Tab.Screen name="Seeker" options={{ headerShown: false }} component={ SeekerStackNavigator } />
      <Tab.Screen name="Adventure" options={{ headerShown: false }} component={ AdventureStackNavigator } />
      <Tab.Screen name="Profile" options={{ headerShown: false }} component={ ProfileStackNavigator } />
    </Tab.Navigator>
  );
}

export default Tabs;