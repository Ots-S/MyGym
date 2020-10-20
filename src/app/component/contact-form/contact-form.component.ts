import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  email = '';
  message = '';
  rgpd: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  validateForm(): void {
    console.log('Message envoyé');
    this.email = '';
    this.message = '';
  }

  checkRgpd(): void {
    this.rgpd = !this.rgpd;
  }
}
