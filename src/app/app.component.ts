import { Component } from '@angular/core';
import { WarrantyClaimComponent } from './warranty-claim/warranty-claim.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WarrantyClaimComponent],
  template: '<app-warranty-claim></app-warranty-claim>'
})
export class AppComponent {
  title = 'warranty-claim-app';
}