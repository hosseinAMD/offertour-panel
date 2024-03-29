import moment from "moment-jalaali";
import hotels from './hotels';
import trips from './trips';

const tours = [
    {
        id:1,
        title: 'تور دبی + ابوظبی',
        status:1,
        featured:0,
        category:3,
        country:4,
        city:4,
        startPrice:6500000,
        startDate: moment(),
        endDate: moment().add(10, 'days'),
        duration: '۳ هفته',
        flightCompany:3,
        documents: ' اسکن پاسپورت با 7 ماه اعتبار',
        services: ' بلیت رفت و برگشت ، 6 شب و 7 روز اقامت در هتل طبق سرویس هتل ، بیمه مسافرتی ، گشت خرید رایگان، لیدر فارسی زبان',
        fullDescription: 'کودک زیر 2 سال 190.000 تومان می باشد نرخ کودک با تخت بر اساس 1 کودک در هر اتاق محاسبه شده در صورت اقامت 2 کودک در هر اتاق نرخ کودک با تخت با کانتر فروش هماهنگ شود. همکاران ما در روزهای عادی از ساعت 09:00 - 20:00 و در روز های پنجشنبه و تعطیل از ساعت 09:00 - 16:00 پاسخگوی شما عزیزان می باشند . شماره تماس جهت رزرو تور خارج از ساعت کاری:09386898872 درصورت درخواست صندلی هما کلاس(بیزینس)مبلغ 200 هزار تومان اضافه می شود.',
        trips: trips,
        hotels: hotels
    },
    {
        id:2,
        title: 'تور فرانسه',
        status:1,
        featured:1,
        category:4,
        country:7,
        city:6,
        startPrice:12000000,
        startDate: moment(),
        endDate: moment().add(10, 'days'),
        duration: '۲ هفته',
        flightCompany:6,
        documents: ' اسکن پاسپورت با 7 ماه اعتبار',
        services: ' بلیت رفت و برگشت ، 6 شب و 7 روز اقامت در هتل طبق سرویس هتل ، بیمه مسافرتی ، گشت خرید رایگان، لیدر فارسی زبان',
        fullDescription: 'کودک زیر 2 سال 190.000 تومان می باشد نرخ کودک با تخت بر اساس 1 کودک در هر اتاق محاسبه شده در صورت اقامت 2 کودک در هر اتاق نرخ کودک با تخت با کانتر فروش هماهنگ شود. همکاران ما در روزهای عادی از ساعت 09:00 - 20:00 و در روز های پنجشنبه و تعطیل از ساعت 09:00 - 16:00 پاسخگوی شما عزیزان می باشند . شماره تماس جهت رزرو تور خارج از ساعت کاری:09386898872 درصورت درخواست صندلی هما کلاس(بیزینس)مبلغ 200 هزار تومان اضافه می شود.',
        trips: trips,
        hotels: hotels
    },
    {
        id:3,
        title: 'تور کیش + قشم',
        status:0,
        featured:0,
        category:1,
        country:1,
        city:2,
        startPrice:850000,
        startDate: moment(),
        endDate: moment().add(10, 'days'),
        duration: 'یک هفته',
        flightCompany:1,
        documents: ' اسکن پاسپورت با 7 ماه اعتبار',
        services: ' بلیت رفت و برگشت ، 6 شب و 7 روز اقامت در هتل طبق سرویس هتل ، بیمه مسافرتی ، گشت خرید رایگان، لیدر فارسی زبان',
        fullDescription: 'کودک زیر 2 سال 190.000 تومان می باشد نرخ کودک با تخت بر اساس 1 کودک در هر اتاق محاسبه شده در صورت اقامت 2 کودک در هر اتاق نرخ کودک با تخت با کانتر فروش هماهنگ شود. همکاران ما در روزهای عادی از ساعت 09:00 - 20:00 و در روز های پنجشنبه و تعطیل از ساعت 09:00 - 16:00 پاسخگوی شما عزیزان می باشند . شماره تماس جهت رزرو تور خارج از ساعت کاری:09386898872 درصورت درخواست صندلی هما کلاس(بیزینس)مبلغ 200 هزار تومان اضافه می شود.',
        trips: trips,
        hotels: hotels
    },
];

export default tours;