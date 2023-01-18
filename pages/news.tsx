import Head from "next/head";
import MainLayout from "../layouts";
import styles from "../styles/Home.module.scss";
import Article from "../components/article";
import Nav from "../components/nav";
import PickupArticle from "../components/pickup-article";


export default function Home(props) {
    console.log(props);

    return (

        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">


                <nav>
                    <div className="flex justify-center ">
                        <Nav />
                    </div>

                </nav>


                <div className="flex justify-center col-span-2 ">
                    <Article title="見出し" articles={props.topArticles} />
                </div>
                <div className={styles.aside}>
                    <div className="flex justify-center ">
                        <PickupArticle articles={props.pickupArticles} />
                    </div>
                </div>


            </div >
        </div >

    );

}

export const getStaticProps = async () => {
    // NewsAPIのトップ記事の情報を取得
    const pageSize = 10  //取得する記事の数
    const topRes = await fetch(
        `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=a4a47644ef3040a490c79d89b1c7dc6f`
    );
    const topJson = await topRes.json();
    const topArticles = topJson?.articles;


    // NewsAPIのピックアップ記事の情報を取得
    const keyword = "software"   // キーワードで検索(ソフトウェア)
    const sortBy = "popularity"  // 表示順位(人気順)
    const pickupPageSize = 5     // ページサイズ(5)
    const pickupRes = await fetch(
        `https://newsapi.org/v2/everything?q=${keyword}&language=jp&sortBy=${sortBy}&pageSize=${pickupPageSize}&apiKey=a4a47644ef3040a490c79d89b1c7dc6f`
    );
    const pickupJson = await pickupRes.json();
    const pickupArticles = pickupJson?.articles;

    return {
        props: {
            topArticles,
            pickupArticles
        },
        revalidate: 60,
    };
};