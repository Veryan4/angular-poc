import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsResolver } from './resolvers/comments.resolver';
import { NewsResolver } from './resolvers/news.resolver';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/news-list/news-list.module').then((m) => m.NewsListModule),
    resolve: { news: NewsResolver },
  },
  {
    path: 'comments/:storyId',
    loadChildren: () => import('./modules/comments/comments.module').then((m) => m.CommentsModule),
    resolve: { storyWithComments: CommentsResolver },
  },
  {
    path: '**',
    loadChildren: () => import('./modules/news-list/news-list.module').then((m) => m.NewsListModule),
    resolve: { news: NewsResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
