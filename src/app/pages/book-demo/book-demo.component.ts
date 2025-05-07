import { Component, HostListener, OnInit } from '@angular/core';
import {HeroComponent}  from "../../components/hero/hero.component" 
// if u wanna use import HerComponent just add default into the component, but this isn't React
import {NavbarComponent} from "../../components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { WhyUsComponent } from '../../components/why-us/why-us.component';



@Component({
  selector: 'app-book-demo',
  imports: [
    NavbarComponent, 
    CommonModule, 
  ],
  templateUrl: './book-demo.component.html',
  styleUrl: './book-demo.component.css', 
  standalone : true, 
})
export class BookDemoComponent implements OnInit {

  availableHours: string[] = [];
  isErrorResponse = false;
  showItResponse = false;
  messageResponse = '';
  fullName = '';
  email = '';
  mobile = '';
  isInputErrors = false;
  remote: boolean | null = true;
  success = false;
  showiT = false;

  isMobile = false;
  private mobileBreakPoint = 1300; 

  identification = '';
  selectedDate: string | null = null;
  selectedTime: string = '';
  dateInFrensh: string | null = null;
  loader = false;
  currentDate = new Date();
  calendarDates: Date[] = [];

  ngOnInit() {
    this.calendarDates = this.generateCalendar();
    this.checkScreenDim();
    this.availableHours = this.generateAvailableHours(); 
  }



  @HostListener('window:resize')
  onResize() {
    this.checkScreenDim();
  }


  private checkScreenDim(){
    this.isMobile = window.innerWidth <= this.mobileBreakPoint; 
  }


  handleEmailChange() {
    if (this.isInputErrors) {
      this.isInputErrors = false;
    }
  }

  setRemote(value: boolean) {
    this.remote = value;
  }

  goToPreviousMonth() {
    const prev = new Date(this.currentDate.setMonth(this.currentDate.getMonth() - 1));
    this.currentDate = new Date(prev);
    this.calendarDates = this.generateCalendar();
  }

  goToNextMonth() {
    const next = new Date(this.currentDate.setMonth(this.currentDate.getMonth() + 1));
    this.currentDate = new Date(next);
    this.calendarDates = this.generateCalendar();
  }

  isPreviousMonthDisabled(): boolean {
    const now = new Date();
    return this.currentDate.getMonth() <= now.getMonth() && this.currentDate.getFullYear() === now.getFullYear();
  }

  isDateDisabled(date: Date): boolean {
    const today = new Date();
    return date < today;
  }

  toggleDateSelection(date: Date) {
    this.selectedDate = date.toDateString();
    this.dateInFrensh = date.toLocaleDateString('fr-FR');
  }

  generateCalendar(): Date[] {
    const start = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    const end = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);
    const dates = [];
    for (let day = start.getDate(); day <= end.getDate(); day++) {
      dates.push(new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day));
    }
    return dates;
  }

  generateAvailableHours(): string[] {
    return ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];
  }

  handleTimeSelection(time: string) {
    this.selectedTime = time;
  }

  handleSubmit() {
    this.loader = true;
    setTimeout(() => {
      this.loader = false;
      this.success = true;
      this.showiT = true;
      this.identification = 'PCS-' + Math.floor(Math.random() * 10000);
    }, 1500);
  }


}
