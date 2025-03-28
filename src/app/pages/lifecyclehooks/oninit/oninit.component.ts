import { AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-oninit',
  imports: [],
  templateUrl: './oninit.component.html',
  styleUrl: './oninit.component.css'
})
export class OninitComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy{
  ngOnDestroy(): void {
    console.log("This Component is Destroyed");
  }
  
  ngAfterContentInit(): void {
    console.log("Need to be understood");
  }

  ngAfterViewInit(): void {
    console.log("After View Init!");
  }

  ngOnInit(): void {
    console.log("On Init!");
  }

  
}
