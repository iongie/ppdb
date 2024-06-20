import { Component, OnInit } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'ppdb-video-panduan',
  templateUrl: './video-panduan.component.html',
  styleUrl: './video-panduan.component.css'
})
export class VideoPanduanComponent implements OnInit {
  safePanduan: SafeUrl | null = null;
  constructor(
    private sanitizer: DomSanitizer
  ){}

  ngOnInit(): void {
    this.safePanduan = this.sanitizer.bypassSecurityTrustResourceUrl(environment.VIDEO_PANDUAN);
  }
}
