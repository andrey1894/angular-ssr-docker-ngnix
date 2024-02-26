import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [RouterOutlet, DatePipe, SvgIconComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent implements OnInit {
  date = new Date();

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('test ' + this.date);
    this.metaService.addTag({
      name: 'title',
      content: 'Updated Page Title' + this.date,
    });
    this.metaService.addTag({
      name: 'description',
      content: 'Updated Page Title' + this.date,
    });
  }
}
