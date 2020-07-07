import { signInWithGoogle, signOut } from "../lib/firebase";
import { useDataContext } from "../providers/dataContextProvider";

export const Login = ({ props }) => {
  const { user } = useDataContext();

  return user ? (
    <button onClick={signOut}>Logout</button>
  ) : (
    <button onClick={signInWithGoogle}>Login</button>
  );
};
