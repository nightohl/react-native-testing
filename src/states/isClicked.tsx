import React, {
  createContext,
  type Dispatch,
  type FC,
  type SetStateAction,
  useState,
  PropsWithChildren,
} from 'react';

type State = {
  isClicked: boolean;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
};

const IsClickedContext = createContext<State | undefined>(undefined);

const IsClickedProvider: FC<PropsWithChildren> = ({children}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <IsClickedContext.Provider value={{isClicked, setIsClicked}}>
      {children}
    </IsClickedContext.Provider>
  );
};

const useIsClicked = (): State => {
  const context = React.useContext(IsClickedContext);
  if (context === undefined) {
    throw new Error('useIsClicked must be used within a IsClickedProvider');
  }

  return context;
};

export {IsClickedProvider, useIsClicked};
