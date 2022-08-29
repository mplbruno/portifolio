import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { CardUmComponent } from '../portfolio/card-um/card-um.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 2, rows: 1 , content:  "oi"},
          { title: 'Card 2', cols: 1, rows: 1 , content: 'conteudo'},
          { title: 'Card 3', cols: 1, rows: 2 , content: 'conteudo'},
          { title: 'Card 4', cols: 1, rows: 1 , content: 'conteudo'}
        ];
      }

      return [
        { title: 'oi', cols: 2, rows: 1 , content:  "oi"},
        { title: 'Card 2', cols: 1, rows: 1, content: 'conteudo'},
        { title: 'Card 3', cols: 1, rows: 2 , content: 'conteudo'},
        { title: 'Card 4', cols: 1, rows: 1 , content: 'conteudo'}
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}

