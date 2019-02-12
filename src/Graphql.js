import { ApolloClient } from 'apollo-client' //Cliente de Grapql de Apollo
import { setContext } from 'apollo-link-context' //Setear cabezeras en el request
import { InMemoryCache } from 'apollo-cache-inmemory' //Cache graphl cache
import { createUploadLink } from 'apollo-upload-client';

const API_URL = "http://production2.9mcnp4cyz2.us-west-1.elasticbeanstalk.com";

const httplink = createUploadLink({
    uri: `${API_URL}/graphql`,
    //credentials: "include" //solo se agregan cuando hay credenciales en el backend
});

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
    link: authLink.concat(httplink),
    cache: new InMemoryCache()
})