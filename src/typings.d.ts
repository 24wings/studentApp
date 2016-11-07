// Typings reference file, you can add your own global typings here
// https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html

/// <reference path="../node_modules/@types/jquery/index.d.ts"/>
declare var System: any;



interface User {
    username: string;
    password: string;
    gender?: string;
    group?: string;
    studentNo?: string;
}
interface QueryDate {
    year: number;
    month: number;
    date: number;
}

interface Dinner {
    date: QueryDate;
    username: string;
    need: boolean;
}
