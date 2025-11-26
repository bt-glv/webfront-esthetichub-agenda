import { Component } from '@angular/core';
import { NavBar } from '../../componente/nav-bar/nav-bar';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'landing',
  imports: [NavBar, NgOptimizedImage],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class PageLanding {

}
