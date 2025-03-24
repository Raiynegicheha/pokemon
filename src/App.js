import { ApolloClient } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import "./App.css";

function App() {
  const client = new ApolloClient({
    uri: "https://www.apollographql.com/",
  });
  return (
    <ApolloProvider client={client}>
      <div className="App">
{/* We will revisit */}
      </div>
    </ApolloProvider>
  );
}

export default App;
