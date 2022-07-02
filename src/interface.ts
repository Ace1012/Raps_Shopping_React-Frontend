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
    quantity?:number;
}

export interface ICategoryItem{
    id:number;
    name:string;
    items:Item[];
}

export interface CartItem{
    id:number;
    item:Item;
    quantity:number;
}

export interface IList{
    id:number;
    name:string;
    items:Item[]
}

export interface IUseFetchData{
    data: Item | Item[] | ICategory | ICategory[] | ICategoryItem[];
    isPending: boolean;
    error: string;
}