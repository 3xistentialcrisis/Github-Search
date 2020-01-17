import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})
export class RepoSearchComponent implements OnInit {

  @Output() emitSearch = new EventEmitter<any>();

  searchTerm: string;
  constructor() { }

  search() {
    this.emitSearch.emit(this.searchTerm);
  }

  ngOnInit() {
  }

}