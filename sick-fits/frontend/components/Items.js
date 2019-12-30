import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Item from './Item';
import styled from 'styled-components';

const ALL_ITEMS_QUERY = gql`
    query getAllTheItems {
        items {
            id
            title
            description
            image
            largeImage
            price
            updatedAt
            createdAt
        }
    }
`;

const Center = styled.div`
    text-align: center;

`;

const ItemsList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
`;


function Items() {
    const { loading, error, data } = useQuery(ALL_ITEMS_QUERY);
    // console.log('Items, data:', data);
    if (loading) {
        return <p>Loading ...</p>;
    }
    if (error) {
        return <p>{error.message}</p>;
    }
    return (
        <ItemsList>
            {data.items.map(item => {
                return <Item item={item} key={item.id}/>;
            })}
        </ItemsList>
    );
}

export default Items;
