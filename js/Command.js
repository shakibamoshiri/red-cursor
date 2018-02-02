'use strict';

console.log( '4. Command.js was loaded.' );

function Command( screen, path )
{
    var cd    = /^ *cd  *(~|\/|\.|\.\.|\w+)?\/? *;?$/;
    var ls    = /^ *ls *;?$/;
    var clear = /^ *clear *;?$/;
    var echo  = /^ *(echo *|echo .*?);?$/;
    var df    = /^ *df *;?$/;
    var pwd   = /^ *pwd *;?$/;
    var cat   = /^ *cat *([a-zA-Z0-9._-]+|&gt; *[a-zA-Z0-9_.-]+)? *;?$/;
    var history   = /^ *history *;?$/;

    var bc = /^ *bc *(#[a-f0-9]{3,6})? *;?$/;
    var fs = /^ *fs *([1-9][0-9])? *;?$/;

    var date = /^ *date *;?$/;
    var help = /^ *help *;?$/;

    var ii = /^ *ii *;?$/;
    var open = /^ *open *([^ ]+)? *;?$/;

    // handle two key-press for Alter key
    var twice_alt_flag = false;

    // storing each command as the history of the terminal
    this.histories = [];
    this.h_index   = 0;

    // for checking if a command is valid or NOT
    this.check = function( command )
    {
        if( cd.exec( command ) )
        {
            var arg = cd.exec( command )[ 1 ];
            this.cd( arg );
        }
        else
        if( ls.exec( command ) )
        {
            this.ls();
        }
        else
        if( clear.exec( command ) )
        {
            this.clear();
        }
        else
        if( echo.exec( command ) )
        {
            var string = command.replace( /\s+/g, ' ' )
                                .replace( '$PATH', path.PATH );
            text( string.substr( 5, string.length ) + ' ' );
            screen.newline();
        }
        else
        if( df.exec( command ) )
        {
            this.df();
        }
        else
        if( pwd.exec( command ) )
        {
            text( path.pwd.join( '/' ) );
            screen.newline();
        }
        else
        if( cat.exec( command ) )
        {
            var arg = cat.exec( command )[ 1 ];
            this.cat( arg );
        }
        else
        if( history.exec( command ) )
        {
            this.history();
        }
        else
        if( bc.exec( command ) )
        {
            var color = bc.exec( command )[ 1 ];
            if( color === undefined  )
            {
                screen.background();
                text( 'reset to default' );
                screen.newline();
            }
            else
            {
                screen.background( color );
            }
        }
        else
        if( fs.exec( command ) )
        {
            var size = fs.exec( command )[ 1 ];
            if( size === undefined )
            {
                screen.fsize();
                text( 'reset to default' );
                screen.newline();
                text( 'Range is from 10 to 99. Default is 15px.' );
                screen.newline();
            }
            else
            {
                screen.fsize( size );
            }
        }
        else
        if( date.exec( command ) )
        {
            text( Date() );
            screen.newline();
        }
        else
        if( help.exec( command ) )
        {
            this.help();
        }
        else
        if( ii.exec( command ) )
        {
            this.ii();
        }
        else
        if( open.exec( command ) )
        {
            var media = open.exec( command )[ 1 ];
            if( media === undefined  )
            {
                text( 'argument required be a mdeia type' );
                screen.newline();
            }
            else
            {
                var cwd = path.cwd();
                if( media in path.root[ cwd ] && path.root[ cwd ][ media ] === 'media' )
                {
                    if( cwd === 'Pictures' )
                    {
                        window.open( './' + cwd + '/' + media, '_blank', path.readable.Pictures[ media ] );
                    }
                    else
                    if( cwd === 'Videos' )
                    {
                        window.open( './' + cwd + '/' + media, '_blank', path.readable.Videos[ media ] );
                    }
                    else
                    if( cwd === 'Music' )
                    {
                        window.open( './' + cwd + '/' + media, '_blank', path.readable.Music[ media ] );
                    }
                }
                else
                {
                    text( '(' + media + ')' + ' is not mdeia type' );
                    screen.newline();
                }
            }
        }
        else
        if( command !== '' )
        {
            text( command + ': command not found' );
            screen.newline();
        }
    }

    // handle Alter key
    this.alter = function( char )
    {
        switch( char )
        {
            case 'd':
            twice_alt_flag = true;
            break;

            // Alter + l: off/on console.log()
            case 'l':
            if( enable_log === true )
            {
                console.log( 'console log was disabled.' );
                enable_log = false;
            }
            else
            {
                console.log( 'console log was enabled.' );
                enable_log = true;
            }
            break;

            // open new table and goes to githup account
            case 'g':
            window.open( 'https://github.com/k-five', '_blank').focus();
            break;

            // open new table and goes to source code on gitup
            case 't':
            window.open( 'https://github.com/k-five/red-cursor', '_blank').focus();
            break;

            // open new table and goes to stack overflow account
            case 's':
            if( twice_alt_flag === false )
            {
                window.open( 'https://stackoverflow.com/users/4643584/k-five', '_blank').focus();
            }

            // handle Alter d-s
            case 's':
            if( twice_alt_flag === true )
            {
                text( 'skill:' );
                screen.newline();

                read( path.readable[ 'Documents' ][ 'skill' ] );

                screen.hide_cursor();
                screen.prompt( path.get() );
                screen.add( 'SPAN', 'row' );
                screen.cursor();
                screen.newline();
                twice_alt_flag = false;
            }
            break;

            // handle Alter d-a
            case 'a':
            if( twice_alt_flag === true )
            {
                text( 'about-me:' );
                screen.newline();

                read( path.readable[ 'Documents' ][ 'about-me' ] );

                screen.hide_cursor();
                screen.prompt( path.get() );
                screen.add( 'SPAN', 'row' );
                screen.cursor();
                screen.newline();
                twice_alt_flag = false;
            }
            break;

            // handle Alter d-p
            case 'p':
            if( twice_alt_flag === true )
            {
                text( 'project:' );
                screen.newline();

                read( path.readable[ 'Documents' ][ 'project' ] );

                screen.hide_cursor();
                screen.prompt( path.get() );
                screen.add( 'SPAN', 'row' );
                screen.cursor();
                screen.newline();
                twice_alt_flag = false;
            }
            break;

            default:
            break;
        }
    }


    // handle Control + key
    this.control = function( char )
    {
        switch( char )
        {
            // clear the screen
            case 'l':
            screen.clear()
            screen.prompt( path.get() );
            screen.add( 'SPAN', 'row', screen.line_buffer );
            screen.cursor();
            screen.newline();

            // set init.js
            if( enable_log )
            {
                console.log( 'clear the screen with Control + L' );
            }
            break;

            // print help, equivalent to type: help
            case 'h':
            command.help();

            screen.hide_cursor();
            screen.prompt( path.get() );
            screen.add( 'SPAN', 'row' );
            screen.cursor();
            screen.newline();

            // remove the guide on the screen, if it is the first time
            var guide = doc.class( 'guide' )[ 0 ];
            if( guide !== undefined )
            {
                doc.id( 'terminal' ).removeChild( guide );
            }
            break;

            default:
            break;
        }
    }

    this.shift = function( char )
    {

    }


    this.ls = function()
    {
        var size  = 0;
        var cwd   = path.cwd();
        var files = path.root[ cwd ];
        var width = window.innerWidth;
        var file;

        for( file in files )
        {
            var name = file + '    ';
            size += ( name.length * screen.char_width );
            if( size > width )
            {
                screen.newline();
                size = 0;
            }
            // first arg is a string and second is a class-name to colorize the output
            text( name, path.root[ cwd ][ file ] );
        }

        if( file !== undefined )
        {
            screen.newline();
        }

    }

    this.cd = function( arg )
    {
        var cwd = path.cwd();
        switch( arg )
        {
            // if the cd has not argument
            case undefined:
            break;

            case '~':
            path.pwd = [ 'home', 'Shakiba' ];
            break;

            case '/':
            text( "cd: / Permission denied" );
            screen.newline();
            break;

            case '.':
            break;


            case '..':
            // if the last index of pwd equals "Shakiba", then we do not have
            // permission to go further, it is just a dummy
            if( cwd === 'Shakiba' )
            {
                text( "cd: " + path.pwd[ 1 ] + "/: Permission denied" );
                screen.newline();
            }
            else
            {
                // now we are not in the home directory and thus we can go back
                path.pwd.pop();
            }
            break;

            default:
            if( path.root[ cwd ][ arg ] === 'directory' && arg in path.root[ cwd ] )
            {
                path.pwd.push( arg );
            }
            else
            {
                text( 'cd (' + arg + ') No such file or directory' );
                screen.newline();
            }

            break;
        }

    }

    this.clear = function()
    {
        screen.clear()

        screen.prompt( path.get() );
        screen.add( 'SPAN', 'row' );
        screen.cursor();
        screen.newline();

        if( enable_log )
        {
            console.log( 'clear the screen with clear command' );
        }

    }

    this.df = function()
    {
        var df =
	        [
	            'Filesystem     1K-blocks     Used Available Use% Mounted on',
	            'udev             1011376        0   1011376   0% /dev',
	            'tmpfs             206316     8956    197360   5% /run',
	            '/dev/sda3      196730180 25927424 160786400  14% /',
	            'tmpfs            1031568      596   1030972   1% /dev/shm',
	            'tmpfs               5120        4      5116   1% /run/lock',
	            'tmpfs            1031568        0   1031568   0% /sys/fs/cgroup',
	            'tmpfs             206316       60    206256   1% /run/user/1000'
	        ];

        var index_max = df.length;
        while( index_max-- )
        {
            text( df[ 7 - index_max ] );
            screen.newline();
        }
    }

    this.cat = function( arg )
    {
        var redirect = false;
        if( arg.indexOf( '&gt;' ) != -1 )
        {
            redirect = true;
            arg = arg.substr( arg.indexOf( '&gt;' ) + 4, arg.lenght ).trim();
        }
        else
        {
            arg = arg.trim();
        }
        var cwd = path.cwd();

        if( arg in path.root[ cwd ] )
        {
            if( path.root[ cwd ][ arg ] === 'readable' )
            {
                if( redirect === true )
                {
                    //write();
                }
                else
                {
                    read( path.readable[ cwd ][ arg ] );
                    //text( 'read: ' + 'in ' + cwd + ' ' + path.readable[ cwd ] )
                    //screen.newline();
                }
            }
            else
            {
                text(  arg + ' is a ' +  path.root[ cwd ][ arg ] + ' and NOT readable' )
                screen.newline();
            }
        }
        else
        {
            text(  '(' + arg + ') was not found in ' + cwd + ' directory' )
            screen.newline();
        }
    }

    this.history = function()
    {
        var length = this.histories.length;

        if( length > 0 )
        {
            var index = 0;
            while( index < length )
            {
                text( ( index + 1 ) + ': ' + this.histories[ index ] );

                screen.newline();
                ++index;
            }
        }
    }

    this.ii = function()
    {
        screen.add( 'IMG', 'gif' );

        var gif = doc.class( 'gif' );
        gif[ gif.length -1 ].src = './Pictures/ii.gif';

        screen.newline();
    }

    this.help = function()
    {
        var h =
	        [
                'cmd:     arg:     des:',
                '......................',
	            'ls       No       list files and directories' ,
                'cd       Yes      navigation between directories',
                'bc       Yes      set/reset background color',
                'fs       Yes      set/reset font size',
                'df       No       dumpy file-system report',
                'ii       No       Internet of Iran',
                'cat      Yes      read the contents of a file',
                'pwd      No       print current path',
                'echo     Yes      echos its arguments',
                'date     No       print date in GMT',
                'help     No       print (this) help',
                'open     Yes      open a meida',
                'clear    No       clear the screen',
                'history  No       print all entered commands',
                '',
                'some key bindings:',
                '..................',
                'Control + l    : clear the screen',
                'Control + h    : print help',
                'Alter   + l    : enable/disable console.log()',
                'Alter   + g    : open my account on github',
                'Alter   + s    : open my account on stack-overflow',
                'Alter   + r    : open source code of the application',
                "Alter   + d-s  : print my skill    | cd Documents; cat skill",
                "Alter   + d-p  : print my project  | cd Documents; cat project",
                "Alter   + d-a  : print about-me | cd Documents; cat about-me",
	        ];

        var length = h.length;
        var index = 0
        while( index < length  )
        {
            text( h[ index ] );
            screen.newline();
            ++index;
        }

        var guide = doc.class( 'guide' )[ 0 ];
        if( guide !== undefined )
        {
            doc.id( 'terminal' ).removeChild( guide );
        }
    }

    function text( string, class_name = "text" )
    {
        var span = document.createElement( 'SPAN' );

        var contents = document.createTextNode( string );
        span.appendChild( contents );

        doc.id( 'terminal' ).appendChild( span );
        span.classList.add( class_name );
    }

    function read( contents )
    {
        var length = contents.length;
        var index = 0;

        while( index < length )
        {
            text( contents[ index ] );
            screen.newline();
            ++index;
        }
    }
}
