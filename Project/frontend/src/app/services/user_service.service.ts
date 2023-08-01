import { Injectable } from '@angular/core';
import { UserData } from '../shared/models/user_data';
import { sample_user_data } from 'src/data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  getAll(): UserData[]{
    return sample_user_data;
  }

  getUserDataBySearchTerm(searchTerm:string) {
    return this.getAll().filter(UserData => UserData.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getUserByID(userIDInput:string):UserData {
    return this.getAll().find(UserData => UserData.id == userIDInput) ?? new UserData();
  }

}
