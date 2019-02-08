import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";

const Test = () => (
    <Query
        query={gql`{prueba}`}
    >
        {
            ({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;

                return <h2>{data.prueba}</h2>
            }
        }
    </Query>
);

export default Test;