import { Component, OnInit } from '@angular/core';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

interface ITheme {
  name: string;
  class: string;
  options: MCustomScrollbar.CustomScrollbarOptions;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  // loremIpsum = require('raw-loader!./lorem-ipsum.txt').default;
  loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?

Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas...`

  themes: ITheme[] = [
    { name: '"light" (default)', class: 'dark', options: { axis: 'y', theme: 'light', scrollButtons: { enable: true } } },
    { name: '"dark"', class: 'light', options: { axis: 'y', theme: 'dark', scrollButtons: { enable: true } } },
    { name: '"minimal"', class: 'dark', options: { axis: 'y', theme: 'minimal' } },
    { name: '"minimal-dark"', class: 'light', options: { axis: 'y', theme: 'minimal-dark' } },
    { name: '"light-2"', class: 'dark', options: { axis: 'y', theme: 'light-2', scrollButtons: { enable: true } } },
    { name: '"dark-2"', class: 'light', options: { axis: 'y', theme: 'dark-2', scrollButtons: { enable: true } } },
    { name: '"light-3"', class: 'dark', options: { axis: 'y', theme: 'light-3', scrollButtons: { enable: true } } },
    { name: '"dark-3"', class: 'light', options: { axis: 'y', theme: 'dark-3', scrollButtons: { enable: true } } },
    { name: '"light-thick"', class: 'dark', options: { axis: 'y', theme: 'light-thick', scrollButtons: { enable: true } } },
    { name: '"dark-thick"', class: 'light', options: { axis: 'y', theme: 'dark-thick', scrollButtons: { enable: true } } },
    { name: '"light-thin"', class: 'dark', options: { axis: 'y', theme: 'light-thin', scrollButtons: { enable: true } } },
    { name: '"dark-thin"', class: 'light', options: { axis: 'y', theme: 'dark-thin', scrollButtons: { enable: true } } },
    { name: '"inset"', class: 'dark', options: { axis: 'y', theme: 'inset', scrollButtons: { enable: true } } },
    { name: '"inset-dark"', class: 'light', options: { axis: 'y', theme: 'inset-dark', scrollButtons: { enable: true } } },
    { name: '"inset-2"', class: 'dark', options: { axis: 'y', theme: 'inset-2', scrollButtons: { enable: true } } },
    { name: '"inset-2-dark"', class: 'light', options: { axis: 'y', theme: 'inset-2-dark', scrollButtons: { enable: true } } },
    { name: '"inset-3"', class: 'dark', options: { axis: 'y', theme: 'inset-3', scrollButtons: { enable: true } } },
    { name: '"inset-3-dark"', class: 'light', options: { axis: 'y', theme: 'inset-3-dark', scrollButtons: { enable: true } } },
    { name: '"rounded"', class: 'dark', options: { axis: 'y', theme: 'rounded', scrollButtons: { enable: true } } },
    { name: '"rounded-dark"', class: 'light', options: { axis: 'y', theme: 'rounded-dark', scrollButtons: { enable: true } } },
    { name: '"rounded-dots"', class: 'dark', options: { axis: 'y', theme: 'rounded-dots', scrollButtons: { enable: true } } },
    { name: '"rounded-dots-dark"', class: 'light', options: { axis: 'y', theme: 'rounded-dots-dark', scrollButtons: { enable: true } } },
    { name: '"3d"', class: 'dark', options: { axis: 'y', theme: '3d', scrollButtons: { enable: true } } },
    { name: '"3d-dark"', class: 'light', options: { axis: 'y', theme: '3d-dark', scrollButtons: { enable: true } } },
    { name: '"3d-thick"', class: 'dark', options: { axis: 'y', theme: '3d-thick', scrollButtons: { enable: true } } },
    { name: '"3d-thick-dark"', class: 'light', options: { axis: 'y', theme: '3d-thick-dark', scrollButtons: { enable: true } } },
    { name: '"custom-theme"', class: 'dark', options: { axis: 'y', theme: 'metro', scrollbarPosition: 'outside' } },
  ];

  constructor(
    private mScrollbarService: MalihuScrollbarService,
  ) { }

  ngOnInit() {
    this.mScrollbarService.initScrollbar(document.body, { axis: 'y', theme: 'metro' });
  }
}
