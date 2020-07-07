import firebase from "../lib/firebase";
import { useState } from "react";
import { useDataContext } from "../providers/dataContextProvider";

export const NewExercise = () => {
  const { user } = useDataContext();
  const [rep, setRep] = useState(0);
  const handleSubmit = async (event) => {
    event.preventDefault();
    await firebase
      .firestore()
      .collection(`users/${user.uid}/exercises`)
      .add({ rep: rep, createdAt: new Date() });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={rep}
        onChange={(e) => setRep(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
};
