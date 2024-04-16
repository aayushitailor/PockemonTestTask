import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonListScreen from "../screens/PokemonListScreen";
import PokemonDeailScreen from "../screens/PokemonDetail";
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pokemons"
          component={PokemonListScreen}
          options={{
            headerStyle: {
              backgroundColor: '#061a3b',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Pokemon"
          component={PokemonDeailScreen}
          options={{
            headerStyle: {
              backgroundColor: '#061a3b',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
