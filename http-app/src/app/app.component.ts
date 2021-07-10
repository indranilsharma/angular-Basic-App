import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Post} from './post.model';
import { PostService } from './post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSubs: Subscription;

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
    this.errorSubs = this.postService.error.subscribe((errorMessage) => {
      this.error = errorMessage;
    });
    this.isFetching = true;
    // this.fetchPost();
    this.postService.fetchPosts()
    .subscribe((posts) => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, (error) => {
      this.isFetching = false;
      this.error = error.message;
      console.log(error);
 });
  }

  onCreatePost(postData: Post) {
    // Send Http request
    // console.log(postData);
    this.postService.createAndStorePost(postData.title, postData.content);

  }

  onFetchPosts() {
    // this.fetchPost();
    this.isFetching = true;
    this.postService.fetchPosts()
    .subscribe((posts) => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, (error) => {
         this.error = error.message;
    });
  }

  onClearPosts() {
    this.postService.deletePost().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  onHandelError() {
    this.error = null;
  }
  ngOnDestroy() {
    this.errorSubs.unsubscribe();
  }
}
