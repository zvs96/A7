import { Component } from '@angular/core';
import { CarsService } from './cars.service';

interface Car {
  name:string;
  color:string;
  id:number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  private colors:string[] = [
    "red",
    "blue",
    "green",
    "pink",
    "yellow",
    "grey"
  ]
  private cars: Car[] = [];
  private carName:string = "";

  constructor(private carsService: CarsService){}

  loadData(){
    this.carsService
      .getData()
      .subscribe(
        (cars:Car[]) => {
        this.cars = cars
        },
        (error)=>{
          alert(error)
        },
      )
  }

  addData(){
    this.carsService
      .addData(this.carName)
      .subscribe((car:Car) => {
        if(this.cars.length>1)
          this.cars.push(car)
      })
    this.carName = ""
  }

  getRandColor(){
    const num:number = Math.round(Math.random() * (this.colors.length - 1))
    return this.colors[num]
  }

  setNewColor(car:Car){
    this.carsService
      .changeColor(car,this.getRandColor())
      .subscribe(data => {
        console.log(data)
      })
  }

  deleteCar(car:Car){
    this.carsService
    .deleteCar(car)
    .subscribe(data => {
      this.cars = this.cars.filter(c => c.id != car.id)
    })
  }

}
