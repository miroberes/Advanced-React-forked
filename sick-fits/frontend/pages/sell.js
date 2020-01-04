import CreateItem from '../components/CreateItem';

const Sell = () => {
    const pagenr = parseInt(localStorage.getItem('pagenr'), 10);
    console.log('sell.js pagenr', pagenr);
    return (
        <div>
            <CreateItem pagenr={pagenr} />
        </div>
    );
};

export default Sell;
