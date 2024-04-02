export interface IProduct {
  id: number;
  year: string;
  title: string;
  link: IProductLink;
  imgUrl: string;
}

export interface IProductLink {
  code?: string;
  launch?: string;
  notion?: string;
}
