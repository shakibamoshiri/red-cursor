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

    this.input_buffer = '';

    // change background color by: fs command
    this.background = function( color )
    {
        if( color === undefined )
        {
            document.getElementsByTagName( 'HTML' )[ 0 ].style.backgroundColor = '#2C001E';
        }
        else
        {
            if( enable_log )
            {
                console.log( 'change background color to: ' + color );
            }
            document.getElementsByTagName( 'HTML' )[ 0 ].style.backgroundColor = color;
        }
    }

    // change font size by: fs command
    this.fsize = function( size )
    {
        if( size === undefined )
        {
            document.getElementsByTagName( 'BODY' )[ 0 ].style.fontSize = '15px';
        }
        else
        {
            if( enable_log )
            {
                console.log( 'change font-size to: ' + size );
            }
            document.getElementsByTagName( 'BODY' )[ 0 ].style.fontSize = size + 'px';
        }

        screen.char_width = screen.get( 'cursor' ).getBoundingClientRect().width;
        // for Opera, Safari, Chorome
        screen.char_width = Math.floor( screen.char_width );
    }

    // add simple text to the screen
    this.text = function( string, class_name = 'text' )
    {
        var span = document.createElement( 'SPAN' );

        var contents = document.createTextNode( string );
        span.appendChild( contents );

        document.getElementById( 'terminal' ).appendChild( span );
        span.classList.add( class_name );
    }

    // 
    //     #  ⏵ ▶ ▷ ⟩ ⩥  ⫸  ⮞ ⯈               ＞
    // # 𐌠│ ┃ ┆ ▕ ▍ ⚊ ❭ ❯ ❱ ❳ 〔〕  
    // print prompt
    this.prompt = function( ps1 = '/home/Shakiba' )
    {
        var prompt = document.createElement( 'SPAN' );
        document.getElementById( 'terminal' ).appendChild( prompt );
        prompt.className = 'prompt';

        // create polygon, text passed on ps1
        svg.create( ps1 );
    }

    // add a arbitrary tag to the terminal
    this.add = function( tag_name, class_name, string )
    {
        var tag  = document.createElement( tag_name );
        if( string !== undefined )
        {
            var contents = document.createTextNode( string );
            tag.appendChild( contents );
        }
        document.getElementById( 'terminal' ).appendChild( tag );
        tag.classList.add( class_name );
    }


    // handling cursor
    this.cursor = function()
    {
        ++this.nrow;

        var cursor = document.createElement( 'SPAN' );

        var underscore = document.createTextNode( this.cursor_shape );
        cursor.appendChild( underscore );

        document.getElementById( 'terminal' ).appendChild( cursor );
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
        var cursor = document.getElementsByClassName( 'cursor' )[ this.nrow - 1 ];
        cursor.style.display = 'none';

        // also we can remove it
        //var cursor = document.getElementsByClassName( 'cursor' )[ 0 ];
        //document.getElementById( 'terminal' ).removeChild( cursor );
    }

    this.newline = function()
    {
        var br = document.createElement( 'BR' );
        document.getElementById( 'terminal' ).appendChild( br );
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
            var line = this.input_buffer.replace( /#[^0-9abcdef]+.*/ig, '' );
            if( line.startsWith( '#' ) )
            {
                return '';
            }
            return line.trim();
        }
        else
        {
            return document.getElementsByClassName( name )[ this.nrow - 1 ];
        }
    }

    this.clear = function()
    {
        document.getElementById( 'terminal' ).innerHTML = '';
        this.nrow = 0;

        // when we clear the screen the previous span.character is cleaned
        // we should add it again because svg class needs it
        this.add( 'SPAN', 'character', ' ' );
    }

}
