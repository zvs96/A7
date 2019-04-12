import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';

interface Car {
  name:string;
  color:string;
  id?:number
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})


export class AddComponent implements OnInit {

  private colors:string[] = [
    "red",
    "blue",
    "green",
    "pink",
    "yellow",
    "grey"
  ]
  private cars: Car[] = []
  
  private inputVal = ""
  
  private carName:string = "";

  constructor(private carsService: CarsService){}

  ngOnInit(){
    // this.loadData()
  }

  // addData(){
  //   this.cars.push({
  //     name:"Niva",
  //     color:"pink"
  //   })
  // }

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
      .subscribe((car:any) => {
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
    this.carsService.changeColor(car,this.getRandColor())
  }

  deleteCar(car:Car){
    this.carsService
    .deleteCar(car)
    .subscribe(data => {
      this.cars = this.cars.filter(c => c.id != car.id)
    })
  }

}
