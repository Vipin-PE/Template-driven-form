import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Template-Driven-Form-Validations';
  userData: any = {};

  submitForm(form: any) {
    if (form.valid) {
      console.log('Submitted successfully!');
      console.log('Form value:', form.value);
    } else {
      console.error('Form is invalid, please check the fields.');
    }
  }
}
