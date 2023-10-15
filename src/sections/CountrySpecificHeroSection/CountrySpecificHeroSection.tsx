import {Country} from "shared/types/Country";
import {Title} from "shared/ui/Title/Title";
import estoniaFlag from "shared/assets/icons/flags/estonia.svg";
import estoniaBG from "shared/assets/img/countriesHeroBG/estonia.png";
import latviaFlag from "shared/assets/icons/flags/latvia.svg";
import latviaBG from "shared/assets/img/countriesHeroBG/latvia.png";
import lithuaniaFlag from "shared/assets/icons/flags/lithuania.svg";
import lithuaniaBG from "shared/assets/img/countriesHeroBG/lithuania.png";
import styles from './CountrySpecificHeroSection.module.scss';

type Props = {
    country: Country
};

type CountryMappings = {
    name: string,
    flagSrc: string,
    backgroundSrc: string,
}

export function CountrySpecificHeroSection(props: Props) {
    const countries: { [name in Country]: CountryMappings } = {
        estonia: {
            name: "Эстонии",
            flagSrc: estoniaFlag,
            backgroundSrc: estoniaBG
        },
        latvia: {
            name: "Латвии",
            flagSrc: latviaFlag,
            backgroundSrc: latviaBG
        },
        lithuania: {
            name: "Литве",
            flagSrc: lithuaniaFlag,
            backgroundSrc: lithuaniaBG
        }
    }

    return (
        <section className={styles.root}>
            <div
                className={styles.withBG}
                style={
                    {backgroundImage: `linear-gradient(180deg, rgba(214, 43, 52, 0.00) 56%, rgba(214, 43, 52, 0.40) 68%, rgba(214, 43, 52, 0.76) 82%, #D62B34 100%), linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${countries[props.country].backgroundSrc}')`}}
            >
                <Title size='large' className={styles.title}>
                    Ваша будущая работа в {countries[props.country].name} здесь
                </Title>
                <ul className={styles.list}>
                    <li>Европейский стандарт жизни и зарплаты</li>
                    <li>Качественная система здравоохранения и социального обеспечения</li>
                    <li>Живописные природные пейзажи и культурное наследие</li>
                </ul>
                <div className={styles.noNeedToThink}>
                    <img className={styles.flag} src={countries[props.country].flagSrc}/>
                    <p>
                        Вам не надо думать о:
                    </p>
                    <ul>
                        <li>Оформлении документов</li>
                        <li>Знании иностранного языка</li>
                        <li>Ориентации по жилью</li>
                        <li>Транспорте</li>
                    </ul>
                </div>
            </div>
            <div className={styles.statisticsBlock}>
                <p className={styles.statisticsText}>
                    Средняя зарплата <span>35$</span><br/>
                    Время оформления легализации <span>от 5 до 7 рабочих дней</span><br/>
                    После чего возможность работать <span>1 год</span>
                </p>
            </div>
        </section>
    );
}