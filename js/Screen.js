'use strict';

console.log( '3. Screen.js was loaded.' );

function Screen( svg )
{
    //this.line = [];

    this.nrow = 0;

    this.char_width = 0;

    //this.cursor_pos = 0;

    // 𐌠│ ┃ ┆ ▕ ▍
    this.cursor_shape = ' ';

    this.line_buffer = '';

    // change background color by: fs command
    this.background = function( color )
    {
        if( color === undefined )
        {
            doc.id( 'html' ).style.backgroundColor = '#2C001E';
        }
        else
        {
            if( enable_log )
            {
                console.log( 'change background color to: ' + color );
            }
            doc.id( 'html' ).style.backgroundColor = color;
        }
    }

    // change font size by: fs command
    this.fsize = function( size )
    {
        if( size === undefined )
        {
            doc.id( 'body' ).style.fontSize = '15px';
        }
        else
        {
            if( enable_log )
            {
                console.log( 'change font-size to: ' + size );
            }
            doc.id( 'body' ).style.fontSize = size + 'px';
        }

        screen.char_width = Math.floor( doc.id( 'screen-character' ).getBoundingClientRect().width );
    }

    // add simple text to the screen
    this.text = function( string, class_name = 'text' )
    {
        var span = document.createElement( 'SPAN' );

        var contents = document.createTextNode( string );
        span.appendChild( contents );

        doc.id( 'terminal' ).appendChild( span );
        span.classList.add( class_name );
    }

    // 
    //     #  ⏵ ▶ ▷ ⟩ ⩥  ⫸  ⮞ ⯈               ＞
    // # 𐌠│ ┃ ┆ ▕ ▍ ⚊ ❭ ❯ ❱ ❳ 〔〕  
    // print prompt
    this.prompt = function( ps1 = 'home/Shakiba' )
    {
        var prompt = document.createElement( 'SPAN' );
        doc.id( 'terminal' ).appendChild( prompt );
        prompt.className = 'prompt';

        // create polygon, text passed on ps1
        svg.create( ps1 );
    }

    // add a arbitrary tag to the terminal
    this.add = function( tag_name, class_name, string, id )
    {
        var tag  = document.createElement( tag_name );
        if( string !== undefined )
        {
            var contents = document.createTextNode( string );
            tag.appendChild( contents );
        }

        if( id !== undefined )
        {
            tag.id = class_name;
        }
        else
        {
            tag.classList.add( class_name );
        }

        doc.id( 'terminal' ).appendChild( tag );
    }


    // handling cursor
    this.cursor = function()
    {
        ++this.nrow;

        var cursor = document.createElement( 'SPAN' );

        var underscore = document.createTextNode( this.cursor_shape );
        cursor.appendChild( underscore );

        doc.id( 'terminal' ).appendChild( cursor );
        cursor.className = 'cursor';

        // each time it is created, it should be 0
        cursor.style.left = '0px';

        // auto scroll to the bottom
        // if we do no put it here and instead we would put it
        // in the main function it did not work properly
        // thus after each time a cursor is added then the scroll-bar
        // will be fixed to the very last point
        window.scrollTo(  0, document.body.scrollHeight );
    }

    this.hide_cursor = function()
    {
        // we can hide the cursor, it is much faster than remove-child
        var cursor = doc.class( 'cursor' )[ this.nrow - 1 ];
        cursor.style.display = 'none';

        // also we can remove it
        //var cursor = document.getElementsByClassName( 'cursor' )[ 0 ];
        //document.getElementById( 'terminal' ).removeChild( cursor );
    }

    this.newline = function()
    {
        // reset svg class variables to start fresh on each line
        svg.start_point = 0;
        svg.end_point = 0;
        svg.tip_point = 0;
        svg.text_x = 0;

        var br = document.createElement( 'BR' );
        doc.id( 'terminal' ).appendChild( br );
    }

    this.get = function( name )
    {
        // if( name === 'row' )
        // {
        //     return document.getElementsByClassName( 'row' )[ this.nrow - 1 ];
        // }
        // else
        // if( name === 'cursor' )
        // {
        //     // for hide the cursor, it is much faster than remove-child
        //     return document.getElementsByClassName( 'cursor' )[ this.nrow - 1 ];

        //     // for remove it
        //     //return document.getElementsByClassName( 'cursor' )[ 0 ];
        // }
        // else
        if( name === 'line' )
        {
            var line = this.line_buffer.replace( /#[^0-9abcdef]+.*/ig, '' );
            if( line.startsWith( '#' ) )
            {
                return '';
            }
            return line.trim();
        }
        else
        {
            return doc.class( name )[ this.nrow - 1 ];
        }
    }

    this.clear = function()
    {
        doc.id( 'terminal' ).innerHTML = '';
        this.nrow = 0;

        // when we clear the screen the previous span.screen-font-size is cleaned
        // we should add it again because svg class needs it
        this.add( 'SPAN', 'screen-character', ' ', 'id' );
    }

}
