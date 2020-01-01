import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';

const GET_ITEM = gql`
    query getItem($id: ItemWhereUniqueInput!) {
        item(where: $id) {
            id
            title
            description
            image
            price
        }
    }
`;

function Item(props) {
    let id, title, description, image, largeImage, price, updatedAt, createdAt;
    if (props.item) {
        console.log('in if, props', props);
        ({ id, title, description, image, largeImage, price, updatedAt, createdAt } = props.item);
    } else {
        console.log('in else, props', props);

        const { query } = props;
        const { loading, error, data } = useQuery(GET_ITEM, { variables: { id: query } });

        if (loading) {
            return <p>Loading...</p>;
        }
        if (error) {
            return <p>Error</p>;
        }
        if (!data.item) {
            return <p>No item with id {query.id}</p>;
        }
        ({ id, title, description, image, largeImage, price, updatedAt, createdAt } = data.item);
    }
    return (
        <ItemStyles>
            {image && <img src={image} alt={title} />}
            <Title>
                <Link
                    href={{
                        pathname: '/item',
                        query: { id: id },
                    }}
                >
                    <a>{title}</a>
                </Link>
            </Title>
            <PriceTag>{formatMoney(price)}</PriceTag>
            <div className='buttonList'>
                <Link
                    href={{
                        pathname: 'update',
                        query: { id: id },
                    }}
                >
                    <a>Edit</a>
                </Link>
                <button>Add to cart</button>
                <button>Delete</button>
            </div>
        </ItemStyles>
    );
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
};

export default Item;
