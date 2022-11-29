import { useRouter } from "next/router";
import Article from '../../components/article'
import Nav from '../../components/nav'
import { Dna } from 'react-loader-spinner'



function Topic(props) {
    const router = useRouter();
    if (router.isFallback) {
        return <div className="flex justify-center mt-52 ">
            <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>;
    }

    return (


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