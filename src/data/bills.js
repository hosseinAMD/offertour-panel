import moment from 'moment-jalaali';

const bills = [
    {
        id: 0,
        product: 0,
        paymentStatus: true,
        price: 0,
        date: moment().subtract(3, 'months')
    },
    {
        id: 1,
        product: 2,
        paymentStatus: true,
        price: 2,
        date: moment().subtract(2, 'months')
    },
    {
        id: 2,
        product: 2,
        paymentStatus: true,
        price: 2,
        date: moment().subtract(1, 'months')
    },
    {
        id: 3,
        product: 3,
        paymentStatus: false,
        price: 3,
        date: moment().subtract(1, 'weeks')
    },
    {
        id: 1,
        product: 3,
        paymentStatus: true,
        price: 1,
        date: moment().subtract(1, 'weeks')
    },
    {
        id: 3,
        product: 3,
        paymentStatus: false,
        price: 3,
        date: moment().subtract(1, 'weeks')
    },
];

export default bills;