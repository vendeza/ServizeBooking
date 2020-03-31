module.exports = {
    employees: [
        {
            id: 1,
            name: 'Emma Brown',
            experience: '10',
            skills: 'cut beard, cut hair, nails',
            photo: require('../../img/employee/1.png'),
        },
        {
            id: 2,
            name: 'Mary Yona',
            experience: '5',
            skills: 'cut hair, nails',
            photo: require('../../img/employee/2.png'),
        },
        {
            id: 3,
            name: 'Jasica Balak',
            experience: '8',
            skills: 'cut beard, cut hair, nails',
            photo: require('../../img/employee/3.png'),
        },
        {
            id: 4,
            name: 'Anna Lamar',
            experience: '20',
            skills: 'cut beard, cut hair, nails',
            photo: require('../../img/employee/4.png'),
        },
        {
            id: 5,
            name: 'Monica Iovich',
            experience: '10',
            skills: 'cut beard, cut hair, nails',
            photo: require('../../img/employee/5.png'),
        },
        {
            id: 6,
            name: 'Alma Flow',
            experience: '10',
            skills: 'cut beard, cut hair, nails',
            photo: require('../../img/employee/6.png'),
        },
        {
            id: 7,
            name: 'Emma Bing',
            experience: '10',
            skills: 'cut beard, cut hair, nails',
            photo: require('../../img/employee/7.png'),
        },
        {
            id: 8,
            name: 'Michel Parry',
            experience: '10',
            skills: 'cut beard, cut hair, nails',
            photo: require('../../img/employee/8.png'),
        },
        {
            id: 9,
            name: 'Lola Brown',
            experience: '10',
            skills: 'cut beard, cut hair, nails',
            photo: require('../../img/employee/9.png'),
        },
        {
            id: 10,
            name: 'Mary Portman',
            experience: '10',
            skills: 'cut beard, cut hair, nails',
            photo: require('../../img/employee/10.png'),
        },
        {
            id: 11,
            name: 'Sonya Spears',
            experience: '10',
            skills: 'cut beard, cut hair, nails',
            photo: require('../../img/employee/11.png'),
        },
    ],
    services: [
        {
            id: 1,
            title: 'Hairstyle',
            photo: '../../img/stathem.jpg',
            items: [
                {
                    title: 'Curls & Waves',
                    price: 52,
                    img: require('../../img/service/hair_style/CurlsWaves.jpg'),
                },
                {
                    title: 'Sally',
                    price: 89,
                    img: require('../../img/service/hair_style/Sally.jpg'),
                },
                {
                    title: 'Wedding',
                    price: 65,
                    img: require('../../img/service/hair_style/Wedding.jpg'),
                },
            ],
        },
        {
            id: 2,
            title: 'Hair Extensions',
            photo: '../../img/hardy.jpg',
            content: 'some text some text some text some text some text',
            items: [
                {
                    title: 'American Pride I-TIP',
                    price: 55,
                    img: require('../../img/service/hair_extensions/ap.jpg'),
                },
                {
                    title: 'Beauty Works Mane Attraction 16',
                    price: 65,
                    img: require('../../img/service/hair_extensions/bw.jpg'),
                },
            ],
        },
        {
            id: 3,
            title: 'Nails',
            photo: '../../img/hardy.jpg',
            content: 'some text some text some text some text some text',
            items: [
                {
                    title: 'Gellux Gel',
                    price: 25,
                    img: require('../../img/service/nails/gg.jpg'),
                },
                {
                    title: 'OPI Mexico',
                    price: 29,
                    img: require('../../img/service/nails/om.jpg'),
                },
            ],
        },
        {
            id: 4,
            title: 'Eyelash extensions',
            photo: '../../img/hardy.jpg',
            content: 'some text some text some text some text some text',
            items: [
                {
                    title: 'Eyelash',
                    price: 19,
                    img: require('../../img/service/eye/eye.jpg'),
                },
            ],
        },
        {
            id: 5,
            title: 'Hair dyeing',
            photo: '../../img/hardy.jpg',
            content: 'some text some text some text some text some text',
            items: [
                {
                    title: 'Igora',
                    price: 79,
                    img: require('../../img/service/hair_dyeing/igora.jpg'),
                },
            ],
        },
        {
            id: 6,
            title: 'Makeup',
            photo: '../../img/hardy.jpg',
            content: 'some text some text some text some text some text',
            items: [
                {
                    title: 'Moka',
                    price: 59,
                    img: require('../../img/service/makeup/moka.jpg'),
                },
                {
                    title: 'Wena',
                    price: 45,
                    img: require('../../img/service/makeup/wena.jpg'),
                },
                {
                    title: 'Wendding',
                    price: 68,
                    img: require('../../img/service/makeup/wendding.jpg'),
                },
            ],
        },
    ],
    times: [
        {
            title: 'Morning',
            slots: [
                { time: '10:30', status: 'free' },
                { time: '10:35', status: 'reserved' },
                { time: '10:36', status: 'reserved' },
                { time: '10:40', status: 'free' },
            ],
        },
        {
            title: 'Day',
            slots: [
                { time: '12:30', status: 'free' },
                { time: '12:35', status: 'reserved' },
                { time: '12:36', status: 'reserved' },
                { time: '12:40', status: 'free' },
            ],
        },
        {
            title: 'Evening',
            slots: [
                { time: '21:30', status: 'free' },
                { time: '21:35', status: 'reserved' },
                { time: '21:36', status: 'reserved' },
                { time: '21:40', status: 'free' },
            ],
        },
    ],
    history: [
        {
            id: 1,
            title: 'Стрижка волос',
            photo: '../../img/stathem.jpg',
            nameEmployee: 'Валера',
            date: '20.02.2020 21:40',
            price: '1200',
        },
        {
            id: 2,
            title: 'Стрижка бороды',
            photo: '../../img/hardy.jpg',
            nameEmployee: 'Людмила',
            date: '20.02.2020 21:40',
            price: '1200',
        },
        {
            id: 3,
            title: 'Наращивание головы',
            photo: '../../img/hardy.jpg',
            nameEmployee: 'Анжела',
            date: '20.02.2020 21:40',
            price: '1200',
        },
    ],
};
