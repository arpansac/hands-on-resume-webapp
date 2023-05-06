import { Component } from '@angular/core';
import { faGithubSquare, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent {

  faLinkedin = faLinkedinIn;
  faGithub = faGithubSquare;
  faWeb = faGlobe;

}
