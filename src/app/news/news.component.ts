import { Component, OnInit } from '@angular/core';
import {News} from "./news";
import {NewsService} from "./news.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css',
    '../../../node_modules/@angular2-material/core/style/core.css',
    '../../../node_modules/@angular2-material/core/overlay/overlay.css',],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {

  private news: News;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getData()
      .subscribe(
        data => this.news = data
      );
  }
}
