// import React from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import Appl from './src';

// export default function App() {
//   return (
//       <Appl />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#999',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import { createAppContainer } from 'react-navigation';
const App = createAppContainer(Appl);

export default App;