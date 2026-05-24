export interface profileType{
    name:string,
    bio:string,
    skillsOffered:string,
    skillsWanted:string
}

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    bio: string;
    skillsOffered: string;
    skillsWanted: string;
}