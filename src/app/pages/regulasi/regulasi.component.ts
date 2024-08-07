import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ppdb-regulasi',
  templateUrl: './regulasi.component.html',
  styleUrl: './regulasi.component.css'
})
export class RegulasiComponent {
  safeDocsAlur: SafeUrl | null = null;
  safeDocsKuota: SafeUrl | null = null;
  constructor(
    private sanitizer: DomSanitizer
  ){}

  ngOnInit(): void {
    this.safeDocsAlur = this.sanitizer.bypassSecurityTrustResourceUrl(environment.URL_REGULASI_PPDB+Date.now().toString())
    this.safeDocsKuota = this.sanitizer.bypassSecurityTrustResourceUrl(environment.URL_KUOTA_PPDB+Date.now().toString())
  }
}
