export class Schedule implements ISchedule{
    Id=0;
    Name='';
    SupplierId=0;
    ServiceDate=null;
    Active=false;
}
export interface ISchedule{
    Id:number,
    Name: string,
    SupplierId:Number,
    ServiceDate:Date,
    Active:Boolean
}