import {Country} from "shared/types/Country";
import {Vacancy} from "shared/types/Vacancy";
import metalConstructionsAssembler from 'shared/assets/img/vacancyStubs/metalConstructionsAssembler.png';
import railwaysConstruction from 'shared/assets/img/vacancyStubs/railwaysConstruction.jpg';
import fishProcessingFactory from 'shared/assets/img/vacancyStubs/fishProcessingFactory.jpg';
import roadConstructionWorker from 'shared/assets/img/vacancyStubs/roadConstructionWorker.jpg';
import crabSticksProductionWorker from 'shared/assets/img/vacancyStubs/crabSticksProductionWorker.jpg';
import fireWoodProduction1 from 'shared/assets/img/vacancyStubs/fireWoodProduction1.jpg';
import fireWoodProduction2 from 'shared/assets/img/vacancyStubs/fireWoodProduction2.jpg';
import fishProcessingFactory2 from 'shared/assets/img/vacancyStubs/fishProcessingFactory2.jpg';
import fishProcessingFactory3 from 'shared/assets/img/vacancyStubs/fishProcessingFactory3.jpg';
import fishProcessingFactory4 from 'shared/assets/img/vacancyStubs/fishProcessingFactory4.jpg';
import seamstress from 'shared/assets/img/vacancyStubs/seamstress.jpg';
import styles from './vacancies.module.scss';

