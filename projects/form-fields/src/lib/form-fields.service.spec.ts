import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { FormFieldsService } from './form-fields.service';

describe('FormFieldsService', () => {
  let spectator: SpectatorService<FormFieldsService>;
  const createService = createServiceFactory(FormFieldsService);

  beforeEach(() => (spectator = createService()));

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
