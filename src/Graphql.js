import { ApolloClient } from 'apollo-client' //Cliente de Grapql de Apollo
import { setContext } from 'apollo-link-context' //Setear cabezeras en el request
import { InMemoryCache } from 'apollo-cache-inmemory' //Cache graphl cache
import { createUploadLink } from 'apollo-upload-client';

import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

const API_URL = "http://localhost:8000";
const WS_URL = "localhost:8000";

// {
//     uri: `${API_URL}/graphql`,
//     //credentials: "include" //solo se agregan cuando hay credenciales en el backend
// }

const httplink = createUploadLink({
    uri: `${API_URL}/graphql`,
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
    uri: `ws:${WS_URL}`,
    options: {
        reconnect: true
    }
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
    // split based on operation type
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsLink,
    httplink,
);

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('postsToken');
    return {
        headers: {
            ...headers,
            authorization: token ? `JWT ${token}` : ''
        }
    }
});

export default new ApolloClient({
    link: authLink.concat(link),
    cache: new InMemoryCache()
})