export function fetchVacancies(country: Country): Promise<Vacancy[]> {
    let vacancies: Vacancy[];

    const countries: { [key in Country]: string } = {
        estonia: "Эстония",
        latvia: "Латвия",
        lithuania: "Литва",
    }

    const vacanciesWithoutId = [
        {
            imgSrc: [metalConstructionsAssembler],
            title: 'Сборщик металлических конструкций',
            subtitle: 'Требуются слесаря сборщики',
            descriptionTitle: '',
            description: <>
                <div className={styles.textBlock}>
                    <span>Обязанности:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>
                            Сборка строительных металлоконструкций:
                            <ul className={styles.vacancyList2ndLevel}>
                                <li>Балки</li>
                                <li>Фермы</li>
                                <li>Колонны</li>
                                <li>Сборка ёмкостей</li>
                                <li>3D модели из листов</li>
                            </ul>
                        </li>
                        <li>Сборка металлических конструкций по чертежам</li>
                        <li>Сборка металлических конструкций по заказам</li>
                        <li>Шлифовка металла</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Требования:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Опыт работы от 2х лет</li>
                        <li>Чтение технологических чертежей</li>
                        <li>Работа с резаком газовым-плазменным</li>
                        <li>Минимальный опыт в сварке (в прихвате)</li>
                        <li>Знание Русского языка</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Время работы: 07:00-18:00</span><br/>
                    <span>Дни работы:  5:2</span>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 8-10 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Жильё (125 евро в месяц)</li>
                        <li>Транспорт до и с работы</li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                    </ul>
                </div>
            </>,
            rate: 10,
            id: '1',
            country: countries.latvia
        },
        {
            imgSrc: [metalConstructionsAssembler],
            title: 'Слесарь-монтажник',
            subtitle: '',
            descriptionTitle: '',
            description: <>
                <div className={styles.textBlock}>
                    <span>Требования:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Опыт работы от 2х лет</li>
                        <li>Опыт работы в болтовом монтаже</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Обязанности:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Зачистка швов</li>
                        <li>Финальная сборка металлоконструкций</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Время работы: 07:00-18:00</span><br/>
                    <span>Дни работы:  5:2</span>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 8-10 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Жильё (125 евро в месяц)</li>
                        <li>Транспорт до и с работы</li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                    </ul>
                </div>
            </>,
            rate: 8,
            id: '2',
            country: countries.latvia
        },
        {
            imgSrc: [metalConstructionsAssembler],
            title: 'Сварщик 135/136',
            subtitle: '',
            descriptionTitle: '',
            description: <>
                <div className={styles.textBlock}>
                    <span>Требования:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Опыт работы от 2х лет</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Обязанности:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Сварка промышленных металлоконструкций</li>
                        <li>Чтение технологических чертежей</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Время работы: 07:00-18:00</span><br/>
                    <span>Дни работы:  5:2</span>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 9-10 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Жильё (125 евро в месяц)</li>
                        <li>Транспорт до и с работы</li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                    </ul>
                </div>
            </>,
            rate: 10,
            id: '3',
            country: countries.latvia
        },
        {
            imgSrc: [],
            title: 'Разнорабочий на деревообрабатывающее предприятие',
            subtitle: '',
            descriptionTitle: '',
            description: <>
                <div className={styles.textBlock}>
                    <span>Требования:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Физическая устойчивость</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Обязанности:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Комплектовка товара</li>
                        <li>Укладывать пиломатериалы на линию для дальнейшей обработки (2-15 кг)</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Время работы: 06:30-15:00, 15:30-24:00</span><br/>
                    <span>Дни работы: посменно</span>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 6 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Жильё (125 евро в месяц)</li>
                        <li>Транспорт до и с работы</li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                    </ul>
                </div>
            </>,
            rate: 6,
            id: '4',
            country: countries.latvia
        },
        {
            imgSrc: [],
            title: 'Водитель фронтальных погрузчиков (большой погрузчик) на деревообрабатывающее предприятие',
            subtitle: '',
            descriptionTitle: '',
            description: <>
                <div className={styles.textBlock}>
                    <span>Требования:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Опыт работы от 2х лет</li>
                        <li>Наличие прав на управление спец. техникой</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Обязанности:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Перемещение готовой продукции по производству</li>
                        <li>Разгрузка, погрузка товара на грузовой автомобиль</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Время работы: 06:30-15:00, 15:30-24:00</span><br/>
                    <span>Дни работы: посменно</span>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 7 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Жильё (125 евро в месяц)</li>
                        <li>Транспорт до и с работы</li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                    </ul>
                </div>
            </>,
            rate: 7,
            id: '5',
            country: countries.latvia
        },
        {
            imgSrc: [],
            title: 'Кондитер на кондитерское предприятие',
            subtitle: '',
            descriptionTitle: '',
            description: <>
                <div className={styles.textBlock}>
                    <span>Требования:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Опыт работы не мене 1 года</li>
                        <li>Пол = женский</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Обязанности:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Выпечка мучных кондитерских изделий</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Время работы: 16:00-04:00</span><br/>
                    <span>Дни работы: 6:1 (ночные смены)</span>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 7 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Жильё (125 евро в месяц)</li>
                        <li>Транспорт до и с работы</li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                    </ul>
                </div>
            </>,
            rate: 7,
            id: '6',
            country: countries.latvia
        },
        {
            imgSrc: [railwaysConstruction],
            title: 'Разнорабочий на строительство железнодорожных путей',
            subtitle: '',
            descriptionTitle: '',
            description: <>
                <div className={styles.textBlock}>
                    <span>Требования:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Физическая устойчивость</li>
                        <li>Опыт работы не обязателен</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Обязанности:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Подготовительные работы для установки рельс</li>
                        <li>Монтаж брёвен в заранее подготовленные места, с помощью крана</li>
                        <li>Трамбовка щебня</li>
                        <li>Установка рельс, с помощью крана</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Время работы: 10 часов в день</span><br/>
                    <span>Дни работы: 5:2</span>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 6-6.5 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Жильё (125 евро в месяц)</li>
                        <li>Транспорт до и с работы</li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                    </ul>
                </div>
            </>,
            rate: 6.5,
            id: '7',
            country: countries.latvia
        },
        {
            imgSrc: [fishProcessingFactory],
            title: 'Разнорабочий на рыбное предприятие',
            subtitle: 'Требуются мужчины можно без опыта работы (2 человека)',
            descriptionTitle: '',
            description: <>
                <div className={styles.textBlock}>
                    <span>Требования:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Осторожность</li>
                        <li>Качественное выполнение своих обязанностей</li>
                        <li>Трудолюбие</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Обязанности:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Сортировка рыбы</li>
                        <li>Комплектовка рыбы по коробкам</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Время работы: с 08:00-17:00</span><br/>
                    <span>Дни работы: 5:2</span>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 5.5 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Жильё на производстве (БЕСПЛАТНО)</li>
                        <li>Транспорт до и с работы</li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                        <li>Возможность брать дополнительные смены</li>
                        <li>Возможность брать дополнительные часы</li>
                    </ul>
                </div>
            </>,
            rate: 5.5,
            id: '8',
            country: countries.latvia
        },
        {
            imgSrc: [roadConstructionWorker],
            title: 'Разнорабочий на дорожное строительство',
            subtitle: '',
            descriptionTitle: '',
            description: <>
                <div className={styles.textBlock}>
                    <span>Требования:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Физическая устойчивость</li>
                        <li>Опыт работы не обязателен</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Описание работы:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Работа на улице</li>
                        <li>Трамбовка щебня, песка</li>
                        <li>Установка бордюров</li>
                        <li>Установка дренажных систем</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Время работы: По 10 часов в день, в зависимости от погодных условий</span><br/>
                    <span>Дни работы: 5:2</span>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 6-6.5 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Жильё (125 евро в месяц)</li>
                        <li>Транспорт до и с работы</li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                    </ul>
                </div>
            </>,
            rate: 6.5,
            id: '9',
            country: countries.latvia
        },
        {
            imgSrc: [roadConstructionWorker],
            title: 'Бригадир на дорожное строительство',
            subtitle: '',
            descriptionTitle: '',
            description: <>
                <div className={styles.textBlock}>
                    <span>Требования:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Опыт работы бригадиром не менее 3х лет</li>
                        <li>Знание технических процессов</li>
                        <li>Самостоятельное руководство бригадой</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Обязанности:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Работа на улице</li>
                        <li>Трамбовка щебня, песка</li>
                        <li>Установка бордюров</li>
                        <li>Установка дренажных систем</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Время работы: По 10 часов в день, в зависимости от погодных условий</span><br/>
                    <span>Дни работы: 5:2</span>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 8-9 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Жильё (125 евро в месяц)</li>
                        <li>Транспорт до и с работы</li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                    </ul>
                </div>
            </>,
            rate: 9,
            id: '10',
            country: countries.latvia
        },
        {
            imgSrc: [roadConstructionWorker],
            title: 'Экскаваторщик на дорожное строительство',
            subtitle: '',
            descriptionTitle: '',
            description: <>
                <div className={styles.textBlock}>
                    <span>Требования:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Опыт работы от 2х лет</li>
                        <li>Наличие прав на управление спец. техникой</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Обязанности:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Копать траншеи</li>
                        <li>Подвозка сыпучих материалов</li>
                        <li>Погрузка, разгрузка грузовых автомобилей</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Время работы: По 10 часов в день, в зависимости от погодных условий</span><br/>
                    <span>Дни работы: 5:2</span>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 8-10 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Жильё (125 евро в месяц)</li>
                        <li>Транспорт до и с работы</li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                    </ul>
                </div>
            </>,
            rate: 10,
            id: '11',
            country: countries.latvia
        },
        {
            imgSrc: [roadConstructionWorker],
            title: 'Асфальтоукладчик на дорожное строительство',
            subtitle: '',
            descriptionTitle: '',
            description: <>
                <div className={styles.textBlock}>
                    <span>Требования:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Опыт работы от 2х лет</li>
                        <li>Наличие прав на управление спец. техникой</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Обязанности:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Укладка асфальтного материала</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Время работы: По 10 часов в день, в зависимости от погодных условий</span><br/>
                    <span>Дни работы: 5:2</span>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 8-10 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Жильё (125 евро в месяц)</li>
                        <li>Транспорт до и с работы</li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                    </ul>
                </div>
            </>,
            rate: 10,
            id: '12',
            country: countries.latvia
        },
        {
            imgSrc: [roadConstructionWorker],
            title: 'Специалист по установке тротуарной плитки (брусчатка) на дорожное строительство',
            subtitle: '',
            descriptionTitle: '',
            description: <>
                <div className={styles.textBlock}>
                    <span>Требования:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Опыт работы от 2х лет</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Обязанности:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Подготовка дорожного покрытия (песок, щебень, фракция)</li>
                        <li>Установка бордюров</li>
                        <li>Установка тротуарной плитки</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Время работы: По 10 часов в день, в зависимости от погодных условий</span><br/>
                    <span>Дни работы: 5:2</span>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 6.5-7 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Жильё (125 евро в месяц)</li>
                        <li>Транспорт до и с работы</li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                    </ul>
                </div>
            </>,
            rate: 7,
            id: '13',
            country: countries.latvia
        },
        {
            imgSrc: [crabSticksProductionWorker],
            title: 'Разнорабочий на производство крабовых палочек',
            subtitle: '10 человек (мужчины)',
            descriptionTitle: '',
            description: <>
                <div className={styles.textBlock}>
                    <span>Требования:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Физическая устойчивость</li>
                        <li>Желание работать</li>
                        <li>Отсутствие вредных привычек</li>
                        <li>Опыт работы не обязателен</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Обязанности:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Работа на линии</li>
                        <li>Комлектовка товара</li>
                        <li>Контроль качества товара</li>
                        <li>Подвоз массы к линии для изготовления продукции</li>
                        <li>Дополнительные работы</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Время работы: 09:00-18:00</span><br/>
                    <span>Дни работы: 5:2</span>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 5.50-6 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Жильё (125 евро в месяц)</li>
                        <li>Транспорт до и с работы</li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                    </ul>
                </div>
            </>,
            rate: 6,
            id: '14',
            country: countries.latvia
        },
        {
            imgSrc: [fireWoodProduction1, fireWoodProduction2],
            title: 'Разнорабочий на изготовление дров',
            subtitle: '2 человека',
            descriptionTitle: '',
            description: <>
                <div className={styles.textBlock}>
                    <span>Требования:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Физическая устойчивость</li>
                        <li>Опыт работы не обязателен</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Обязанности: (КОЛЬЩИК)</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Работа на линии</li>
                        <li>Контроль работы линии</li>
                        <li>Укладка брёвен с помощью эскалатора-трактора</li>
                        <li>Контролировать работу кольного пресса</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Время работы: работа по 12 часов</span><br/>
                    <span>Дни работы: 5:2</span>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 5.5-6 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Жильё (125 евро в месяц)</li>
                        <li>Транспорт до и с работы</li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                        <li>Возможность брать дополнительные смены</li>
                    </ul>
                </div>
            </>,
            rate: 6,
            country: countries.latvia
        },
        {
            imgSrc: [fireWoodProduction1, fireWoodProduction2],
            title: 'Разнорабочий-упаковщица на лесопилку',
            subtitle: '10 человек (женщины)',
            descriptionTitle: '',
            description: <>
                <div className={styles.textBlock}>
                    <span>Требования:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Физическая устойчивость</li>
                        <li>Опыт работы не обязателен</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Обязанности: (УПАКОВЩИК)</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Упаковка готовой продукции на палеты</li>
                        <li>Упаковка продукции в мешки (сеточные мешки)</li>
                        <li>Работа на линии</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Время работы: работа по 12 часов</span><br/>
                    <span>Дни работы: 5:2</span>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 5-5.5 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Жильё (125 евро в месяц)</li>
                        <li>Транспорт до и с работы</li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                        <li>Возможность брать дополнительные смены</li>
                    </ul>
                </div>
            </>,
            rate: 5.5,
            country: countries.latvia
        },
        {
            imgSrc: [fireWoodProduction1, fireWoodProduction2],
            title: 'Разнорабочий-кочегар на лесопилку',
            subtitle: '4 человека',
            descriptionTitle: '',
            description: <>
                <div className={styles.textBlock}>
                    <span>Требования:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Физическая устойчивость</li>
                        <li>Опыт работы не обязателен</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Обязанности: (КОЧЕГАР)</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Работа на предприятии</li>
                        <li>Поддержка температуры в сушильных печах</li>
                        <li>Поддержание работы печи</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Время работы: работа по 12 часов</span><br/>
                    <span>Дни работы: 5:2</span>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 5.5-6 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Жильё (125 евро в месяц)</li>
                        <li>Транспорт до и с работы</li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                        <li>Возможность брать дополнительные смены</li>
                    </ul>
                </div>
            </>,
            rate: 6,
            country: countries.latvia
        },
        {
            imgSrc: [fishProcessingFactory2, fishProcessingFactory3, fishProcessingFactory4],
            title: 'Разнорабочие (семейные пары) на рыбопереробатывающие предприятие',
            subtitle: '8 человек (мужчины) 5.5 €, 6 человек (женщины) 5 €',
            descriptionTitle: '',
            description: <>
                <div className={styles.textBlock}>
                    <span>Требования:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Физическая устойчивость</li>
                        <li>Опыт работы не обязателен</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Обязанности:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Работа на автоматизированной линии</li>
                        <li>Контроль работы линии</li>
                        <li>Комплектовка готовой продукции</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Линия занимается обработкой рыбы</span>
                </div>
                <div className={styles.textBlock}>
                    <span>Время работы: 07:00-17:00</span><br/>
                    <span>Дни работы: 5:2</span>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 5-6 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Жильё (125 евро в месяц)</li>
                        <li>Транспорт до и с работы</li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                        <li>Возможность брать дополнительные смены</li>
                    </ul>
                </div>
            </>,
            rate: 6,
            country: countries.latvia
        },
        {
            imgSrc: [seamstress],
            title: 'Швея',
            subtitle: 'На начальном этапе 6-8 человек, в дальнейшем 20 - 30 человек',
            descriptionTitle: '',
            description: <>
                <div className={styles.textBlock}>
                    <span>Время работы: 200+EXTR</span><br/>
                </div>
                <div className={styles.textBlock}>
                    <span>Возможно жильё на территории производства</span>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 5.5 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                    </ul>
                </div>
            </>,
            rate: 5.5,
            country: countries.latvia
        },
        {
            imgSrc: [],
            title: 'Сварщик (135,136,141)',
            subtitle: '',
            descriptionTitle: '',
            description: <>
                <div className={styles.textBlock}>
                    <span>Требования:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Физическая устойчивость</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Обязанности:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Производство металлоконструкций</li>
                        <li>Машиностроение</li>
                        <li>Строительные конструкции</li>
                        <li>Прицепы</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Время работы: 250 часов</span><br/>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 8-10 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Жильё (125 евро в месяц)</li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                    </ul>
                </div>
            </>,
            rate: 10,
            country: countries.estonia
        },
        {
            imgSrc: [],
            title: 'Слесарь-сборщик',
            subtitle: 'Таллин',
            descriptionTitle: '',
            description: <>
                <div className={styles.textBlock}>
                    <span>Обязанности:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Сборка промышленного оборудования</li>
                        <li>Объемные конструкции</li>
                        <li>Работа с листовым металлом</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Время работы: 250 часов</span><br/>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 8.5 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Жильё (125 евро в месяц)</li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                    </ul>
                </div>
            </>,
            rate: 8.5,
            country: countries.estonia
        },
        {
            imgSrc: [],
            title: 'Вальцовщик',
            subtitle: 'Таллин',
            descriptionTitle: '',
            description: <>
                <div className={styles.textBlock}>
                    <span>Обязанности:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Объемные конструкции</li>
                        <li>Работа с листовым металлом</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Время работы: 250 часов</span><br/>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 8.5 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                    </ul>
                </div>
            </>,
            rate: 8.5,
            country: countries.estonia
        },
        {
            imgSrc: [],
            title: 'Разнорабочий',
            subtitle: 'Пярну',
            descriptionTitle: 'На производство текстильной промышленности',
            description: <>
                <div className={styles.textBlock}>
                    <span>Время работы: 8 часов</span><br/>
                    <span>Время работы: 5:2</span>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 6 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Жильё (100-125 евро в месяц)</li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                    </ul>
                </div>
            </>,
            rate: 6,
            country: countries.estonia
        },
        {
            imgSrc: [],
            title: 'Семейная пара на производство (деревообработка)',
            subtitle: 'Тарту',
            descriptionTitle: '',
            description: <>
                <div className={styles.textBlock}>
                    <span>Обязанности:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Работа в цеху в Тепле</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Время работы: 200 часов</span><br/>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 5.5-6 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Жильё (125 евро в месяц)</li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                    </ul>
                </div>
            </>,
            rate: 6,
            country: countries.estonia
        },
        {
            imgSrc: [],
            title: 'Плотник',
            subtitle: 'Тарту',
            descriptionTitle: 'Производство Модульных домов',
            description: <>
                <div className={styles.textBlock}>
                    <span>Время работы: 180 часов</span><br/>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 6.5 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Жильё (125 евро в месяц)</li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                    </ul>
                </div>
            </>,
            rate: 6.5,
            country: countries.estonia
        },
        {
            imgSrc: [],
            title: 'Разнорабочий на производство (деревообработка)',
            subtitle: 'Тарту',
            descriptionTitle: '',
            description: <>
                <div className={styles.textBlock}>
                    <span>Обязанности:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Работа в цеху в Тепле</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Время работы: 200 часов</span><br/>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 5.5-6 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Жильё (125 евро в месяц)</li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                    </ul>
                </div>
            </>,
            rate: 6,
            country: countries.estonia
        },
        {
            imgSrc: [],
            title: 'Разнорабочий на производство (деревообработка)',
            subtitle: 'Выру',
            descriptionTitle: '',
            description: <>
                <div className={styles.textBlock}>
                    <span>Обязанности:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Работа в цеху в Тепле</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Время работы: 200 часов</span><br/>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 6 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Жильё (125 евро в месяц)</li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                    </ul>
                </div>
            </>,
            rate: 6,
            country: countries.estonia
        },
        {
            imgSrc: [],
            title: 'Строитель на реновацию здания',
            subtitle: 'Тарту',
            descriptionTitle: '',
            description: <>
                <div className={styles.textBlock}>
                    <span>Обязанности:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Плотницкие работы</li>
                        <li>Установка плитки</li>
                        <li>Установка бруса</li>
                        <li>Установка дверей</li>
                        <li>Установка паркета</li>
                        <li>Установка гипсокартона</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 7 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Жильё (125 евро в месяц)</li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                    </ul>
                </div>
            </>,
            rate: 7,
            country: countries.estonia
        },
        {
            imgSrc: [],
            title: 'Бетонщик',
            subtitle: 'Таллинн',
            descriptionTitle: 'Производство бетонных панелей',
            description: <>
                <div className={styles.textBlock}>
                    <span>Требования:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Опыт работы от 2 лет</li>
                        <li>Умение читать чертежи</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Время работы: 220 часов</span><br/>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 7 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Жильё (125 евро в месяц)</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                    </ul>
                </div>
            </>,
            rate: 7,
            country: countries.estonia
        },
        {
            imgSrc: [],
            title: 'Разнорабочий на установку и комплектовку окон',
            subtitle: 'Пайде',
            descriptionTitle: '',
            description: <>
                <div className={styles.textBlock}>
                    <span>Время работы: 200 часов</span><br/>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 6 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Жильё (125 евро в месяц)</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                    </ul>
                </div>
            </>,
            rate: 6,
            country: countries.estonia
        },
        {
            imgSrc: [],
            title: 'Фрезеровщик на мануальный станок',
            subtitle: 'Таллин',
            descriptionTitle: '',
            description: <>
                <div className={styles.textBlock}>
                    <span>Требования:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Опыт работы по той же специальности: от 5 лет</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Обязанности:</span>
                    <p>
                        Обработка деталей на мануальных фрезерных станках (Консольно-фрезерный станок 6П83-1, 6П82,
                        6П81Ш). Также можно пройти обучение на месте на оператора фрезерного станка с ЧПУ, на долбежном
                        станке 7А420 и шлифовального станка
                    </p>
                </div>
                <div className={styles.textBlock}>
                    <span>Время работы: 200-220 часов</span><br/>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 7 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                    </ul>
                </div>
            </>,
            rate: 7,
            country: countries.estonia
        },
        {
            imgSrc: [],
            title: 'Плотник, маляр, кровельщик на строительный объект',
            subtitle: 'Таллин',
            descriptionTitle: '',
            description: <>
                <div className={styles.textBlock}>
                    <span>Требования:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Опыт работы от 2 лет</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Время работы: 200-220 часов</span><br/>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 6-8 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Жильё (125 евро в месяц)</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                        <li>Предоставляем рабочую одежду</li>
                    </ul>
                </div>
            </>,
            rate: 8,
            country: countries.estonia
        },
        {
            imgSrc: [],
            title: 'Маляр по металлу',
            subtitle: '',
            descriptionTitle: '',
            description: <>
                <div className={styles.textBlock}>
                    <span>Требования:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Умение и опыт красить порошковой и жидкой краской</li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <span>Время работы: 200-220 часов</span><br/>
                </div>
                <div className={styles.textBlock}>
                    <span>Мы предлагаем:</span>
                    <ul className={styles.vacancyList1stLevel}>
                        <li>Конкурентоспособную Заработную плату от 6-8 евро\час и более в зависимости от опыта
                            работы
                        </li>
                        <li>Рабочую визу на 12 месяцев</li>
                        <li>Жильё (125 евро в месяц)</li>
                        <li>Полную занятость</li>
                        <li>Официальное трудоустройство</li>
                        <li>Возможность карьерного роста</li>
                        <li>Предоставляем рабочую одежду</li>
                    </ul>
                </div>
            </>,
            rate: 8,
            country: countries.estonia
        }
    ];

    vacancies = vacanciesWithoutId.map((vacancy, index) => ({...vacancy, id: String(index)}));

    if (country === 'estonia') {
        //     fetch estonia
        return new Promise(res => res(vacancies.filter(vacancy => vacancy.country === 'Эстония')))
    }
    if (country === 'latvia') {
        //     fetch latvia
        return new Promise(res => res(vacancies.filter(vacancy => vacancy.country === 'Латвия')))
    }
    if (country === 'lithuania') {
        //     fetch lithuania
        return new Promise(res => res(vacancies.filter(vacancy => vacancy.country === 'Литва')))
    }

    throw new Error('Страницы для подобной страны не существует')
}