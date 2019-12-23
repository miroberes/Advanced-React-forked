import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled from 'styled-components';

const MyButton = styled.button`
    display: block;
    margin-bottom: 20px;
    background: ${props => props.background || 'orange'};
    color: ${props => (props.lightColor ? 'orange' : 'blue')};
    font-size: ${props => (props.huge ? `${props.huge}px` : '50px')};
    span {
        font-size: 30px;
    }
    .buttonSpanClass {
        font-size: 60px;
    }
`;

// styling can be applied to any component

const MyLink = (object) => {
    console.log(object);
    console.log(object.children);

    return <a className={object.className}>{object.children}</a>;
};

const StyledLink = styled(MyLink)`
    display: block;
    color: ${props => props.color || 'orange'};
    font-weight: bold;
`;

const Input = styled.input`
    display: block;
    margin-top: 20px;
    padding: 0.5em;
    color: ${props => props.color || 'palevioletred'};
    background: papayawhip;
    border: none;
    border-radius: 3px;
`;

export default class Page extends Component {
    render() {
        console.log(MyButton);

        return (
            <div>
                <Meta />
                <Header />
                <MyButton fontSize='40px'>
                    Default orange button 40px<span>span 30px</span>
                    <span className='buttonSpanClass'>span with class 60px</span>
                </MyButton>
                <MyButton huge="90" background='lightblue' fontSize='20px'>
                    Blue Button 20px
                </MyButton>

                <MyLink>Unstyled, boring Link</MyLink>
                <StyledLink color='rebeccapurple'>Styled, exciting Link</StyledLink>
                <Input defaultValue='@probablyup' type='text' />
                <Input defaultValue='@geelen' type='text' color='rebeccapurple' />

                <p>Heidihei page component</p>
                {this.props.children}
            </div>
        );
    }
}
