import logo_main from './../../src/images/05_hero/gauge_1.svg';
import logo_main_2 from './../../src/images/05_hero/gauge_2.svg';
import logo_main_3 from './../../src/images/05_hero/gauge_3.svg';
import logo_main_5 from './../../src/images/05_hero/gauge_5.svg';
import logo_main_6 from './../../src/images/05_hero/gauge_6.svg';
import logo_main_8 from './../../src/images/05_hero/gauge_8.svg';
import logo_main_10 from './../../src/images/05_hero/gauge_10.svg';
import logo_main_12 from './../../src/images/05_hero/gauge_12.svg';

export const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

export const EXCEL_EXTENSION = '.xlsx';

export const LARGE_SCREEN_SIZE = 1550;
export const MEDIUM_SCREEN_SIZE = 1200;
export const MAX_TOOLS_QTY = 50;
export const MID_TOOLS_QTY = 50
export const MAX_EXTRA_TOOLS_QTY = 25;
export const MID_EXTRA_TOOLS_QTY = 25;

export const logoList = [logo_main, logo_main_2, logo_main_3, logo_main_5, logo_main_6, logo_main_8, logo_main_10, logo_main_12 ];
export const greetingList = ["Добро пожаловать", "Как же мы Вам рады", "Как здорово, что Вы теперь с нами", "Давно не виделись", "Как же давно Вы к нам не заходили", "Хорошо, что Вы всё таки зашли к нам" ];

export const DEPARTMENTS = [
    {
        _id: 1,
        shortNameEN: 'QA',
        longNameEN: 'Quality Assurance',
        longNameRU: 'Департамент гарантии качества',
    },
    {
        _id: 2,
        shortNameEN: 'QC',
        longNameEN: 'Quality Control',
        longNameRU: 'Департамент контроля качества',
    },
    {
        _id: 3,
        shortNameEN: 'Assembly',
        longNameEN: 'Assembly shop',
        longNameRU: 'Цех сборки',
    },
    {
        _id: 4,
        shortNameEN: 'Stamping',
        longNameEN: 'Stamping shop',
        longNameRU: 'Цех штамповки',
    },
    {
        _id: 5,
        shortNameEN: 'Welding',
        longNameEN: 'Welding shop',
        longNameRU: 'Цех сварки',
    },
    {
        _id: 6,
        shortNameEN: 'Paint',
        longNameEN: 'Paint shop',
        longNameRU: 'Цех окраски',
    },
    {
        _id: 7,
        shortNameEN: 'Maintenance',
        longNameEN: 'Maintenance',
        longNameRU: 'Департамент обслуживания технологического оборудования',
    },
    {
        _id: 8,
        shortNameEN: 'PE&S',
        longNameEN: 'Plant Engineering & Safety',
        longNameRU: 'Департамент производственного инжиниринга и охраны труда',
    },
    {
        _id: 9,
        shortNameEN: 'R&D',
        longNameEN: 'Research & Development',
        longNameRU: 'Департамент исследований и разработок',
    }
]