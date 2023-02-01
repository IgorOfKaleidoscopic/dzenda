import { NgModule } from '@angular/core';

import { AgendaDataService } from './agenda-data/agenda-data.service';
import { LocalPersistenceService } from './local-persistence/local-persistence.service';

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [
    AgendaDataService,
    LocalPersistenceService
  ]
})
export class CoreModule { }
