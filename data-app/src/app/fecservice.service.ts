import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Candidatedata} from './Candidatedata';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FecserviceService {

  private url = 'http://localhost:3000/getdata';

  constructor(private http: HttpClient) {
  }

  //Get all the data from the external API
  getFecData(page: number, size: number): Observable<Candidatedata> {
    let params = new HttpParams();
    params = params.append('page', String(page));
    params = params.append('per_page', String(size));
    return this.http.get<Candidatedata>(this.url, {params})
      .pipe(map((candidatedata: Candidatedata) => candidatedata), catchError(err => throwError(err)));
  }

  //Filter the data by candidate name from the external API
  getCandidateName(page: number, size: number, candidatename: string): Observable<Candidatedata> {
    let params = new HttpParams();
    params = params.append('page', String(page));
    params = params.append('per_page', String(size));
    params = params.append('q', String(candidatename));
    return this.http.get<Candidatedata>(this.url, {params})
      .pipe(map((candidatedata: Candidatedata) => candidatedata), catchError(err => throwError(err)));
  }

  //Filter the data by candidate ID from the external API
  getCandidateID(page: number, size: number, candidateid: string): Observable<Candidatedata> {
    let params = new HttpParams();
    params = params.append('page', String(page));
    params = params.append('per_page', String(size));
    params = params.append('candidate_id', String(candidateid));
    return this.http.get<Candidatedata>(this.url, {params})
      .pipe(map((candidatedata: Candidatedata) => candidatedata), catchError(err => throwError(err)));
  }

  //Filter the data by state from the external API
  getState(page: number, size: number, state: string): Observable<Candidatedata> {
    let params = new HttpParams();
    params = params.append('page', String(page));
    params = params.append('per_page', String(size));
    params = params.append('state', String(state));
    return this.http.get<Candidatedata>(this.url, {params})
      .pipe(map((candidatedata: Candidatedata) => candidatedata), catchError(err => throwError(err)));
  }

  //Filter the data by candidate party from the external API
  getPartyName(page: number, size: number, partyname: string): Observable<Candidatedata> {
    let params = new HttpParams();
    params = params.append('page', String(page));
    params = params.append('per_page', String(size));
    params = params.append('party', String(partyname));
    return this.http.get<Candidatedata>(this.url, {params})
      .pipe(map((candidatedata: Candidatedata) => candidatedata), catchError(err => throwError(err)));
  }

  //Sort the data in ascending order
  Sort(page: number, size: number, sortvalue: string): Observable<Candidatedata> {
    let params = new HttpParams();
    params = params.append('page', String(page));
    params = params.append('per_page', String(size));
    params = params.append('sortvalue', String(sortvalue));
    return this.http.get<Candidatedata>(this.url, {params})
      .pipe(map((candidatedata: Candidatedata) => candidatedata), catchError(err => throwError(err)));
  }

  //Sort the data in descending order
  Sortdesc(page: number, size: number, sortvalue: string): Observable<Candidatedata> {
    let params = new HttpParams();
    params = params.append('page', String(page));
    params = params.append('per_page', String(size));
    params = params.append('sortvalue', String('-') + String(sortvalue));
    return this.http.get<Candidatedata>(this.url, {params})
      .pipe(map((candidatedata: Candidatedata) => candidatedata), catchError(err => throwError(err)));
  }

  CheckloggedInstatus(): boolean {
    return !!localStorage.getItem('status');
  }

}
