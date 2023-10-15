import {Country} from "shared/types/Country";
import {Vacancy} from "shared/types/Vacancy";
import loh from "shared/assets/img/loh.jpg";

export function fetchVacancies(country: Country): Promise<Vacancy[]> {
    let vacancies: Vacancy[];

    if (country === 'estonia') {
        //     fetch estonia
    }
    if (country === 'latvia') {
        //     fetch latvia
    }
    if (country === 'lithuania') {
        //     fetch lithuania
    }

    const countries: { [key in Country]: string } = {
        estonia: "Эстония",
        latvia: "Латвия",
        lithuania: "Литва"
    }

    vacancies = [
        {
            imgSrc: loh,
            title: 'Членосос',
            subtitle: 'subtitle',
            descriptionTitle: 'description title',
            description: 'description',
            rate: 0.1,
            id: 'vilizivatelChlenov',
            country: countries.estonia
        },
        {
            imgSrc: loh,
            title: 'Очконюх',
            subtitle: 'subtitle',
            descriptionTitle: 'description title',
            description: 'description',
            rate: 0.1,
            id: 'vilizivatelOchek',
            country: countries.latvia
        }
    ]

    return new Promise(res => res(vacancies))
}