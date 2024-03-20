export interface IProduct {
  id: number;
  year: string;
  title: string;
  tag: string;
  link: IProductLink;
}

export interface IProductLink {
  code: string;
  launch: string;
}
