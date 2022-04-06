import { Component } from '@angular/core';
import {LaunchesService} from './launches.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:any;
  title = 'firstapp';
  constructor(private launchData:LaunchesService,private router:Router){}
  ngOnInit(){
    this.launchData.getLaunches().subscribe((result)=>{
      console.warn('result',result)
      this.data = result;
    })
  }
  goToPage():void{
    this.router.navigate(['missiondetails']);
  }
}
