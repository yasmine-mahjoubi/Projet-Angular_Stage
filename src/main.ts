import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { registerLocaleData } from '@angular/common';

import localeFr from '@angular/common/locales/fr';

// Register French locale data
registerLocaleData(localeFr, 'fr');
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
