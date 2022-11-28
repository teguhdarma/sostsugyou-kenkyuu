import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <section className={styles.container}>
            <header className={styles.header}>
                <div className={styles.header__icon} >
                    <Image
                        src="/img/headerIcon/menu.png"
                        alt="menu icon"
                        loading="eager"
                        width={35}
                        height={35}
                        priority


                    />
                </div>
                <h1 style={{ letterSpacing: "1px", textAlign: "left" }}>
                    <Link href="/news">

                        <span style={{ fontWeight: 100 }}>News</span>
                    </Link>
                </h1>
            </header>
        </section>
    );
}

export default Header;