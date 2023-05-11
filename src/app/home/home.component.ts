import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  img1: any = '../assets/bler.jpg';
  img2: any = '../assets/bl.jpg';
  img3 : any = '../assets/foto.jpg';
  img4: any = '../assets/foto 2.jpg';
  navUser : any = '../assets/user.png';
  menuProfile : any = '../assets/dropDownMenu/profile.png';
  menuLogout : any = '../assets/dropDownMenu/logout.png';
  menuSetting : any = '../assets/dropDownMenu/setting.png';
  menuHelp : any = '../../assets/dropDownMenu/help.png';
  messenger : any = '../../assets/igNav/msg.png';
  explore : any = '../../assets/igNav/explore.png';
  search : any = '../../assets/igNav/search.png';
  home : any = '../../assets/igNav/home1.png';
  reels : any = '../../assets/igNav/reels1.png';
  heart : any = '../../assets/igNav/heart1.jpg';
  create : any = '../../assets/igNav/create.png';
  more : any = '../../assets/igNav/more.jpg';
  toggleMenu(){
    var subMenu = document.getElementById('subMenu');
    subMenu?.classList.toggle('open-menu')
  }
}
