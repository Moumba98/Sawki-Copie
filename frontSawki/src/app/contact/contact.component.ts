import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact_model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contact: Contact = {
    nom: '',
    email: '',
    telephone: '',
    message: '',
  };

  submitted = false; // Cette variable contrôle l'affichage du formulaire
  successMessage = ''; // Message de confirmation
  errors: any = {};

  constructor(private contactService: ContactService) {}

  validate(): boolean {
    this.errors = {};

    if (!this.contact.nom?.trim()) {
      this.errors.nom = 'Le nom est requis.';
    }

    if (!this.contact.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.contact.email)) {
      this.errors.email = 'Email invalide.';
    }

    if (!this.contact.telephone || !/^\+?[0-9]{10,15}$/.test(this.contact.telephone)) {
      this.errors.telephone = 'Numéro de téléphone invalide.';
    }

    if (!this.contact.message?.trim()) {
      this.errors.message = 'Le message ne peut pas être vide.';
    }

    return Object.keys(this.errors).length === 0;
  }

  saveContact(): void {
    if (!this.validate()) return;

    const data: Contact = {
      nom: this.contact.nom,
      email: this.contact.email,
      telephone: this.contact.telephone,
      message: this.contact.message,
    };

    this.contactService.create(data).subscribe({
      next: (res) => {
        console.log('Contact ajouté avec succès :', res);
        this.submitted = true; // Masquer le formulaire après soumission
        this.successMessage = 'Votre message a été envoyé avec succès !'; // Afficher le message de confirmation
      },
      error: (e) => {
        console.error('Erreur lors de l’ajout du contact :', e);
        this.successMessage = 'Une erreur est survenue. Veuillez réessayer.';
      }
    });
  }

  newContact(): void {
    this.submitted = false;
    this.contact = {
      nom: '',
      email: '',
      telephone: '',
      message: '',
    };
    this.successMessage = ''; // Réinitialiser le message de succès lors de la nouvelle soumission
  }
}



