import Head from "next/head";
import MainLayout from "../layouts";
import styles from "../styles/Home.module.scss";
import Article from "../components/article";
import Nav from "../components/nav";
import WeatherNews from "../components/weather-news";
import PickupArticle from "../components/pickup-article";
import Header from "../components/header";

export default function Home(props) {
    console.log(props);

    return (
        <MainLayout>
            <Head>
                <title>Simple News</title>
            </Head>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">


                    <nav>
                        <div className="flex justify-center ">
                            <Nav />
                        </div>

                    </nav>


                    <div className="flex justify-center col-span-2 ">
                        <Article title="headline" articles={props.topArticles} />
                    </div>
                    <div className={styles.aside}>
                        <div className="flex justify-center ">
                            <PickupArticle articles={props.pickupArticles} />
                        </div>
                    </div>


                </div >
            </div >
        </MainLayout>
    );

}

export const getStaticProps = async () => {
    // NewsAPIのトップ記事の情報を取得
    const pageSize = 10  //取得する記事の数
    const topRes = await fetch(
        `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=55884bab9d3b42ac8fc795f9c2dedc78`
    );
    const topJson = await topRes.json();
    const topArticles = topJson?.articles;

    // OpenWeatherMapの天気の情報を取得
    const lat = 35.4122    // 取得したい地域の緯度と経度(今回は東京)
    const lon = 139.4130
    const exclude = "hourly,minutely"   // 取得しない情報(1時間ごとの天気情報と1分間ごとの天気情報)
    const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=44.34&lon=10.99&units=metric&exclude=${exclude}&appid=9728230a38dfdad051ff0f0378049d6d`

    );
    const weatherJson = await weatherRes.json();
    const weatherNews = weatherJson;

    // NewsAPIのピックアップ記事の情報を取得
    const keyword = "software"   // キーワードで検索(ソフトウェア)
    const sortBy = "popularity"  // 表示順位(人気順)
    const pickupPageSize = 5     // ページサイズ(5)
    const pickupRes = await fetch(
        `https://newsapi.org/v2/everything?q=${keyword}&language=jp&sortBy=${sortBy}&pageSize=${pickupPageSize}&apiKey=55884bab9d3b42ac8fc795f9c2dedc78`
    );
    const pickupJson = await pickupRes.json();
    const pickupArticles = pickupJson?.articles;

    return {
        props: {
            topArticles,
            weatherNews,
            pickupArticles
        },
        revalidate: 60,
    };
};