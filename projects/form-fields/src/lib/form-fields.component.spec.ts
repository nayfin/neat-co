import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { FormFieldsComponent } from './form-fields.component';

describe('FormFieldsComponent', () => {
  let spectator: Spectator<FormFieldsComponent>;
  const createComponent = createComponentFactory(FormFieldsComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
