import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  rgpd = false;
  isMessageSended = false;
  form = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    message: ['', Validators.required],
    acceptTerms: [
      false,
      Validators.compose([Validators.required, Validators.requiredTrue]),
    ],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.warn(this.form.value);
  }
}
