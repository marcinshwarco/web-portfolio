import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  template: `
  <main>
  <article>
  <div class="row">
  <div class="col-md" id="centered">
   <figure id="main-image">
   <img src="assets/marcin_lipski.png" alt="marcin_lipski_main" class="responsive">

</figure>
  </div>
  <div class="col-md">
<h1>Hello, </h1>
<h2>I'm Marcin.</h2>
<h4>I love doughnuts, black coffee and front end.</h4>
<br>
<nav>
<div class="nav nav-tabs" id="nav-tab" role="tablist">
  <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Brief Summary</a>
  <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"> Technologies</a>
  <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Current Work</a>
</div>
</nav>
<div class="tab-content" id="nav-tabContent">
<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">I am a degree educated (ICT) front-end developer with solid coding skills and creative flair. I specialise in fast loading, responsive websites and single page applications. As a freelance developer I take care of web and graphic design as well as programming and website deployment. The positive reception I have received for my projects has encouraged me to "dive" deeper into web development and start exploring back-end technologies.</div>
<div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><p><b>JavaScript</b> - application logic</p><p><b>jQuery</b> - animations and sound effects</p><p><b>Angular</b> - single page application (SPA)</p><p><b>HTML and CSS</b> - markup and styling</p><p><b>DSLR camera</b> - photos</p><p><b>Photoshop</b> - graphics</p><p><b>PHP</b> - contact form</p><p><b>Bootstrap</b> - layout elements and navigation</p><p><b>GitHub</b> - project deployment</p><p><b>WordPress - content management</b></p></div>
<div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">Recently I have become a full-time parent due to the Coronavirus crisis, however the exceptional circumstances have not stopped me from building web applications. I am working as a freelancer for the Bristol-based startup - Cook and Crabtree - for which I am developing an e-commerce website as well as photography, graphic content and packaging design. In my free time I practice what I have already learned to bulletproof my programming foundations. </div>
</div>
  </div>
</div>
<br><br><br>
</article>
</main>

`,
  styles: [
  ]
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
