import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  template: `
    <main>
    <h1>Projects</h1>
    <article>
    <h2>Quiz Application for Bannerman Rd. Academy - Bristol</h2>
    <hr>
    <br>
    <div class="row">
    <div class="col-md">
   <div><img src="assets/dino.jpg" alt="dino" class="responsive2"></div>
    
    </div>
    <div class="col-md">
    <nav>
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
      <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#dino-overview" role="tab" aria-controls="nav-home" aria-selected="true">Overview</a>
      <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#dino-technologies" role="tab" aria-controls="nav-profile" aria-selected="false"> Technologies</a>
      <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#dino-next-step" role="tab" aria-controls="nav-contact" aria-selected="false">Next Step</a>
    </div>
  </nav>
  <div class="tab-content" id="nav-tabContent">
    <div class="tab-pane fade show active" id="dino-overview" role="tabpanel" aria-labelledby="nav-home-tab">This website started out as nothing more than a JavaScript exercise. However, it ended up being an exciting project which I developed for Bannerman Road Community Academy (local primary school). The challenge here was to create a child friendly quiz that allowed children to guess multiple times before submitting the correct answer. The quiz is designed to minimise child's frustration, so children can keep guessing until their answer is correct. It is accessible via Bannerman Road Academy website.</div>
    <div class="tab-pane fade" id="dino-technologies" role="tabpanel" aria-labelledby="nav-profile-tab"><p><b>JavaScript</b> - quiz logic</p><p><b>jQuery</b> - sound effects</p><p><b>HTML and CSS</b> - markup and styling</p> <p><b>GitHub</b> - hosting</p><p><b>Photoshop</b> - graphics</p></div>
    <div class="tab-pane fade" id="dino-next-step" role="tabpanel" aria-labelledby="nav-contact-tab">I am planning to add more quizzes to this application and transform the code into object-orientated programming. I am also planning to make my code more readable and accessible for other programmers.</div>
    </div>
    <br>
    <pre><a href="https://marcinshwarco.github.io/kids_quizes/Index.html" target="blank"><button type="button" class="btn btn-outline-secondary">Website</button></a>   <a href="https://github.com/marcinshwarco/kids_quizes" target="blank"><button type="button" class="btn btn-outline-dark">GitHub</button></a></pre>
    </div>
  </div>
  <br><br><br>
  </article>
  
  <article>
  <h2>LUMP Band Website</h2>
  <hr>
  <br>
  <div class="row">
  <div class="col-md">
 <div><img src="assets/lump.jpg" alt="lump" class="responsive2"></div>
  
  </div>
  <div class="col-md">
  <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#lump-overview" role="tab" aria-controls="nav-home" aria-selected="true">Overview</a>
    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#lump-technologies" role="tab" aria-controls="nav-profile" aria-selected="false"> Technologies</a>
    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#lump-next-step" role="tab" aria-controls="nav-contact" aria-selected="false">Next Step</a>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="lump-overview" role="tabpanel" aria-labelledby="nav-home-tab">This is a fast, W3C validated website which provides online exposure for LUMP - a Bristol-based punk rock band. Designing for LUMP was great fun as I was able to combine photography, graphic design and front-end technologies.</div>
  <div class="tab-pane fade" id="lump-technologies" role="tabpanel" aria-labelledby="nav-profile-tab"><p><b>jQuery</b> - animations</p><p><b>HTML and CSS</b> - markup and styling</p><p><b>DSLR camera</b> - photos</p><p><b>Photoshop</b> - graphics</p><p><b>PHP</b> - contact form</p><p><b>Bootstrap</b> - layout elements</p></div>
  <div class="tab-pane fade" id="lump-next-step" role="tabpanel" aria-labelledby="nav-contact-tab">The website needs https secure protocol and spam protection for the PHP contact form.</div>
</div>
<br>
<pre><a href="http://www.lumpband.uk/" target="blank"><button type="button" class="btn btn-outline-secondary">Website</button></a></pre>
</div>
</div>
<br><br><br><br>
</article>


<article>
<h2>BS5 Mutual Aid Solidarity Group Newsletter (ongoing)</h2>
<hr>
<div class="row">
<div class="col-md">
<div><img src="assets/newsletter.jpg" alt="dino" class="responsive2"></div>

</div>
<div class="col-md">
<nav>
<div class="nav nav-tabs" id="nav-tab" role="tablist">
  <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#newsletter-overview" role="tab" aria-controls="nav-home" aria-selected="true">Overview</a>
  <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#newsletter-technologies" role="tab" aria-controls="nav-profile" aria-selected="false"> Technologies</a>
  <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#newsletter-next-step" role="tab" aria-controls="nav-contact" aria-selected="false">Next Step</a>
</div>
</nav>
<div class="tab-content" id="nav-tabContent">
<div class="tab-pane fade show active" id="newsletter-overview" role="tabpanel" aria-labelledby="nav-home-tab"> As a volunteer developer for BS5 Mutual Aid group, I took responsibility for designing and configuring a WordPress newsletter, which is to be used by other volunteers (editors). So far I have created a newsletter layout, delivered graphic content and produced technical documentation. My work is accessible via sandbox link.</div>
<div class="tab-pane fade" id="newsletter-technologies" role="tabpanel" aria-labelledby="nav-profile-tab"><p><b>WordPress</b> - newsletter configuration and layout</p><p><b>DSLR camera</b> - photos</p><p><b>Photoshop</b> - graphics</p></div>
<div class="tab-pane fade" id="newsletter-next-step" role="tabpanel" aria-labelledby="nav-contact-tab">The next step is to have a zoom meeting with BS5 Group coordinators to explain the newsletter configuration.</div>
</div>
<br>
<pre><a href="http://bs5-mutual-aid.nowheresquare.co.uk/index.php/author/marcin/" target="blank"><button type="button" class="btn btn-outline-secondary">Website</button></a></pre>
</div>
</div>
<br><br><br><br>
</article>

<article>
<h2>Personal Web Developer Portfolio</h2>
    <hr>
    <br>
    <div class="row">
    <div class="col-md">
   <div><img src="assets/portfolio.jpg" alt="dino" class="responsive2"></div>
    </div>
    <div class="col-md">
    <nav>
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
      <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#portfolio-overview" role="tab" aria-controls="nav-home" aria-selected="true">Overview</a>
      <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#portfolio-technologies" role="tab" aria-controls="nav-profile" aria-selected="false"> Technologies</a>
      <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#portfolio-next-step" role="tab" aria-controls="nav-contact" aria-selected="false">Next Step</a>
    </div>
  </nav>
  <div class="tab-content" id="nav-tabContent">
    <div class="tab-pane fade show active" id="portfolio-overview" role="tabpanel" aria-labelledby="nav-home-tab">This is the website you are now visiting - a  single page application designed to be compact and informative. It highlights my web development skills and provides exposure for my recent projects.</div>
    <div class="tab-pane fade" id="portfolio-technologies" role="tabpanel" aria-labelledby="nav-profile-tab"><p><b>Angular</b> - to create single page application (SPA)</p><p><b>HTML and CSS</b> - markup and styling</p><p><b>DSLR camera</b> - photos</p><p><b>Photoshop</b> - graphics</p><p><b>GitHub</b> - hosting</p><p><b>Bootstrap</b> - layout elements</p></div>
    <div class="tab-pane fade" id="portfolio-next-step" role="tabpanel" aria-labelledby="nav-contact-tab">As my portfolio grows, I will be adding more projects to it.</div>
    </div>
    <br>
    <pre><a href='#'><button type="button" class="btn btn-outline-secondary">Website</button></a> <a href="https://github.com/marcinshwarco/web-portfolio" target="blank"><button type="button" class="btn btn-outline-dark">GitHub</button></a></pre>
    </div>
  </div>
  <br><br><br><br>
  </article>

  <article>
  <h2>Photography and Web Content Graphics for Various Projects</h2>
  <hr>
  <br>
  <div class="row">
  <div class="col-md">
 <div><img src="assets/graphics.jpg" alt="dino" class="responsive2"></div>
  </div>
  <div class="col-md">
  <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#graphics-overview" role="tab" aria-controls="nav-home" aria-selected="true">Overview</a>
    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#graphics-technologies" role="tab" aria-controls="nav-profile" aria-selected="false"> Technologies</a>
    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#graphics-next-step" role="tab" aria-controls="nav-contact" aria-selected="false">Next Step</a>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="graphics-overview" role="tabpanel" aria-labelledby="nav-home-tab">As the website admin for Essential-Trading Online Shop, I created several promotional product images for the homepage. I also did some graphic work for the Bristol-based startup - Cook and Crabtree. The images are stored online at p.b.photography website. </div>
  <div class="tab-pane fade" id="graphics-technologies" role="tabpanel" aria-labelledby="nav-profile-tab"> <p><b>DSLR camera</b> - photos</p><p><b>Photoshop</b> - graphics</p></div>
  <div class="tab-pane fade" id="graphics-next-step" role="tabpanel" aria-labelledby="nav-contact-tab"></div>
  </div>
  <br>
  <pre><a href="https://marcin.pb.photography/" target="blank"><button type="button" class="btn btn-outline-secondary">Website</button></a></pre>
  </div>
</div>
<br><br><br><br>
</article>
</main>
  `,
  styles: [
  ]
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
