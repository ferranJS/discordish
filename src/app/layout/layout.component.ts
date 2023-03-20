import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class LayoutComponent {

}
