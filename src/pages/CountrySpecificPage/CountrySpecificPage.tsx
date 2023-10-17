import {Route, Routes, useParams} from "react-router-dom";
import {Country} from "shared/types/Country";
import {useEffect} from "react";
import {fetchCountrySpecificReviews} from "entitites/countrySpecificReviews/countrySpecificReviews";
import {useEntitiesContext} from "entitites/useEntitiesContext";
import {CountrySpecificPageDescription} from "./CountrySpecificPageDescription";
import {VacancyPage} from "../VacancyPage/VacancyPage";
import {fetchVacancies} from "../../entitites/vacancies/vacancies";

export default function CountrySpecificPage() {
    const {countryName} = useParams();
    const entities = useEntitiesContext()

    useEffect(() => {
        fetchCountrySpecificReviews(countryName as Country).then(reviews => {
            entities[countryName as Country].setReviews(reviews);
        })
        fetchVacancies(countryName as Country).then(vacancies => {
            entities[countryName as Country].setVacancies(vacancies)
        })
    }, [countryName]);

    return (
        <Routes>
            <Route index element={<CountrySpecificPageDescription countryName={countryName as Country}/>}/>
            <Route path='vacancies/:vacancyId' element={<VacancyPage/>}/>
        </Routes>
    );
}