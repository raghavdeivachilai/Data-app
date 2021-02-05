export interface Candidate {
  party: string;
  // cycles:[2020,2022];
  name: string;
  party_full: string;
  // election_years:[2020];
  candidate_inactive: boolean;
  has_raised_funds: boolean;
  // load_date:"2019-06-10T21:08:12+00:00";
  incumbent_challenge: string;
  candidate_id: string;
  state: string;
  district_number: number;
  // last_f2_date:"2019-04-23";
  office_full: string;
  candidate_status: string;
  inactive_election_years: number;
  active_through: number;
  incumbent_challenge_full: string;
  office: string;
  // election_districts:["00"];
  district: string;
  // first_file_date:"2019-04-23";
  flags: string;
  // last_file_date:"2019-04-23";
  federal_funds_flag: boolean;
}
