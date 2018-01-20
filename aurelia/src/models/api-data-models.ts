export interface ApiList{
  id: string;
  name: string;
  description: string;
  items: Array<ApiItem>;
}
export interface ApiItem{
  id: string;
  listId: string;
  propertyString: string;
  propertyString2: string;
  propertyNumber: number;
  done: boolean;

}
