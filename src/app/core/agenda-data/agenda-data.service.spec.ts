import { TestBed } from '@angular/core/testing';

import { AgendaDataService } from './agenda-data.service';

describe('AgendaDataService', () => {
  let service: AgendaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
