import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: 'users',
    component: UserListComponent,
  },
  {
    path: 'users/new',
    component: UserFormComponent,
  },
  {
    path: 'users/:id',
    component: UserDetailComponent,
  },
  {
    path: 'users/edit/:id',
    component: UserFormComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    UserDetailComponent,
    UserItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {
      enableTracing: true,
      bindToComponentInputs: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
