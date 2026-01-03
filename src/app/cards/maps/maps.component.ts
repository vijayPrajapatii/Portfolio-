import { MapCacheService } from '../../services/map-cache-service.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-maps',
  standalone: true,
  imports: [],
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  mapUrl: SafeResourceUrl | null = null;

  constructor(private mapCacheService: MapCacheService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loadMapUrl();
    })
  }

  loadMapUrl(): void {
    // Clear old cache and set new Bangalore location
    this.mapCacheService.clearMapDetails();
    
    // The URL for Bangalore
    const url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77490449574!2d77.3507514!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus&zoom=12';

    this.mapCacheService.setMapDetails(url);
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

