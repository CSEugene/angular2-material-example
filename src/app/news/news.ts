import {Article} from "./news-article";
export class News {
  constructor(
    public status: string,
    public source: string,
    public sortBy: string,
    public article: Article[]
  ){}
}
