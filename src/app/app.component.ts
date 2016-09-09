import { Component } from '@angular/core';
import { MdCheckbox } from '@angular2-material/checkbox';
import {MdToolbar} from "@angular2-material/toolbar";
import {MdButton} from "@angular2-material/button";
import {MdIcon} from "@angular2-material/icon";
import {MdIconRegistry} from '@angular2-material/icon/icon-registry';
import {MdSidenav, MdSidenavLayout} from "@angular2-material/sidenav";
import {MdCard} from "@angular2-material/card";
import { MdCardModule } from '@angular2-material/card';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [MdCheckbox, MdToolbar, MdButton, MdIcon, MdSidenav, MdSidenavLayout, MdCard],
  providers: [MdIconRegistry]
})
export class AppComponent {
  title = 'app works!';
}
