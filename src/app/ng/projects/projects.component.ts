import { Component, Inject, Injector, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'dp-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit{
  public routerData$: Observable<any>;

  constructor(private route: ActivatedRoute, @Inject('ajs.location') public $location: ng.ILocationService) {}

  ngOnInit(): void {
    this.routerData$ = this.route.data;
  }
}
