import {CountrySpecificHeroSection} from "sections/CountrySpecificHeroSection/CountrySpecificHeroSection";
import {Country} from "shared/types/Country";
import {VacanciesSection} from "sections/VacanciesSection/VacanciesSection";
import {FormSection} from "sections/FormSection/FormSection";
import {
    CountrySpecificReviewsSection
} from "sections/CountrySpecificReviewsSection/CountrySpecificReviewsSection";
import {
    CountrySpecificContactsSection
} from "sections/CountrySpecificContactsSection/CountrySpecificContactsSection";
import {InstaIframeSection} from "../../sections/InstaIframeSection/InstaIframeSection";

type Props = {
    countryName: Country
};

export function CountrySpecificPageDescription(props: Props) {
    return (
        <>
            <CountrySpecificHeroSection country={props.countryName as Country}/>
            <VacanciesSection countryName={props.countryName as Country}/>
            <FormSection/>
            <CountrySpecificReviewsSection country={props.countryName as Country}/>
            <InstaIframeSection/>
            <CountrySpecificContactsSection country={props.countryName as Country}/>
        </>
    );
}