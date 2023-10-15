import {NavigationHeroSection} from "sections/NavigationHeroSection/NavigationHeroSection";
import {AboutUsSection} from "sections/AboutUsSection/AboutUsSection";
import {WhyWeSection} from "sections/WhyWeSection/WhyWeSection";
import {FormSection} from "sections/FormSection/FormSection";
import {ReviewsSection} from "sections/ReviewsSection/ReviewsSection";
import {InstaIframeSection} from "sections/InstaIframeSection/InstaIframeSection";
import {ContactsSection} from "sections/ContactsSection/ContactsSection";
import {useEntitiesContext} from "entitites/useEntitiesContext";
import {useEffect} from "react";
import {fetchMixedReviews} from "entitites/mixedReviews/mixedReviews";

export function MainPage() {
    const entities = useEntitiesContext();

    useEffect(() => {
        fetchMixedReviews().then(reviews => {
            entities.mixed.setReviews(reviews)
        })
    }, []);

    return (
        <>
            <NavigationHeroSection/>
            <AboutUsSection/>
            <WhyWeSection/>
            <FormSection/>
            <ReviewsSection/>
            <InstaIframeSection/>
            <ContactsSection/>
        </>
    );
}