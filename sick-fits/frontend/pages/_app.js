import { Container } from 'next/app';
import Page from '../components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';

function MyApp(props) {
    // console.log('props', props);
    return (
        <Container>
            <ApolloProvider client={props.apollo}>
                <Page>
                    <props.Component {...props.pageProps} /> {/* props. is just for clarity */}
                </Page>
            </ApolloProvider>
        </Container>
    );
}
// every page in the app will be server-side rendered because data has to be fetched before rendering
MyApp.getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {};
    console.log('this runs first, before the App is rendered');
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
};

export default withData(MyApp);
