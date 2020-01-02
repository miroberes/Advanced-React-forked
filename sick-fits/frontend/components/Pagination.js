import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import PaginationStyles from './styles/PaginationStyles';
import ErrorMessage from './ErrorMessage';
import Head from 'next/head';
import Link from 'next/link';
import { itemsPerPage } from '../config';

const PAGINATION_QUERY = gql`
    query nameJustToBeThereNotUsedAnywhereElse {
        localAlias: itemsConnection {
            aggregate {
                count
            }
        }
    }
`;

export default props => {
    const { data, loading, error } = useQuery(PAGINATION_QUERY);
    const { pagenr } = props;
    console.log('Pagination props', props);
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <ErrorMessage error={error} />;
    }
    if (!data.localAlias) {
        return <p>No itemsConnection for pagination.</p>;
    }
    const itemCount = data.localAlias.aggregate.count;
    const pages = Math.ceil(itemCount / itemsPerPage);

    return (
        <PaginationStyles>
            <Head>
                <title>
                    {console.log(pagenr)}
                    Sick Fits! - page {pagenr} of {pages}
                </title>
            </Head>
            {pagenr === 1 ? null : (
                <Link
                    href={{
                        pathname: 'items',
                        query: { pagenr: pagenr - 1 },
                    }}
                >
                    <a>Prev</a>
                </Link>
            )}
            <p>
                Pagination - {itemCount} items, {pages} pages, page nr.: {pagenr}
            </p>
            {pagenr === pages ? null : (
                <Link
                    href={{
                        pathname: 'items',
                        query: { pagenr: pagenr + 1 },
                    }}
                >
                    <a>Next</a>
                </Link>
            )}
        </PaginationStyles>
    );
};
