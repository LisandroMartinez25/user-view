import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [TitleComponent, UsersListComponent, UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule
  ]
})
export class UsersModule { }
