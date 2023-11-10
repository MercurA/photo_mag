import Image from 'next/image';
import styles from './article.module.css'

const data = {
    p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quae, laudantium ad magnam, delectus omnis tempore mollitia fuga ducimus ab consectetur cumque illum facere iusto. Assumenda beatae nobis dolorum cupiditate?',
    p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit accusantium iste repellendus ipsam aliquam, at eum ex pariatur, tenetur qui corrupti dolorum veniam minima explicabo consectetur dolorem expedita rem iusto.',
    middleImg: ['/images/1.jpg', 'Montreaux 2023'],
}

const Article = () => {
    return (
        <div className={styles.container}>
            <article>
                <h1 id="title">Title</h1>
                {data.aboveImg && data.aboveImg.length &&
                    <aside>
                        <div className={styles.imgWrapper}>
                            <Image
                                src={data.middleImg[0]}
                                alt={''}
                                fill
                            />
                            <p className={styles.descText}>- {data.middleImg[1]} -</p>
                        </div>
                    </aside>
                }
                <p>{data.p1}</p>
                {data.middleImg && data.middleImg.length &&
                    <aside>
                        <div className={styles.imgWrapper}>
                            <Image
                                src={data.middleImg[0]}
                                alt={''}
                                fill
                            />
                            <p className={styles.descText}>- {data.middleImg[1]} -</p>
                        </div>
                    </aside>
                }
                <p>{data.p2}</p>
                {data?.footerImg && data?.footerImg.length &&
                    <aside>
                        <div className={styles.imgWrapper}>
                            <Image
                                src={data.middleImg[0]}
                                alt={''}
                                fill
                            />
                            <p className={styles.descText}>- {data.middleImg[1]} -</p>
                        </div>
                    </aside>
                }
            </article>
            <div className={styles.space}></div>
        </div>
    )
}

export default Article;