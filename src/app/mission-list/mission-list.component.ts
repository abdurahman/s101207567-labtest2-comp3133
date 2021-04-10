import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-missionlist',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {
  missions: any
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

}
