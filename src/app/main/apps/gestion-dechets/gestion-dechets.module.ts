import { NgModule } from '@angular/core';

import { FormRepeaterModule } from 'app/main/forms/form-repeater/form-repeater.module';
import { FormElementsModule } from 'app/main/forms/form-elements/form-elements.module';
import { FormLayoutModule } from 'app/main/forms/form-layout/form-layout.module';
import { FormValidationModule } from 'app/main/forms/form-validation/form-validation.module';
import { FormWizardModule } from 'app/main/forms/form-wizard/form-wizard.module';
import { CycleDeVieDechetModule } from 'app/main/apps/gestion-dechets/cycle-de-vie-dechet/cycle-de-vie-dechet.module';


@NgModule({
  declarations: [],
  imports: [FormElementsModule, FormLayoutModule, FormWizardModule, FormValidationModule, FormRepeaterModule,CycleDeVieDechetModule]
})
export class GestionDechetsModule {}
