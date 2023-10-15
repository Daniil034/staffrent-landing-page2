import {AboutUsItemProps} from "./components/AboutUsItem/AboutUsItem";
import {ReactComponent as MedalIcon} from "shared/assets/icons/aboutUs/medal.svg";
import {ReactComponent as PaperIcon} from "shared/assets/icons/aboutUs/paper.svg";
import {ReactComponent as PeopleIcon} from "shared/assets/icons/aboutUs/people.svg";
import {ReactComponent as ScalesIcon} from "shared/assets/icons/aboutUs/scales.svg";

export const ABOUT_US_ITEMS: AboutUsItemProps[] = [
    {
        Icon: MedalIcon,
        text: 'Опыт работы 10 лет'
    },
    {
        Icon: PaperIcon,
        text: 'Разрешение на работу и визу помогут оформить наши  специалисты'
    },
    {
        Icon: PeopleIcon,
        text: 'Работаем с Молдовой, Украиной, Беларусью и другими регионами'
    },
    {
        Icon: ScalesIcon,
        text: 'Только официальное трудоустройство у проверенных работодателей'
    }
]