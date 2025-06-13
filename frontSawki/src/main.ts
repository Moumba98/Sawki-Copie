import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appConfig } from './app/app.config';  // ton app config
import { AppComponent } from './app/app.component';
import { Route } from '@angular/router';  // Ton fichier de routes
import { routes } from './app/app.routes';

// Configuration pour démarrer l'application avec les routes
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),  // Fournir la configuration du routage
    ...appConfig.providers,  // Inclure tous les autres providers de ton appConfig
  ],
}).catch((err) => console.error(err));
