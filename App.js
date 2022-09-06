import React from 'react';
import { Button, Text, View, ActivityIndicator, StatusBar, StyleSheet } from 'react-native';
import { sendRSVP } from "./service/rsvp.service";

export default function App() {
  const [ isError, setIsError ] = React.useState(false);
  const [ isLoading, setIsLoading ] = React.useState(false);

  const rsvpButtonPressed = async () => {
    setIsError(false);
    setIsLoading(true);
    const response = await sendRSVP();
    setIsLoading(false);
    if (!response) {
      setIsError(true);
    }
  };

  return (
    <View style={styles.container}>
      { isLoading && <ActivityIndicator /> }
      <Text>{isError ? 'All systems go' : "OH FUCK"}</Text>
      <StatusBar style="auto" />
      <Button title='press me bitch' onPress={rsvpButtonPressed}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
