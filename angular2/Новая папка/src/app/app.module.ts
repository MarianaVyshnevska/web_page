import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { RouterModule } from '@angular/router';
import { PageComponent } from './home/page/page.component';
import { NewsComponent } from './home/news/news.component';
import { Block2Component } from './home/block2/block2.component';
import { MoreComponent } from './home/more/more.component';
import { WatchArtimComponent } from './home/watch-artim/watch-artim.component';
import { WordpressComponent } from './home/wordpress/wordpress.component';
import { OurTeamComponent } from './home/our-team/our-team.component';
import { LoginComponent } from './home/login/login.component';
import { WelcomeComponent } from './home/login/welcome/welcome.component';

const routes=[{
  path: "home",
  component: HomeComponent
},
{
  path: "login",
  component: LoginComponent
},
{
  path: "welcome",
  component: WelcomeComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PageComponent,
    NewsComponent,
    Block2Component,
    MoreComponent,
    WatchArtimComponent,
    WordpressComponent,
    OurTeamComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
