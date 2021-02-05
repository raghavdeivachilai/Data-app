import {Candidate} from './candidate';

export interface Candidatedata {
  api_version: number;
  pagination: {
    per_page: number,
    page: number,
    pages: number,
    count: number
  };
  results: Candidate[];
}

