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
        />
        <Stack.Screen
          name="Pokemon"
          component={PokemonDeailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
