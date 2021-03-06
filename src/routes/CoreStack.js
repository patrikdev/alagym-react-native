import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CoreTabNavigator from './CoreTabNavigator';
import Search from '../view/Search/index';
import MessengerTab from './MessengerTab';
import Chat from '../view/ChatScreen/index';
import ToolbarContact from '../components/ToolbarContact/index';
// import ContactDescription from '../components/ContactDescription/index';
import ToolbarImage from '../components/ToolbarImage';
import Exercises from '../components/Exercises/index';
import ToolbarIcons from '../components/ToolbarIcons/index';
import Home from '../view/Home';

const Stack = createStackNavigator();

const CoreStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: 'AlaGym',
          headerTitleStyle: {
            color: '#ffffff',
            fontSize: 30,
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: '#191970',
            elevation: 0,
            shadowOpacity: 0,
          },

          headerRight: () => <ToolbarIcons />,
        }}
        name="Home"
        component={CoreTabNavigator}
      />
      <Stack.Screen
        options={{
          title: 'Procurar',
          headerStyle: {
            backgroundColor: '#ffff',
          },
        }}
        name="Search"
        component={Search}
      />
      <Stack.Screen
        name="Messeger"
        component={MessengerTab}
        options={{
          title: 'Messenger',
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            color: '#ffffff',
          },
          headerStyle: {
            backgroundColor: '#191970',
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={Chat}
        options={{
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            display: 'none',
          },
          headerStyle: {
            backgroundColor: '#191970',
            elevation: 0,
            shadowOpacity: 0,
          },

          headerLeft: () => <ToolbarContact />,
        }}
      />
      {/* <Stack.Screen
        name="ContactDescription"
        component={ContactDescription}
        options={{
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            display: 'none',
          },
          headerStyle: {
            backgroundColor: '#191970',
            elevation: 0,
            shadowOpacity: 0,
            height: 300,
          },
          header: props => <ToolbarImage {...props} />,
        }}
      /> */}
      <Stack.Screen
        name="Exercises"
        component={Exercises}
        options={{
          title: 'Exercícios',
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#191970',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default CoreStack;
