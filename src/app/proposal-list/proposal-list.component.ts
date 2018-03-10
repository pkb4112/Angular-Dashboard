import { Component, OnInit } from '@angular/core';
import { Proposal } from '../proposal/proposal';

@Component({
  selector: 'proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit {

   proposalOne: Proposal = new Proposal(15, 'ABC Company', 'http://github.com/pkb4112', 'Ruby on Rails', 150, 120, 15, 'pkb@gmail.com')

   proposalTwo: Proposal = new Proposal(16, 'Google', 'http://github.com/pkb4112', 'Ruby on Rails, HTML, CSS', 150, 120, 15, 'pkb@gmail.com')

   proposalThree: Proposal = new Proposal(17, 'XYZ', 'http://github.com/pkb4112', 'Ruby on Rails', 150, 120, 15, 'pkb@gmail.com')

   proposalFour: Proposal = new Proposal(18, 'Amazon Company', 'http://github.com/pkb4112', 'Ruby on Rails, Angular', 150, 120, 15, 'pkb@gmail.com')

   proposals: Proposal[] = [
   this.proposalOne, 
   this.proposalTwo, 
   this.proposalThree, 
   this.proposalFour,

   ]

  constructor() { }

  ngOnInit() {
  }

}
