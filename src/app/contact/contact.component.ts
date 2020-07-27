import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
  <main id="min-height-container">
  <h1>Contact:</h1>
  <br>
  <h3>Say hello and drop me an <a href="mailto:marcinshwarco@gmail.com">e-mail</a>. I usually respond immediately.</h3>
  <br>
  <p>marcinshwarco@gmail.com</p>
  <h3>Alternatively give me a ring.</h3>

  <p>07922506037</p>
  <br><br><br>
  <h2>Marcin Lipski</h2>
  </main>
  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
