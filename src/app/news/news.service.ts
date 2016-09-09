import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class NewsService {

  constructor(private http: Http){}

  private url = "https://newsapi.org/v1/articles?source=techcrunch&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e";

  getData(){
    return this.http.get(this.url).map(res => res.json());
  }

}
