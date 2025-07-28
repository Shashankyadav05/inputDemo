import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-movi',
  imports: [],
  templateUrl: './movi.html',
  styleUrl: './movi.css'
})
export class Movi {
  @Input() title: string = 'padmaavati';
  @Input() url:  string='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZIO4qjqmTIzwhJO77LfiknpOtlsIpZ8kxQA&s';
}
