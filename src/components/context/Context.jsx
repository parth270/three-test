import React from "react";

export const AppContext = React.createContext();

const Context = (props) => {
  const [theme, setTheme] = React.useState(false);
  console.log(theme);
  return (
    <AppContext.Provider
      value={{
        theme: theme,
        setTheme: setTheme,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default Context;
