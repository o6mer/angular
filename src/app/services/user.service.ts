import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUser(userId: number | string) {
    return this.http.get<User>(`${this.apiUrl}/${userId}`);
  }

  deleteUser(user: User) {
    return this.http.delete<User>(`${this.apiUrl}/${user.id}`);
  }

  updateUser(user: User) {
    return this.http.put<User>(`${this.apiUrl}/${user.id}`, user);
  }

  addUser(user: User) {
    return this.http.post<User>(this.apiUrl, user, httpOptions);
  }
}
