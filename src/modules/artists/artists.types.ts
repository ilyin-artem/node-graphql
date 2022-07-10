export type InputArtist = {
    firstName: string;
    secondName: string;
    middleName?: string;
    birthDate?: string;
    birthPlace?: string;
    country: string;
    bands?: Array<string>;
    instruments?: string;
};

export type Artist = {
    _id: string;
    firstName: string;
    secondName: string;
    middleName?: string;
    birthDate?: string;
    birthPlace?: string;
    country: string;
    bands?: Array<string>;
    instruments?: string;
};
