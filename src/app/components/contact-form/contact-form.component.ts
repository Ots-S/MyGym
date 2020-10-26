import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  email = '';
  message = '';
  rgpd = false;
  isMessageSended = false;

  constructor() {}

  ngOnInit(): void {}

  validateForm(): void {
    this.email = '';
    this.message = '';
    this.isMessageSended = true;
  }

  checkRgpd(): void {
    this.rgpd = !this.rgpd;
  }
}
