import {Category} from "./category";
import {Sector} from "./sector";
import {Employee} from "./employee";
import {Tag} from "./tag";

export interface Company {
  name: string;
  city: string;
  countryCode: string;
  countryCode3?: string;
  isCustomer: boolean;
  category: Category | null;
  note: string | null;
  sector: Sector;
  employees: Employee[];
  tags: Tag[];
}
