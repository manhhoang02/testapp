import * as React from 'react';
import {createContext, useContext, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigation from './app/navigation/MainNavigation';
import Login from './app/screens/Login';

type AppContextType = {
  user: string;
  dispatchUser: (value: string) => void;
};

const AppContext = createContext<AppContextType>({
  user: '',
  dispatchUser: () => {},
});

export const useAppContext = () => useContext(AppContext);

function App() {
  const [user, setUser] = useState('');
  const dispatchUser = (value: string) => setUser(value);

  return (
    <SafeAreaProvider>
      <AppContext.Provider value={{user, dispatchUser }}>
        {user === '' ? <Login /> : <MainNavigation />}
      </AppContext.Provider>
    </SafeAreaProvider>
  );
}

export default App;
