import { createApp, h } from "vue";
import "./style.css";
import App from "./App.vue";

import { createApolloProvider } from "@vue/apollo-option";
import { apolloClient } from "./apollo-client";

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});

const app = createApp({
  render: () => h(App),
});

app.use(apolloProvider);
app.mount("#app");
