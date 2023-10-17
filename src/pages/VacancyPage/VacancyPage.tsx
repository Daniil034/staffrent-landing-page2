import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useParams} from "react-router-dom";
import {useEntitiesContext} from "entitites/useEntitiesContext";
import {Country} from "shared/types/Country";
import {Paragraph} from "shared/ui/Paragraph/Paragraph";
import {ReactComponent as Arrow} from "shared/assets/icons/carouselArrow.svg";
import Slider, {CustomArrowProps} from "react-slick";
import styles from './VacancyPage.module.scss';
import classnames from "classnames";
import {ComponentProps} from "react";

function NextArrow(props: CustomArrowProps) {
    const {className, style, onClick} = props;
    return (
        <Arrow className={classnames(className, styles.nextArrow, styles.arrow)} style={style} onClick={onClick}/>
    );
}

function PrevArrow(props: CustomArrowProps) {
    const {className, style, onClick} = props;
    return (
        <Arrow className={classnames(className, styles.arrow, styles.prevArrow)} style={style} onClick={onClick}/>
    );
}


export function VacancyPage() {
    const {countryName, vacancyId} = useParams();
    const entities = useEntitiesContext();
    const vacancy = entities[countryName as Country].vacancies.find(vacancy => vacancy.id === vacancyId);

    const settings: ComponentProps<typeof Slider> = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: "ondemand",
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
    };

    return (
        <>
            <div className={styles.container}>
                <h3 className={styles.title}>{vacancy?.title}</h3>
                <Paragraph
                    className={styles.subtitle}
                    align='left'
                    color='white'
                    size='medium'
                    weight={500}
                >
                    {vacancy?.subtitle}
                </Paragraph>
                <table className={styles.table}>
                    <tbody>
                    <tr>
                        <td>1 hr</td>
                        <td>€{vacancy?.rate}</td>
                        <td>{vacancy?.country}</td>
                    </tr>
                    </tbody>
                </table>
                <Paragraph
                    className={styles.descriptionTitle}
                    align='left'
                    color='white'
                    size='medium'
                    weight={500}
                >
                    {vacancy?.descriptionTitle}
                </Paragraph>
                <Paragraph
                    className={styles.description}
                    align='left'
                    color='white'
                    size='small'
                    weight={400}
                >
                    {vacancy?.description}
                </Paragraph>
                {/*<img className={styles.img} src={vacancy?.imgSrc}/>*/}
                <div className={styles.carousel}>
                    <Slider {...settings}>
                        {vacancy?.imgSrc.map((imageSrc, index) => (
                            <img src={imageSrc}/>
                        ))}
                    </Slider>
                </div>
                <Paragraph
                    className={styles.contacts}
                    align='left'
                    color='white'
                    size='medium'
                    weight={500}
                >
                    Наши контакты<br/>
                    <a href="tel:+7685674361">+7685674361</a> <br/>
                    <a href="mailto:artur@staffrent.ee">artur@staffrent.ee</a><br/>
                    Tallinn, Estonia
                </Paragraph>
            </div>
        </>
    );
}