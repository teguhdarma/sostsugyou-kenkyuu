import Link from "next/link";
import styles from "./index.module.scss";
import Image from "next/image";

const TOPICS = [
    {
        icon: "01",
        path: "/news",
        title: "トップ記事",
    },
    {
        icon: "03",
        path: "/topics/business",
        title: "ビジネス",
    },
    {
        icon: "04",
        path: "/topics/technology",
        title: "テクノロジー",
    },
    {
        icon: "05",
        path: "/topics/entertainment",
        title: "エンタメ",
    },
    {
        icon: "06",
        path: "/topics/sports",
        title: "スポーツ",
    },
    {
        icon: "07",
        path: "/topics/health",
        title: "健康",
    },

];

const Nav: React.FC = () => {
    return (
        <section className={styles.container}>
            <ul className={styles.contents}>
                {TOPICS.map((topic, index) => {
                    return (
                        <li key={index} >
                            <Link href={`${topic.path}`}>
                                <span>
                                    <Image
                                        src={`/img/navIcons/${topic.icon}.png`}
                                        alt={`${topic.title} icon`}
                                        loading="eager"
                                        width={33}
                                        height={33}
                                        priority
                                        className="bg-gray-400"
                                    />
                                </span>
                                <span>{topic.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Nav;