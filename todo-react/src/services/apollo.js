import { ApolloClient } from "apollo-client";
import {  HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = new HttpLink({
    "uri": "https://api.graph.cool/simple/v1/cjs23n4ay4ven012457ub2ok8"
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

export default client;