import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <p>
      layout works!
    </p>
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class LayoutComponent {

}
