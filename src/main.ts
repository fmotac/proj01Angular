
import { appConfig } from './app/app.config';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

// Importe os componentes que serão utilizados
import { HeaderComponent } from './app/component/header/header.component';
import { BodyComponent } from './app/component/body/body.component';
import { CardComponent } from './app/component/card/card.component';
import { FooterComponent } from './app/component/footer/footer.component';


// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
  
  bootstrapApplication(appConfig,AppComponent, {
    providers: [
      HeaderComponent, // Declare os componentes como provedores
      BodyComponent,
      CardComponent,
      FooterComponent
    ],
  }).catch(err => console.error(err));


