import {Country} from "shared/types/Country";
import {Review} from "shared/types/Review";
import loh from "shared/assets/img/loh.jpg";
import pipa from "shared/assets/img/pipa.jpeg";

export function fetchCountrySpecificReviews(country: Country): Promise<Review[]> {
    let reviews: Review[]
    if (country === 'estonia') {
        //     fetch estonia reviews
    }
    if (country === 'latvia') {
        //     fetch latvia reviews
    }
    if (country === 'lithuania') {
        //     fetch lithuania reviews
    }
    reviews = [
        {
            imgPath: loh,
            name: 'рамазан кадыров',
            age: 68,
            bio: 'Очень доволен работой, быстро подобрали и всё легально и безопасно! Слава Пыпе!'
        },
        {
            imgPath: pipa,
            name: 'владимир пыпа',
            age: 128,
            bio: 'Хрюк'
        }
    ]
    return new Promise(res => res(reviews))
}