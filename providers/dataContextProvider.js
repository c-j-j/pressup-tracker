import { createContext, useContext, useEffect, useState } from "react";
import { firestore, firebaseAuth } from "../lib/firebase";

const defaultData = {
  exercises: {},
  user: {},
};
export const DataContext = createContext(defaultData);

export const useDataContext = () => useContext(DataContext);

export const DataContextProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let querySnapshot = await firestore
        .collection(`users/${user.uid}/exercises`)
        .get();

      const fetchedExercises = querySnapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));
      setExercises(fetchedExercises);
    }
    if (user) {
      fetchData();
    }
  }, [user]);

  firebaseAuth.onAuthStateChanged(function (loggedInUser) {
    setUser(loggedInUser);
  });

  return (
    <DataContext.Provider value={{ exercises, user }}>
      {children}
    </DataContext.Provider>
  );
};
