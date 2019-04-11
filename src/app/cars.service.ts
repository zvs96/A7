import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient ) { }


  getTitle(){
    return this.http
      .get('http://localhost:3000/title')
      .pipe(
        map(res=>res),
        map((data:{value:string})=>data.value)
      )
  }

  getData(){
    const headers:HttpHeaders = new HttpHeaders({
      "Content-Type": "application/json; charset=utf8"
    });
    
    return this.http
      .get('http://localhost:3000/cars', {
        headers: headers
      })
      .pipe(
        map(res =>  res),
        catchError((error) => {
          return throwError("Server Is Not Available")
        })
      )
  }

  addData(carName: string){
    const data = {
      name: carName,
      color: "black",
    }
    return this.http
      .post("http://localhost:3000/cars", data)
      .pipe(map(res => res))
  }

  changeColor(car:any, color:string){
    car.color = color
    return this.http
      .put(`http://localhost:3000/cars/${car.id}`, car)
      .pipe(map(res => res))
  }

  deleteCar(car:any){
    return this.http
      .delete(`http://localhost:3000/cars/${car.id}`)
      .pipe(map(res => res))

  }

}
