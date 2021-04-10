import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.css']
})
export class MissionDetailsComponent implements OnInit {

  @Input() missions: any;

  onListButtonClick(): void{
    this.router.navigate(['/missionList'])
  }

  constructor(private spacexApiService: SpacexapiService, private activatedRoute: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.spacexApiService.sendGetRequest().subscribe(data => {
        this.missions = data

      })
    }

}
