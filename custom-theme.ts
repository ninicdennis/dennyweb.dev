import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const CustomTheme: CustomThemeConfig = {
	name: 'custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': 'Rubik, sans-serif',
		'--theme-font-family-heading': 'Rubik, sans-serif',
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '8px',
		'--theme-rounded-container': '4px',
		'--theme-border-base': '2px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #4cc9f0
		'--color-primary-50': '228 247 253', // #e4f7fd
		'--color-primary-100': '219 244 252', // #dbf4fc
		'--color-primary-200': '210 242 251', // #d2f2fb
		'--color-primary-300': '183 233 249', // #b7e9f9
		'--color-primary-400': '130 217 245', // #82d9f5
		'--color-primary-500': '76 201 240', // #4cc9f0
		'--color-primary-600': '68 181 216', // #44b5d8
		'--color-primary-700': '57 151 180', // #3997b4
		'--color-primary-800': '46 121 144', // #2e7990
		'--color-primary-900': '37 98 118', // #256276
		// secondary | #14213d
		'--color-secondary-50': '220 222 226', // #dcdee2
		'--color-secondary-100': '208 211 216', // #d0d3d8
		'--color-secondary-200': '196 200 207', // #c4c8cf
		'--color-secondary-300': '161 166 177', // #a1a6b1
		'--color-secondary-400': '91 100 119', // #5b6477
		'--color-secondary-500': '20 33 61', // #14213d
		'--color-secondary-600': '18 30 55', // #121e37
		'--color-secondary-700': '15 25 46', // #0f192e
		'--color-secondary-800': '12 20 37', // #0c1425
		'--color-secondary-900': '10 16 30', // #0a101e
		// tertiary | #003566
		'--color-tertiary-50': '217 225 232', // #d9e1e8
		'--color-tertiary-100': '204 215 224', // #ccd7e0
		'--color-tertiary-200': '191 205 217', // #bfcdd9
		'--color-tertiary-300': '153 174 194', // #99aec2
		'--color-tertiary-400': '77 114 148', // #4d7294
		'--color-tertiary-500': '0 53 102', // #003566
		'--color-tertiary-600': '0 48 92', // #00305c
		'--color-tertiary-700': '0 40 77', // #00284d
		'--color-tertiary-800': '0 32 61', // #00203d
		'--color-tertiary-900': '0 26 50', // #001a32
		// success | #70e000
		'--color-success-50': '234 250 217', // #eafad9
		'--color-success-100': '226 249 204', // #e2f9cc
		'--color-success-200': '219 247 191', // #dbf7bf
		'--color-success-300': '198 243 153', // #c6f399
		'--color-success-400': '155 233 77', // #9be94d
		'--color-success-500': '112 224 0', // #70e000
		'--color-success-600': '101 202 0', // #65ca00
		'--color-success-700': '84 168 0', // #54a800
		'--color-success-800': '67 134 0', // #438600
		'--color-success-900': '55 110 0', // #376e00
		// warning | #ffba08
		'--color-warning-50': '255 245 218', // #fff5da
		'--color-warning-100': '255 241 206', // #fff1ce
		'--color-warning-200': '255 238 193', // #ffeec1
		'--color-warning-300': '255 227 156', // #ffe39c
		'--color-warning-400': '255 207 82', // #ffcf52
		'--color-warning-500': '255 186 8', // #ffba08
		'--color-warning-600': '230 167 7', // #e6a707
		'--color-warning-700': '191 140 6', // #bf8c06
		'--color-warning-800': '153 112 5', // #997005
		'--color-warning-900': '125 91 4', // #7d5b04
		// error | #fa0522
		'--color-error-50': '254 218 222', // #fedade
		'--color-error-100': '254 205 211', // #fecdd3
		'--color-error-200': '254 193 200', // #fec1c8
		'--color-error-300': '253 155 167', // #fd9ba7
		'--color-error-400': '252 80 100', // #fc5064
		'--color-error-500': '250 5 34', // #fa0522
		'--color-error-600': '225 5 31', // #e1051f
		'--color-error-700': '188 4 26', // #bc041a
		'--color-error-800': '150 3 20', // #960314
		'--color-error-900': '123 2 17', // #7b0211
		// surface | #333538
		'--color-surface-50': '224 225 225', // #e0e1e1
		'--color-surface-100': '214 215 215', // #d6d7d7
		'--color-surface-200': '204 205 205', // #cccdcd
		'--color-surface-300': '173 174 175', // #adaeaf
		'--color-surface-400': '112 114 116', // #707274
		'--color-surface-500': '51 53 56', // #333538
		'--color-surface-600': '46 48 50', // #2e3032
		'--color-surface-700': '38 40 42', // #26282a
		'--color-surface-800': '31 32 34', // #1f2022
		'--color-surface-900': '25 26 27' // #191a1b
	}
};
