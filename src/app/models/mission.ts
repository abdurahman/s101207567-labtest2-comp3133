import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';

export class Mission {
    private server = "https://api.spacexdata.com/v3/launches"


    mission_name: string;
    launch_year: string;
    details: string;
    mission_patch_small: string;
}
