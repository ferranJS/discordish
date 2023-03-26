import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter, Route } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { NotFoundComponent } from "./app/errors/not-found/not-found.component";

const mainRoutes: Route[] = [
   {
      path: "",
      redirectTo: "channels",
      pathMatch: "full",
   },
   {
      path: "channels",
      loadComponent: () => import("./app/layout/layout.component").then((m) => m.LayoutComponent),
      loadChildren: () => import("./app/layout/layout.routes").then((m) => m.routes),
   },
   {
      path: "login",
      loadComponent: () => import("./app/login/login.component").then((m) => m.LoginComponent),
   },
   {
      path: "404",
      loadComponent: () => NotFoundComponent,
   },
   {
      path: '**',
      redirectTo: '/404'
      // redirectTo: 'channels'
   },
];

bootstrapApplication(AppComponent, { providers: [provideRouter(mainRoutes)] }).catch((err) =>
   console.log(err)
);
