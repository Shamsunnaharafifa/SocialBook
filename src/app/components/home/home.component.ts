import { AuthService } from './../../services/auth.service';
import { PostService } from './../../services/post.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserData } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit, OnDestroy {

  isMenuOpened: boolean = false;
  isDarkTheme: boolean = false;

  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }

  clickedOutside(): void {
    this.isMenuOpened = false;
  }


  images: any[] = [
    'data:image/jpeg;base64,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',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC0XxqymFilMz_LZ1jvuc27ycfI7me-WQdIA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoGZgH5BKsmhl1fC9OnIGqbfU_wXto1aONAA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6IS1XQpkM9WMHFMfR-27DbwdQR2QJMUUgCfGJoSouSUPNXpZ89Uta1bJLMxce4F2YIOs&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF2E-YtfbLCN_kURVutkbdhyVwHedp8sG6xA&usqp=CAU'
  
  ];

  posts: any[] = [];
  user!: UserData;
  subs: Subscription[] = [];

  constructor(private postService: PostService, 
              private authService: AuthService) {
                
               }

  ngOnInit(): void {
    this.subs.push(
      this.postService.getAllPosts().subscribe(posts=> {
        this.posts = posts;
      })
    );
    this.subs.push(
      
    );
  }



  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }

  postMessage(form:NgForm):void {
    console.log(form.value);
  }

}