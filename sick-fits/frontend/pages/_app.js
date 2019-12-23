import { Container } from 'next/app';
import Page from '../components/Page';

function MyApp({ Component, pageProps }) {
    console.log('pageProps', {...pageProps});
    return (
        <Container>
            <Page>
                <Component {...pageProps} />
            </Page>
        </Container>
    );
}

export default MyApp;
