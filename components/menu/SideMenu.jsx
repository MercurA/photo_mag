import { useContext, useState } from 'react'
import styles from './sidemenu.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { strings } from '../../utils/constants'
import { AppContext } from '../../pages/_app'
import { ACTIONS } from '../../utils/state/reducer'

const SideMenu = () => {
    const context = useContext(AppContext)
    const { dispatch } = context
    const [selected, setSelected] = useState(0)

    const classStyleBlur = index => selected === index ? styles.textUnblur : ''

    const handleSelected = (e) => {
        dispatch({
            type: ACTIONS.setImageCollection,
            payload: e.target.dataset.id
        })
        setSelected(Number(e.target.dataset.index))
    }

    return (
        <div className={styles.container}>
            <div className={styles.brand}>{"Horea's Photography"} </div>
            <div className={styles.categoryGroup}>
                {strings.selections.map((el, index) => (
                    <div
                        onClick={handleSelected}
                        className={`${styles.text} ${classStyleBlur(index)}`}
                        key={index}
                        data-index={index}
                        data-id={el.id}
                        id={el.id}
                    >{el.name}</div>
                ))}
            </div>
            <div className={styles.contact}>
                <p>{strings.email}</p>
                <div>
                    <Link className={styles.link} href={'https://www.instagram.com/cypher_mercurius/'} target="_blank">
                        <Image src={'/icons/insta_white.svg'} alt="instagram logo" width={20} height={20} />
                    </Link>
                    <Link className={styles.link} href="https://github.com/MercurA" target="_blank">
                        <Image src={'/icons/github_white.svg'} alt="github logo" width={20} height={20} />
                    </Link>
                    <Link className={styles.link} href="https://soundcloud.com/dionis5" target="_blank">
                        <Image src={'/icons/soundcloud2.svg'} alt="soundcloud logo" width={20} height={20} />
                    </Link>
                    <Link className={styles.link} href="https://www.behance.net/horeaconstan" target="_blank">
                        <Image src={'/icons/behance.svg'} alt="behance logo" width={20} height={20} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SideMenu