import {Title} from "../Title/Title";
import {Paragraph} from "../Paragraph/Paragraph";
import {ReactComponent as InstagramIcon} from "shared/assets/icons/contactUs/instagramIcon.svg";
import {ReactComponent as WhatsappIcon} from "shared/assets/icons/contactUs/whatsappIcon.svg";
import {ReactComponent as ViberIcon} from "shared/assets/icons/contactUs/viberIcon.svg";
import styles from "./ContactCard.module.scss";

export function ContactCard() {
    return (
        <div className={styles.card}>
            <Title className={styles.title} size='medium' color='red'>Наши контакты</Title>
            <div className={styles.info}>
                <Paragraph size='small' color='red' weight={500} align='center'>
                    <span>Почта</span><br/>
                    <a href='mailto:info@staffrent.ee'>info@staffrent.ee</a><br/>
                    <a href='mailto:offer@staffrent.nl'>offer@staffrent.nl</a>
                </Paragraph>
                <Paragraph size='small' color='red' weight={500} align='center'>
                    <span>Телефон</span><br/>
                    <a href='tel:+7676786747'>+7676786747</a><br/>
                    <a href='tel:+9875674365'>+9875674365</a>
                </Paragraph>
                <Paragraph size='small' color='red' weight={500} align='center'>
                    <span>Часы работы</span><br/>
                    Пн - Пт<br/>
                    9:00 - 20:00<br/>
                    Сб-Вс<br/>
                    11:00 - 17:00
                </Paragraph>
                <div className={styles.links}>
                    <a href="/"><InstagramIcon/></a>
                    <a href="/"><WhatsappIcon/></a>
                    <a href="/"><ViberIcon/></a>
                </div>
            </div>
        </div>
    );
}