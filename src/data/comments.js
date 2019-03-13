import moment from 'moment';
const comments = [
    {
        id:1,
        author:'ژاله بهاری',
        comment:'تور فوق العاده عالی بود... ممنون',
        createdAt:moment().add(2,'days'),
        tour:2
    },
    {
        id:2,
        author:'رضا محسنی',
        comment:'این تور لیدرش کیه؟',
        createdAt:moment().add(1,'days'),
        tour:1
    },
    {
        id:3,
        author:'کمال شافع',
        comment:'مرسی از آفرتور',
        createdAt:moment().add(4,'hours'),
        tour:3
    },
    {
        id:4,
        author:'مهلا محمدی',
        comment:'چرا انقد قیمتاش گرونه؟؟؟؟؟؟',
        createdAt:moment().add(2,'hours'),
        tour:1
    },
];

export default comments;