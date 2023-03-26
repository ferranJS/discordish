import { Route } from "@angular/router";
import { DirectMessagesComponent } from "src/app/direct-messages/direct-messages.component";
import { ServerComponent } from "../server/server.component";

export const routes: Route[] = [
   {
      path: "",
      redirectTo: "@me",
      pathMatch: "full",
   },
   {
      path: "@me",
      loadComponent: () => DirectMessagesComponent,
   },
   {
      path: "@me/:chatId",
      loadComponent: () => DirectMessagesComponent,
   },
   {
      path: ":serverId",
      loadComponent: () => ServerComponent,
   },
   {
      path: ":serverId/:channelId",
      loadComponent: () => ServerComponent,
   },
   //! aproach with children does not work lol
   // children: [
   //    {
   //       path: ":channelId",
   //       //? https://www.telerik.com/blogs/angular-14-introducing-standalone-components
   //       //? https://ultimatecourses.com/blog/lazy-load-standalone-components-via-load-component
   //       loadChildren: () => ADMIN_ROUTES,
   //    },
   // ]
];
