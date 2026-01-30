export interface NewsItem {
    id: number;
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
    }
    date: string;
}
