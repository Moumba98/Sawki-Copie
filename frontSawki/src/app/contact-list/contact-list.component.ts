import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact_model';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  currentContact: Contact | null = null;
  currentIndex = -1;

  private contactService = inject(ContactService);

  ngOnInit(): void {
    this.retrieveContacts();
  }

  retrieveContacts(): void {
    this.contactService.getAll().subscribe({
      next: (data) => {
        this.contacts = data;
        console.log('Contacts récupérés:', data);
      },
      error: (e) => console.error('Erreur lors de la récupération:', e)
    });
  }

  refreshList(): void {
    this.retrieveContacts();
    this.currentContact = null;
    this.currentIndex = -1;
  }

  setActiveContact(contact: Contact, index: number): void {
    this.currentContact = contact;
    this.currentIndex = index;
  }

  deleteContact(id: number): void {
    this.contactService.delete(id).subscribe({
      next: () => {
        console.log(`Contact avec ID ${id} supprimé.`);
        this.refreshList();
      },
      error: (e) => console.error('Erreur lors de la suppression:', e)
    });
  }
}

