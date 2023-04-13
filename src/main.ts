import { bootstrapApplication } from '@angular/platform-browser'
import { provideRouter, Route } from '@angular/router'
import { AppComponent } from './app/app.component'
import { DMComponent } from './app/dm/dm.component'
import { NotFoundComponent } from './app/errors/not-found.component'
import { LayoutComponent } from './app/layout/layout.component'
import { ShopComponent } from './app/shop/nitro-shop.component'
import { layoutRoutes } from './app/layout/layout.routes'
import { LoginRegisterContainerComponent } from './app/login-register/login-register-container.component'
import { LoginComponent } from './app/login-register/login.component'
import { RegisterComponent } from './app/login-register/register.component'

export const loginRegisterRoutes: Route[] = [
   {
      path: 'login',
      loadComponent: () => LoginComponent,
   },
   {
      path: 'register',
      loadComponent: () => RegisterComponent,
   },
]

const mainRoutes: Route[] = [
   {
      path: '',
      redirectTo: 'channels',
      pathMatch: 'full',
   },
   {
      path: 'channels',
      loadComponent: () => LayoutComponent,
      loadChildren: () => layoutRoutes,
   },
   {
      path: '',
      loadComponent: () => LoginRegisterContainerComponent,
      loadChildren: () => loginRegisterRoutes,
   },
   {
      path: 'shop',
      loadComponent: () => LayoutComponent,
      loadChildren: () => [
         {
            path: '',
            loadComponent: () => DMComponent,
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
