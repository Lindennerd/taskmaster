const config = {
  schema: "http://localhost:3000/graphql",
  // documents: ["client/src/**/*.vue"],
  generates: {
    "./src/gql/": { preset: "client" },
  },
};
export default config;
