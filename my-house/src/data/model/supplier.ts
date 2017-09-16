export class Supplier implements ISupplier{
Id=0;
Name='';
Address='';
Landline='';
MobileNumber='';
EmailAddress='';
Website='';
ContactPerson='';
Active=false;
}

export interface ISupplier{
    Id:number,
    Name:string,
    Address:string, 
    Landline:string,
    MobileNumber:string,
    EmailAddress:string,
    Website:string,
    ContactPerson:string,
    Active:boolean
}