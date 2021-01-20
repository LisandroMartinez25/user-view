import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ICatalog } from 'src/app/core/interfaces/catalog';
import { IUser } from 'src/app/core/interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  public optionsPerPage: ICatalog[];
  public optionsOrder: ICatalog[];
  public optionsStatus: ICatalog[];
  public viewList: boolean;
  public columns: string[];
  public dataSource: IUser[];
  public userSelected: IUser;

  constructor(
    private userService: UserService
  ) { 
    this.optionsPerPage = [{
      value: '8',
      label: '8'
    },  {
      value: '10',
      label: '10'
    },  {
      value: '20',
      label: '20'
    },  {
      value: '50',
      label: '50'
    }];

    this.optionsOrder = [{
      value: 'asc',
      label: 'Ascendete'
    },  {
      value: 'desc',
      label: 'Descendete'
    }];

    this.optionsStatus = [{
      value: 'all',
      label: 'Todos'
    },  {
      value: 'true',
      label: 'Activo'
    },  {
      value: 'false',
      label: 'Inactivo'
    }];
    
    this.columns = ['id', 'picture', 'name', 'fathersLastName', 'mothersLastName', 'email', 'role', 'active', 'action']
    this.viewList = true;
    this.dataSource = [];
    this.userSelected = {};
  }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void {
    this.userService.getUsers().subscribe(d => {
      this.dataSource = d;
    });
  }
  
  public selectRow(row: IUser) {
    this.userSelected = row;
  }

  public updateUserStatus(email: string): void {
    this.userService.updateUserStatus(email);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.dataSource, event.previousIndex, event.currentIndex);
    this.userService.drop(this.dataSource);
    this.getUsers();
  }
}
