import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wander-easy-weather';
  city: string = '';
  weatherData: any;

  constructor(private http: HttpClient) {}

getWeather() {
  const apiKey = '808b37a27ac3fd0b6242f2f0e2c94abf'; // 🟡 Yahan apni API key paste karo
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&units=metric&appid=${apiKey}`;

  this.http.get(apiUrl).subscribe({
    next: (data) => {
      this.weatherData = data;
    },
    error: (err) => {
      alert('City not found or API error!');
      console.error(err);
    }
  });

}
}
