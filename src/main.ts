import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js/dist/zone';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));