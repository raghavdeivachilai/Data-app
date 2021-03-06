import {Component, OnInit} from '@angular/core';
import {FecserviceService} from '../fecservice.service';
import {Candidatedata} from '../Candidatedata';
import {PageEvent} from '@angular/material/paginator';
import {map} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {SocialAuthService} from 'angularx-social-login';

@Component({
  selector: 'app-fda-data',
  templateUrl: './fda-data.component.html',
  styleUrls: ['./fda-data.component.css']
})
export class FdaDataComponent implements OnInit {
  username: string = null;
  pageEvent: PageEvent;
  candidatenameval: string = null;
  candidateidval: string = null;
  stateval: string = null;
  partyval: string = null;
  dataSource: Candidatedata = null;
  displayedColumns: string[] = ['candidate_id', 'party', 'name', 'candidate_inactive', 'has_raised_funds', 'incumbent_challenge', 'state', 'district_number', 'office', 'candidate_status'];
  states: string[] = ['ID', 'Party', 'State', 'Name'];
  displayflags: boolean[] = [false, false, false, false];
  colorflags: boolean[] = [false, false, false, false];

  constructor(private fecService: FecserviceService, private route: ActivatedRoute, private authService: SocialAuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.getalldata();
    this.username = this.route.snapshot.paramMap.get('username');
  }

  //Get all the data from the external API
  getalldata() {
    this.fecService.getFecData(1, 20).pipe(
      map((candidate_data: Candidatedata) => this.dataSource = candidate_data)
    ).subscribe();
  }

  //Get the data based on page number
  onPaginateChange(event: PageEvent) {
    let page = event.pageIndex;
    const size = event.pageSize;
    page = page + 1;
    this.fecService.getFecData(page, size).pipe(
      map((candidate_data: Candidatedata) => this.dataSource = candidate_data)
    ).subscribe();
  }

  //Filter by candidate name
  findByCandidateName(candidatename: string) {
    this.fecService.getCandidateName(1, 20, candidatename).pipe(
      map((candidate_data: Candidatedata) => this.dataSource = candidate_data)
    ).subscribe();
  }

  //Filter by candidate ID
  findByCandidateID(candidateid: string) {
    this.fecService.getCandidateID(1, 20, candidateid).pipe(
      map((candidate_data: Candidatedata) => this.dataSource = candidate_data)
    ).subscribe();
  }

  //Filter by candidate state
  findByState(state: string) {
    this.fecService.getState(1, 20, state).pipe(
      map((candidate_data: Candidatedata) => this.dataSource = candidate_data)
    ).subscribe();
  }

  //Filter by candidate party name
  findByPartyName(partyname: string) {
    this.fecService.getPartyName(1, 20, partyname).pipe(
      map((candidate_data: Candidatedata) => this.dataSource = candidate_data)
    ).subscribe();
  }

  // Sort based on candidate ID
  sortcandidateid() {
    this.fecService.Sort(1, 20, 'candidate_id').pipe(
      map((candidate_data: Candidatedata) => this.dataSource = candidate_data)
    ).subscribe();
  }

  //Sort based on the aprty of the candidate
  sortcandidateparty() {
    this.fecService.Sort(1, 20, 'party').pipe(
      map((candidate_data: Candidatedata) => this.dataSource = candidate_data)
    ).subscribe();
  }

  //Sort based on the candidate state
  sortcandidatestate() {
    this.fecService.Sort(1, 20, 'state').pipe(
      map((candidate_data: Candidatedata) => this.dataSource = candidate_data)
    ).subscribe();
  }

  //Sort by candidate name
  sortcandidatename() {
    this.fecService.Sort(1, 20, 'name').pipe(
      map((candidate_data: Candidatedata) => this.dataSource = candidate_data)
    ).subscribe();
  }

  //Sort descending by candidate  ID
  sortcandidateiddesc() {
    this.fecService.Sortdesc(1, 20, 'candidate_id').pipe(
      map((candidate_data: Candidatedata) => this.dataSource = candidate_data)
    ).subscribe();
  }

  //Sort descending by party name of the candidate
  sortcandidatepartydesc() {
    this.fecService.Sortdesc(1, 20, 'party').pipe(
      map((candidate_data: Candidatedata) => this.dataSource = candidate_data)
    ).subscribe();
  }

  //Sort descending by state of the candidate
  sortcandidatestatedesc() {
    this.fecService.Sortdesc(1, 20, 'state').pipe(
      map((candidate_data: Candidatedata) => this.dataSource = candidate_data)
    ).subscribe();
  }

  //Sort descending by name of the candidate
  sortcandidatenamedesc() {
    this.fecService.Sortdesc(1, 20, 'name').pipe(
      map((candidate_data: Candidatedata) => this.dataSource = candidate_data)
    ).subscribe();
  }

  //Signout user
  signOut(): void {
    localStorage.removeItem('status');
    this.authService.signOut();
    this.router.navigate(['login']);
  }

  //UI changes
  displayform(id: number) {
    this.displayflags[id] = !this.displayflags[id];
    this.colorflags[id] = !this.colorflags[id];
    for (let idval = 0; idval < 4; idval++) {
      if (idval === id) {
        continue;
      }
      this.displayflags[idval] = false;
      this.colorflags[idval] = false;
    }
  }
}
