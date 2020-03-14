import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddInfoComponent } from './components/add-info/add-info.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'info',
    component: AddInfoComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'recipe-list',
    component: RecipeListComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
