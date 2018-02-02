'use strict';

console.log( 'Svg.js was loaded.' );

function Svg()
{
    // this.xmlns = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="900" height="50">'
    this.svgns = 'http://www.w3.org/2000/svg';

    this.points_offset = 10;

    // for creating polygon dynamically
    this.start_point = 0;
    this.end_point = 0;
    this.tip_point = 0;

    // start point for a text
    this.text_x = 0;

    this.char_width = 0;
    this.char_height = 0;
    this.font_size = 0;
}

// find the points and return an array of 6 points
Svg.prototype.find_points = function( text )
{
    var a = this.start_point + ',0';
    this.text_x = this.start_point + this.points_offset + 5;

    this.end_point = this.start_point + ( this.points_offset * 2 ) + ( text.length * this.char_width );
    var b = this.end_point + ',0' ;

    this.tip_point = this.end_point + this.points_offset;
    var c = this.tip_point + ',' + ( this.char_height / 2 ); // like: 18 / 2 ==> 9

    var d = this.end_point + ',' + this.char_height ;
    var e = this.start_point + ',' + this.char_height;
    var f = this.start_point + this.points_offset + ',' + ( this.char_height / 2 );

    this.start_point = this.tip_point;

    return [ a, b, c, d, e, f ];
}

// find with an text input like: home/Shakiba or home/Shakiba/bin
Svg.prototype.find_width = function( input )
{
    // delimiter between paths is '/'
    var dirs = input.split( '/' );
    var index = 0;
    var max = dirs.length;
    var width = 0;

    while( index < max )
    {
        width += dirs[ index ].length * this.char_width;
        width += ( this.points_offset * 3 )
        ++index;
    }

    width += this.points_offset

    return width;
}

Svg.prototype.text = function( string )
{
    var text = document.createElementNS( this.svgns, 'text' );
    text.setAttribute( 'fill', '#000' );
    text.setAttribute( 'x', this.text_x );
    text.setAttribute( 'y', this.font_size  );
    text.setAttribute( 'font-family', 'monospace Inconsolata' );
    text.setAttribute( 'font-size', this.font_size );

    var contents = document.createTextNode( string );
    text.appendChild( contents );
    var svg = doc.class( 'svg' );
    svg[ svg.length - 1 ].appendChild( text );
}

// draw a single polygon and then call text for add text to it
Svg.prototype.polygon = function( text, className = '' )
{
    var polygon = document.createElementNS( this.svgns, 'polygon' );
    polygon.setAttribute( 'fill', '#FFF' );
    polygon.setAttribute( 'points', this.find_points( text ) );
    polygon.setAttribute( 'class', className );
    var svg = doc.class( 'svg' );
    svg[ svg.length - 1 ].appendChild( polygon );

    this.text( text );
}

// find character width and height and font-size
// then create new SVG tag and for each name call polygon function
// last one should have different class (= different color)
Svg.prototype.create = function( text )
{
    // use span.character to found out about width and height of a single character
    this.char_width  = doc.class( 'character' )[ 0 ].getBoundingClientRect().width;
    this.char_height = doc.class( 'character' )[ 0 ].getBoundingClientRect().height;
    this.font_size   = parseInt( document.body.style.fontSize );

    var svg = document.createElementNS( this.svgns, 'svg' );
    svg.setAttribute( 'width', this.find_width( text ) );
    svg.setAttribute( 'height', this.char_height );
    svg.setAttributeNS( 'http://www.w3.org/2000/xmlns/', 'xmlns:xlink', 'http://www.w3.org/1999/xlink');
    svg.setAttribute( 'class', 'svg' );
    var prompt = doc.class( 'prompt' );
    prompt[ prompt.length - 1 ].appendChild( svg );

    var dirs = text.split( '/' );
    var max = dirs.length - 1;
    var index = 0;
    while( index < max )
    {
        this.polygon( dirs[ index ], 'path' );
        ++index;
    }
    // current working directory that has different color
    this.polygon( dirs[ index ], 'cwd' );
}
