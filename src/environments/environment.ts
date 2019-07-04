// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	skills: [
		{
			imgSrc: 'assets/images/html5.png',
			title: 'HTML',
			description: 'Stosuję semantyczny kod zgodnie ze standardami W3C'
		},
		{
			imgSrc: 'assets/images/css3.png',
			title: 'CSS',
			description: 'Kontroluję wygląd oraz układ elementów na stronie internetowej.'
		},
		{
			imgSrc: 'assets/images/Sass.png',
			title: 'SASS',
			description: 'Wykorzystuję składnię do szybszego pisania kodu'
		},
		{
			imgSrc: 'assets/images/bootstrap.png',
			title: 'Bootstrap',
			description:
				'Wykorzystuję gotowe rozwiązania CSS i JS do przyspieszania pracy przy tworzeniu strony internetowej.'
		},
		{
			imgSrc: 'assets/images/rwd.png',
			title: 'RWD',
			description: 'Używam media queries oraz flexboxa do tworzenia responsywnych stron.'
		},
		{
			imgSrc: 'assets/images/git.png',
			title: 'GIT',
			description: 'To narzędzie pozwala mi na kontrolowanie wprowadzania zmian w projekcie.'
		},
		{
			imgSrc: 'assets/images/javascript.png',
			title: 'JavaScript',
			description: 'Znam podstawy.'
		},
		{
			imgSrc: 'assets/images/angular.png',
			title: 'Angular',
			description: 'Znam podstawy'
		}
	],
	production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
