import { Component, OnInit } from '@angular/core';
import { User } from '../models/users';

@Component({
  selector: 'asmt-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:User[] =[
  
  ]

  dumyData :User[] = [ {
    name:"Piyush gupta",
    username:"piyush1998gupta",
    email:"piyush1998gupta@gmail.com"
  },
  {
    name:"Tarun Garg",
    username:"tarun12garg",
    email:"tarungarag12@gmail.com"
  },
  {
    name:"Ishita goyal",
    username:"ishita1goyal",
    email:"ishita1goyal@ymail.com"
  },
  {
    name:"Madhav Khurana",
    username:"madhav1khurana",
    email:"madhav21khurana@gmail.com"
  },
  {
    name:"Prashant Sharma",
    username:"prashantsharma1",
    email:"prashantsharma1@gmail.com"
  },
  {
    name:"Masi Tyagi",
    username:"mtyagu56",
    email:"tyagimansi76@gmail.com"
  },{
    name:"Akhil ganothara",
    username:"akhilg5",
    email:"akhilg5@gmail.com"
  },{
    name:"Prasad ",
    username:"prasad7",
    email:"prasad7bhatane@gmail.com"
  },
]
  constructor() { 
    if(this.users.length==0){
      for (let i=0;i<this.dumyData.length;i++){
        this.users.push(this.dumyData[i]);
      }
  }
  }

  ngOnInit(): void {
   
  }

  resetData(){
      this.users=[];
      return this.users
  }
  restoreData(){
    if(this.users.length==0){
        for (let i=0;i<this.dumyData.length;i++){
          this.users.push(this.dumyData[i]);
        }
    }
      return this.users
    
  }

}
