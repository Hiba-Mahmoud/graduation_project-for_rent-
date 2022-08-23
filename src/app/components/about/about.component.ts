import { Component, OnInit } from '@angular/core';
import { AboutTeamsService } from './services/about-teams.service';
import { TeamService } from './services/team.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  projectData: any = []; 
  teamData: any = []; 

  constructor(private about:AboutTeamsService ,private team:TeamService)
   {     
    this.getTeamData();    
    this.getProjectData();    
   }
   ////////////////////////////////////////////////

   getProjectData(){
    this.about.getData().subscribe(res=>{
      console.log(res);
      this.projectData=res;
      console.log("Data is =");
      console.log(res);
    });
   }
   ////////////////////////////
   getTeamData(){
    this.team.getTeamData().subscribe(result=>{
      console.log(result);
      this.teamData=result;
      console.log("team is =");
      // console.log(result);
      console.log(this.teamData.data);
      console.log(this.teamData);
    });
   }

  ngOnInit(): void {

  }

}
