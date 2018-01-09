![banner](https://github.com/k-five/red-cursor/blob/master/pngs/banner.gif)  
  
A simple, but still beautiful **Terminal Emulator**.  
This is an app with pure `JavaScript`, `HTML` and `CSS`.  
[Live-Demo](https://k-five.github.io/)  


![1](https://github.com/k-five/red-cursor/blob/master/pngs/red-cursor.1.png)  
 - Tab completion  
 - Cursor movement  
   - Home  
   - End  
   - Left-arrow  
   - Right-arrow  
 - History Navigation  
   - Up-arrow  
   - Down-arrow  
 - Modify line  
   - Backspace  
   - Delete  
 - Special Key  
   - Alt  
   - Ctrl  
   - Shift  


![2](https://github.com/k-five/red-cursor/blob/master/pngs/red-cursor.2.png)  
I was looking for a good style for my personal website so that I can put my resume on it. And although  
there were a lot of good sites and especially free-templates and web-site-builder(s), eventually I came  
up with this idea that I should create an application; looks line my **terminal emulator** since almost  
I use `CLI` and not `GUI`  


![3](https://github.com/k-five/red-cursor/blob/master/pngs/red-cursor.3.png)  
Apart from designing it for myself, I tried to make it more useful for someone; who wants to learn `JS`  
and `CSS` and `HTML` deeply.  
The app is based on 3 core things:  
 1. `span` tag and `br` tag in HTML  
 2. **animation** in `CSS  
 3. **DOM** modification with JavaScript`  


![4](https://github.com/k-five/red-cursor/blob/master/pngs/red-cursor.4.png)  
The most interesting part of the app is **cursor movement** which is based on `animation` and asynchronous  
nature in `CSS`. Also modifying the **innerHTML** of a tag (= line) is a little tricky so that users can feel  
that they are encountered a real **Terminal Emulator** which in Linux it is usually down by **readlihne** library.  


![5](https://github.com/k-five/red-cursor/blob/master/pngs/red-cursor.5.png)  
 1. Full documentation on each step/line of the code.  
 2. Separate the main function (= main.js) form other parts so you can see how it works.  
 3. Key-binding to toggle `console.log` **on**/**off** so you easily can see what is going on.  


![6](https://github.com/k-five/red-cursor/blob/master/pngs/red-cursor.6.png)  

<table>
    <tr>
      <th>Name</th>
      <th>Argument</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>ls</td>
      <td>Yes</td>
      <td>list files and directories</td>
    </tr>
    <tr>
      <td>cd</td>
      <td>No</td>
      <td>navigation between directories</td>
    </tr>
    <tr>
      <td>bc</td>
      <td>Yes</td>
      <td>set/reset background color</td>
    </tr>
    <tr>
      <td>fs</td>
      <td>Yes</td>
      <td>set/reset font size</td>
    </tr>
    <tr>
      <td>df</td>
      <td>No</td>
      <td>dummy file-system report</td>
    </tr>
    <tr>
      <td>ii</td>
      <td>No</td>
      <td>Internet of Iran</td>
    </tr>
    <tr>
      <td>cat</td>
      <td>Yes</td>
      <td>read the contents of a file</td>
    </tr>
    <tr>
      <td>pwd</td>
      <td>No</td>
      <td>print current path</td>
    </tr>
    <tr>
      <td>echo</td>
      <td>Yes</td>
      <td>echos its arguments</td>
    </tr>
    <tr>
      <td>date</td>
      <td>No</td>
      <td>print date in GMT</td>
    </tr>
    <tr>
      <td>help</td>
      <td>No</td>
      <td>print (this) help</td>
    </tr>
    <tr>
      <td>open</td>
      <td>Yes</td>
      <td>open a meida</td>
    </tr>
    <tr>
      <td>clean</td>
      <td>No</td>
      <td>clear the screen</td>
    </tr>
    <tr>
      <td>history</td>
      <td>No</td>
      <td>print all entered commands</td>
    </tr>
</table>

<hr>

I deeply appreciate  
 1. [tutorialspoint](https://www.tutorialspoint.com/) for its simple-to-learn e-books.  
 2. [w3schools](https://www.w3schools.com/) for its short-and-sweet examples.  
 3. [MDN web doc](https://developer.mozilla.org/en-US/) for its good documentation and examples.  

<hr>


### LICENSE  
MIT License  
