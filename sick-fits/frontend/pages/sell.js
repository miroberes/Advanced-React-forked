import CreateItem from '../components/CreateItem';

const Sell = props => {
    console.log('sell.js props.pageProps:', props.pageProps);

    return (
        <div>
            <CreateItem bla={props.query.id} />
        </div>
    );
};

export default Sell;
