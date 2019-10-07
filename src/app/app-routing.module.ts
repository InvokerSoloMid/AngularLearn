import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddInfoComponent } from './components/add-info/add-info.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';


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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
