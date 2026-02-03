export interface BlogPost {
    id: number;
    date: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    acf: {
        img: string;
        "img-alt": string;
        description: string;
    },
    slug: string;
}
