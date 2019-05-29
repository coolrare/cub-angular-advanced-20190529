import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  type = 0;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.type = +this.route.snapshot.paramMap.get('type');
    this.route.paramMap.subscribe((p) => {
      this.type = +p.get('type');
    });
  }

}
