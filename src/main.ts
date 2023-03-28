import { bootstrapApplication } from '@angular/platform-browser'
import { provideRouter, Route } from '@angular/router'
import { AppComponent } from './app/app.component'
import { DirectMessagesComponent } from './app/direct-messages/direct-messages.component'
import { NotFoundComponent } from './app/errors/not-found/not-found.component'
import { LayoutComponent } from './app/layout/layout.component'
import { ShopComponent } from './app/shop/nitro-shop.component'

const mainRoutes: Route[] = [
   {
      path: '',
      redirectTo: 'channels',
      pathMatch: 'full',
   },
   {
      path: 'channels',
      loadComponent: () => import('./app/layout/layout.component').then((m) => m.LayoutComponent),
      loadChildren: () => import('./app/layout/layout.routes').then((m) => m.layoutRoutes),
   },
   {
      path: 'login',
      loadComponent: () => import('./app/login/login.component').then((m) => m.LoginComponent),
   },
   {
      path: 'shop',
      loadComponent: () => LayoutComponent,
      loadChildren: () => [
         {
            path: '',
            loadComponent: () => DirectMessagesComponent,
            loadChildren: () => [
               {
                  path: '',
                  loadComponent: () => ShopComponent,
               },
            ],
         },
      ],
   },
   {
      path: '404',
      loadComponent: () => NotFoundComponent,
   },
   {
      path: '**',
      redirectTo: '/404',
      // redirectTo: 'channels'
   },
]

bootstrapApplication(AppComponent, { providers: [provideRouter(mainRoutes)] }).catch((err) => console.log(err))
