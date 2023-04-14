import { Route } from '@angular/router'
import { DMComponent } from 'src/app/dm/dm.component'
import { FriendsComponent } from '../dm/friends/friends.component'
import { ServerComponent } from '../server/server.component'
import { ChatComponent } from '../shared/chat/chat.component'

export const layoutRoutes: Route[] = [
   {
      path: '',
      redirectTo: '@me',
      pathMatch: 'full',
   },
   {
      path: '@me',
      loadChildren: () => DMRoutes,
   },
   {
      path: ':serverId',
      loadChildren: () => serverRoutes,
   },
]

export const serverRoutes: Route[] = [
   {
      path: '',
      loadComponent: () => ServerComponent,
      loadChildren: () => [
         {
            path: ':channelId',
            loadComponent: () => ServerComponent,
         },
      ],
   },
]

export const DMRoutes: Route[] = [
   {
      path: '',
      loadComponent: () => DMComponent,
      loadChildren: () => [
         {
            path: '',
            loadComponent: () => FriendsComponent,
         },
         {
            path: ':userId',
            loadComponent: () => ChatComponent,
         },
      ],
   },
]

//! aproach with children does not work lol
// children: [
//    {
//       path: ":channelId",
//       //? https://www.telerik.com/blogs/angular-14-introducing-standalone-components
//       //? https://ultimatecourses.com/blog/lazy-load-standalone-components-via-load-component
//       loadChildren: () => ADMIN_ROUTES,
//    },
// ]
