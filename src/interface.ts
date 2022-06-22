export interface ICategory{
    id:number;
    name:string;
}

export interface Item{
    id:number;
    name:string;
    stock:number;
    price:number;
    category:ICategory;
}

export interface ICategoryItem{
    id:number;
    name:string;
    items:Item[];
}

export type fetchedData = Item & Item[] & ICategory & ICategory[] & ICategoryItem[];