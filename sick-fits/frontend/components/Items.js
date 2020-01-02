import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Item from './Item';
import styled from 'styled-components';
import Pagination from './Pagination';
import { itemsPerPage } from '../config';

const ALL_ITEMS_QUERY = gql`
    query nameJustToBeThereNotUsedAnywhereElse($firstHowManyVariableKeyName: Int = ${itemsPerPage}, $skipHowManyVariableKeyName: Int = 0){
        itemsAliasInGqlYogaItemsIsForwardedMustMatchPrisma: items(first: $firstHowManyVariableKeyName, skip: $skipHowManyVariableKeyName, orderBy: createdAt_ASC) {
            id
            title
            description
            image
            price
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

function Items(props) {
    const { loading, error, data } = useQuery(ALL_ITEMS_QUERY, {
        variables: { skipHowManyVariableKeyName: itemsPerPage * props.pagenr - itemsPerPage },
    });
    console.log('Items, data:', data);
    if (loading) {
        return <p>Loading ...</p>;
    }
    if (error) {
        return <p>{error.message}</p>;
    }
    console.log('Items props', props);
    return (
        <Center>
            <Pagination pagenr={props.pagenr} />
            <ItemsList>
                {data.itemsAliasInGqlYogaItemsIsForwardedMustMatchPrisma.map(item => {
                    return <Item item={item} key={item.id} />;
                })}
            </ItemsList>
            <Pagination pagenr={props.pagenr} />
        </Center>
    );
}

export default Items;
