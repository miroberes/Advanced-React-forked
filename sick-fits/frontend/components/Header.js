import Nav from './Nav';

const Header = () => {
    return (
        <div>
            <div className='bar'>
                <a href=''>Sick Fits</a>
            </div>
            <Nav />

            <div className='sub-bar'>Search</div>
            <div className=''>Cart</div>
        </div>
    );
};

export default Header;
