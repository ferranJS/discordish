import { bootstrapApplication } from "@angular/platform-browser"
import { provideRouter, type Route } from "@angular/router"
import { AppComponent } from "./app/app.component"
import { NotFoundComponent } from "./app/errors/not-found.component"
import { LayoutComponent } from "./app/layout/layout.component"
import { layoutRoutes } from "./app/layout/layout.routes"
import { LoginRegisterContainerComponent } from "./app/login-register/login-register-container.component"
import { LoginComponent } from "./app/login-register/login.component"
import { RegisterComponent } from "./app/login-register/register.component"
import { importProvidersFrom } from "@angular/core"
import { initializeApp, provideFirebaseApp } from "@angular/fire/app"
import { getFirestore, provideFirestore } from "@angular/fire/firestore"
import { environment } from "./environments/environment"

export const loginRegisterRoutes: Route[] = [
  {
    path: "login",
    loadComponent: () => LoginComponent
  },
  {
    path: "register",
    loadComponent: () => RegisterComponent
  }
]

const mainRoutes: Route[] = [
  {
    path: "",
    redirectTo: "channels",
    pathMatch: "full"
  },
  {
    path: "channels",
    loadComponent: () => LayoutComponent,
    loadChildren: () => layoutRoutes
  },
  {
    path: "",
    loadComponent: () => LoginRegisterContainerComponent,
    loadChildren: () => loginRegisterRoutes
  },
  {
    path: "404",
    loadComponent: () => NotFoundComponent
  },
  {
    path: "**",
    redirectTo: "/404"
    // redirectTo: 'channels'
  }
]

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(mainRoutes),
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(environment.firebaseConfig))
    ),
    importProvidersFrom(provideFirestore(() => getFirestore()))
  ]
}).catch((err: any) => {
  console.log(err)
})
