import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { ActivatedRoute, Router } from "@angular/router";
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-missionlist',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css'],
  animations: [
    trigger('bodyExpansion', [
      state('collapsed, void', style({height: '0px', visibility: 'hidden'})),
      state('expanded', style({height: '*', visibility: 'visible'})),
      transition('expanded <=> collapsed, void => collapsed',
      animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class MissionListComponent implements OnInit {
  missions: any
  collapsed: any
  constructor( private spacexApiService: SpacexapiService, private activatedRoute: ActivatedRoute,
               private router: Router) {

  }

  onDetailButtonClick(): void{
    this.router.navigate(['/missionDetails'])
  }


  ngOnInit(): void {
    this.spacexApiService.sendGetRequest().subscribe(data => {
      this.missions = data

    })
  }

  state = 'collapsed';

  toggle(): void {
    this.state = this.state === 'collapsed' ? 'expanded' : 'collapsed';
  }

}
