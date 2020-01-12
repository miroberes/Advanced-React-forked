import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import User from './User';

const Nav = () => {
    return (
        <NavStyles>
            <User>
                {({data: {currentUser}}) => {
                    console.log('momo', currentUser);
                    return <p>User</p>;
                }}
            </User>
            <Link href='/items'>
                <a>Items</a>
            </Link>
            <Link href='/sell'>
                <a>Sell</a>
            </Link>
            <Link href='/signup'>
                <a>Signup</a>
            </Link>
            <Link href='/orders'>
                <a>Orders</a>
            </Link>
            <Link href='/me'>
                <a>Me</a>
            </Link>
        </NavStyles>
    );
};

export default Nav;
