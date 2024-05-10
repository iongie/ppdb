import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ppdb-jadwal',
  templateUrl: './jadwal.component.html',
  styleUrl: './jadwal.component.css'
})
export class JadwalComponent {
  safeDocsAlur: SafeUrl | null = null;
  constructor(
    private sanitizer: DomSanitizer
  ){}

  ngOnInit(): void {
    this.safeDocsAlur = this.sanitizer.bypassSecurityTrustResourceUrl(environment.URL_JADWAL_PPDB)
  }
}
