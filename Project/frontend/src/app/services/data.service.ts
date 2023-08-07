import { Injectable } from '@angular/core';
import { UserData } from '../shared/models/data';
import { sample_user_data } from 'src/data';
import { HttpClient } from '@angular/common/http';
import { SQUARE, USER_DATA, USER_SEARCH_BY_ID, USER_SEARCH_BY_URL, USER_URL } from '../shared/constants/urls';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user';
import { Square } from '../shared/models/square';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<UserData[]> {
    return this.http.get<UserData[]>(USER_URL);
  }

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(USER_DATA);
  }

  getUserDataBySearchTerm(searchTerm:string) {
    return this.http.get<UserData[]>(USER_SEARCH_BY_URL + searchTerm)
  }

  getUserByID(userIDInput:string):Observable<UserData> {
    return this.http.get<UserData>(USER_SEARCH_BY_ID + userIDInput);
  }

  getSquare():Observable<Square[]> {
    return this.http.get<Square[]>(SQUARE)
  }
}
