export interface List{
  id: string;
  name: string;
  description: string;
  items: Array<Item>;
}
export interface Item{
  id: string;
  listId: string;
  propertyString: string;
  propertyString2: string;
  propertyNumber: number;
  done: boolean;


}
