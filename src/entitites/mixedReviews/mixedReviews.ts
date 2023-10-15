import loh from "shared/assets/img/loh.jpg";
import pipa from "shared/assets/img/pipa.jpeg";
import {Review} from "shared/types/Review";

export function fetchMixedReviews(): Promise<Review[]> {
    return new Promise(res => res([
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
    ]))
}