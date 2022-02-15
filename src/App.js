import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";
import CountriesList from "./smart-components/Countries";

const errorLink = onError(({ graphqlErrors, newtworkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
      return message;
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://countries.trevorblades.com" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <CountriesList />
    </ApolloProvider>
  );
}

export default App;
