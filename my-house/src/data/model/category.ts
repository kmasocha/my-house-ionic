export class Category implements ICategory{
Id=0;
Name='';
CreatedDate='';
}

export interface ICategory{
    Id:number,
    Name: string,
    CreatedDate:string,
}