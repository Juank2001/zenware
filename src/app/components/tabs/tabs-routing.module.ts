import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'status',
        loadChildren: () => import('../../pages/status/status.module').then(m => m.StatusPageModule)
      },
      {
        path: 'projects',
        loadChildren: () => import('../../pages/projects/projects.module').then(m => m.ProjectsPageModule)
      },
      {
        path: 'user',
        loadChildren: () => import('../../pages/user/user.module').then(m => m.UserPageModule)
      },
      {
        path: 'user/:id',
        loadChildren: () => import('../../pages/user/user.module').then(m => m.UserPageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('../../pages/chat/chat.module').then(m => m.ChatPageModule)
      },
      {
        path: 'reader',
        loadChildren: () => import('../../pages/reader/reader.module').then(m => m.ReaderPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/status',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/status',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
