import {ICategory} from '../model/category';
import {ISupplier} from '../model/supplier';


export interface IFacadeService{
getCategories():ICategory[];

}