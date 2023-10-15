import {createContext, ReactNode, useContext, useState} from "react";
import {Review} from "shared/types/Review";
import {Vacancy} from "../shared/types/Vacancy";

type ContextType = {
    mixed: {
        reviews: Review[],
        setReviews: React.Dispatch<React.SetStateAction<Review[]>>
    },
    estonia: {
        reviews: Review[],
        setReviews: React.Dispatch<React.SetStateAction<Review[]>>,
        vacancies: Vacancy[],
        setVacancies: React.Dispatch<React.SetStateAction<Vacancy[]>>,
    },
    latvia: {
        reviews: Review[],
        setReviews: React.Dispatch<React.SetStateAction<Review[]>>,
        vacancies: Vacancy[],
        setVacancies: React.Dispatch<React.SetStateAction<Vacancy[]>>,
    },
    lithuania: {
        reviews: Review[],
        setReviews: React.Dispatch<React.SetStateAction<Review[]>>,
        vacancies: Vacancy[],
        setVacancies: React.Dispatch<React.SetStateAction<Vacancy[]>>,
    }
}

const EntitiesContext = createContext<ContextType | null>(null)

export function EntitiesProvider({children}: { children: ReactNode }) {
    const [mixedReviews, setMixedReviews] = useState<Review[]>([]);
    const [estoniaReviews, setEstoniaReviews] = useState<Review[]>([]);
    const [estoniaVacancies, setEstoniaVacancies] = useState<Vacancy[]>([]);
    const [latviaReviews, setLatviaReviews] = useState<Review[]>([]);
    const [latviaVacancies, setLatviaVacancies] = useState<Vacancy[]>([]);
    const [lithuaniaReviews, setLithuaniaReviews] = useState<Review[]>([]);
    const [lithuaniaVacancies, setLithuaniaVacancies] = useState<Vacancy[]>([]);

    const entities: ContextType = {
        mixed: {
            reviews: mixedReviews,
            setReviews: setMixedReviews
        },
        estonia: {
            reviews: estoniaReviews,
            setReviews: setEstoniaReviews,
            vacancies: estoniaVacancies,
            setVacancies: setEstoniaVacancies,
        },
        latvia: {
            reviews: latviaReviews,
            setReviews: setLatviaReviews,
            vacancies: latviaVacancies,
            setVacancies: setLatviaVacancies
        },
        lithuania: {
            reviews: lithuaniaReviews,
            setReviews: setLithuaniaReviews,
            vacancies: lithuaniaVacancies,
            setVacancies: setLithuaniaVacancies
        }
    };

    return (
        <EntitiesContext.Provider value={entities}>
            {children}
        </EntitiesContext.Provider>
    )
}

export function useEntitiesContext() {
    const entities = useContext(EntitiesContext);
    if (!entities) {
        throw new Error(`"useEntitiesContext has to be used within <EntitiesProvider>"`)
    }
    return entities
}