var supaHotFire = 'boys';

module.exports = function( str ) {

	return ( str + supaHotFire ).toUpperCase().split( '' ).join( ' ' );

}
