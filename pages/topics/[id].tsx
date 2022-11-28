import Head from "next/head";
import { useRouter } from "next/router";
import Article from '../../components/article'
import Nav from '../../components/nav'
import MainLayout from "../../layouts/index";
import styles from "../../styles/Home.module.scss";

function Topic(props) {
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <MainLayout>
            <Head>
                <title >Simple News</title>
            </Head>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">

                    <nav>
                        <div className="flex justify-center ">
                            <Nav />
                        </div>
                    </nav>


                    <div className="w-auto col-span-2 ">
                        <div className="flex justify-center ">
                            <Article title={props.title} articles={props.topicArticles} />
                        </div>
                    </div>
                </div>
            </div >
        </MainLayout >
    );
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    const topicRes = await fetch(
        `https://newsapi.org/v2/top-headlines?country=jp&category=${params.id}&country=jp&apiKey=55884bab9d3b42ac8fc795f9c2dedc78`
    );
    const topicJson = await topicRes.json();
    const topicArticles = await topicJson.articles;

    const title = params.id;

    return {
        props: { topicArticles, title },
        revalidate: 60 * 10,
    };
}

export default Topic;