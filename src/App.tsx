// @packages
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";

// @own
import Router from "./Router";
import { client } from "lib/apollo";
import { LOCALES } from "i18n/locales";
import { messages } from "i18n/messages";

function App() {
  return (
    <ApolloProvider client={client}>
      <IntlProvider
        defaultLocale={LOCALES.ENGLISH}
        locale={LOCALES}
        messages={messages}
      >
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </IntlProvider>
    </ApolloProvider>
  );
}

export default App;
