import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { SvgIconComponent } from 'angular-svg-icon';
import { toSignal } from '@angular/core/rxjs-interop'

import { PostApiService } from '../../core/api';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterOutlet, DatePipe, SvgIconComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
  date = new Date();

  posts = toSignal(this.postApiService.getList())

  constructor(private titleService: Title, private metaService: Meta, private postApiService: PostApiService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Post ' + this.date);
    this.metaService.addTag({
      name: 'title',
      content: 'Post ' + this.date,
    });
    this.metaService.addTag({
      name: 'description',
      content: 'Post ' + this.date,
    });
  }
}
