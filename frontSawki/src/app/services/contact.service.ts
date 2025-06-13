import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Contact } from '../models/contact_model';

const baseUrl = 'http://localhost:5000/api/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  // Récupérer tous les contacts
  getAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(baseUrl).pipe(
      catchError((error) => {
        console.error('Erreur lors de la récupération des contacts:', error);
        return throwError(() => new Error('Erreur lors de la récupération des contacts'));
      })
    );
  }

  // Ajouter un contact
  create(contact: Contact): Observable<Contact> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<Contact>(baseUrl, contact, { headers }).pipe(
      catchError((error) => {
        console.error('Erreur lors de la création du contact:', error);
        return throwError(() => new Error('Erreur lors de la création du contact'));
      })
    );
  }


  // Supprimer un contact par ID
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${baseUrl}/${id}`).pipe(
      catchError((error) => {
        console.error('Erreur lors de la suppression du contact:', error);
        return throwError(() => new Error('Erreur lors de la suppression du contact'));
      })
    );
  }
}

