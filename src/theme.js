import { createMuiTheme, responsiveFontSizes }
from '@material-ui/core/styles';

const theme = responsiveFontSizes(createMuiTheme({
spacing: 4,
typography: {
	fontFamily: [
	'BrandonGrotW01-Light',
	].join(','),
	h1: {
	fontSize: '5rem',
	fontFamily: 'BrandonGrotW01-Light',
	},
	h2: {
	fontSize: '3.5rem',
	fontFamily: 'BrandonGrotW01-Light Sans',
	fontStyle: 'bold',
	},
	h3: {
	fontSize: '2.5rem',
	fontFamily: 'BrandonGrotW01-Light',
	},
},
palette: {
	background: {
	default: '#000000'//black
	},
	primary: {
	main: '#2B37D4',//indigo
	},
	secondary: {
	main: '#E769A6',//pink
	},
	error: {
	main: '#D72A2A',//red
	},
	warning: {
	main: '#FC7B09',//orange
	},
	info: {
	main: '#6B7D6A',//gray
	},
	success: {
	main: '#09FE00',//green
	},
	text: {
	primary: '#FFFFFF',//black
	secondary: '#726E75',//white
	},
},
}));


export default theme;
