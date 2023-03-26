import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter, Route } from "@angular/router";
import { AppComponent } from "./app/app.component";

const appRoutes: Route[] = [
  {
    path: "",
    loadComponent: () => import("./app/layout/layout.component").then((m) => m.LayoutComponent),
    loadChildren: () => import("./app/layout/layout.routes").then((m) => m.routes),
  },
  {
   path: "login",
   loadComponent: () => import("./app/login/login.component").then((m) => m.LoginComponent),
  },
];

bootstrapApplication(AppComponent, { providers: [provideRouter(appRoutes)] }).catch((err) =>
  console.log(err)
);
