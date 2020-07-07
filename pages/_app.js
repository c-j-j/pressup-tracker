import { DataContextProvider } from "../providers/dataContextProvider";

const Application = ({ Component, pageProps }) => {
  return (
    <DataContextProvider>
      <Component {...pageProps} />
    </DataContextProvider>
  );
};

export default Application;
