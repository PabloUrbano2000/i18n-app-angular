import { inject, Injectable, InjectionToken, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

export const SERVER_LANG_TOKEN = new InjectionToken<string>('SERVER_LANG_TOKEN')

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  cookie = inject(SsrCookieService)
  translate = inject(TranslateService)

  langServer = inject(SERVER_LANG_TOKEN, {
    optional: true
  })

  currentLang = signal(this.langServer ?? 'en')

  constructor(){
    // this.translate.addLangs(['de', 'en']);
    // this.translate.setDefaultLang('en');
    // this.translate.use('en');
  }

  changeLang(lang: string){
    this.cookie.set('lang', lang)

    // TODO: Cambio de idioma
   this.translate.use(lang)

   this.currentLang.set(lang)
  }

}
