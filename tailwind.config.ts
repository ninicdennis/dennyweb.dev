import { join } from 'path';
import type { Config } from 'tailwindcss';
import { CatppuccinTheme } from './catppuccin-theme';
import { CustomTheme } from './custom-theme';

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';

const config = {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(
			require.resolve('@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		extend: {}
	},
	plugins: [
		require('@tailwindcss/typography'),

		skeleton({ themes: { custom: [CatppuccinTheme, CustomTheme] } })
	]
} satisfies Config;

export default config;
