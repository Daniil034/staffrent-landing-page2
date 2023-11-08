import {ReactNode} from "react";

export type Vacancy = {
    imgSrc: string[],
    title: string,
    subtitle: string,
    descriptionTitle: string,
    description: string | ReactNode,
    rate: number,
    id: string,
    country: string,
}