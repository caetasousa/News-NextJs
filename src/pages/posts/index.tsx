import styles from './styles.module.scss'
import Head from 'next/head';

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a>
                        <time>12 de marco 2021</time>
                        <strong>Api</strong>
                        <p>asdfasdf asdfasdf asdf asdf asdf asdf asd asd ada sdf asf </p>
                    </a>
                </div>
            </main>
        </>
    );
}