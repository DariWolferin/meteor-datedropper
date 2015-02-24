DateDropper - packaged for meteor
============================
A Meteor package wrapper of [DateDropper](http://bit.ly/17ab6dt), Felice Gattuso's excellent jQuery
 plugin that provides a quick and easy way to manage dates for input fields.



Meteor Installation
-------------------
In a Meteor app directory, enter:
```
meteor add bjimdar:datedropper
```


Meteor Usage
------------
DateDropper extends any input form field of type="text" to allow date formatting.

Since dateDropper is a jQuery plugin, typically you would call it in the rendered
 callback of your template. Use a jQuery css-style selector string to select
 the controls you want to enable dateDropper on.

**Note**: using `this.$()` is an optimization in Meteor projects that will cause 
jQuery to only search this template for selector matches.
This can be quite a bit faster then using $() which will search the entire DOM.

```js
Template.foo.rendered = function() {
  this.$("#input-text").dateDropper();
}
```


Options
-------

You can specify options to customize dateDropper on the initial 
 dateDropper function call as follows:

```js
  var options = {           
    format:"m/d/Y",                     
    placeholder: "choose date...",
  };

  $( ".date-field-selector" ).dateDropper(options);

```


The following options can be passed in to the dateDropper call:

## format
   
A date format string that dateDropper expects existing values to be 
in and will write dates out it. 
  
###Format String codes:

Code | Description             | Example        
:---:| ---                      | ---
M    | Short month              | `"Jan" .. "Dec"`
F    | Long month               | `"January" .. "December"`
m    | Numeric month            | `"01", "02" .. "12"`)
n    | Non-padded numeric month | `"1" .. "12"`
Y    | Long numeric year        | `"2015"`
d    | Padded numeric day       | `"01", "02" .. "31"`
j    | Non-Padded Numeric day   | `"1", "2" .. "31"`
D    | Short day-of-week        | `"Sun" .. "Sat"`
l    | Long day-of-week         | `"Sunday" .. "Saturday"`


###Format String Examples:

Example           | Output                   | Description        
:---              | ---                      | ---
"m-d-Y"    | "04/01/2001"           | Default format
"m"        | "04"                   | specifying "m" by itself will cause day and year controls to be hidden
"Y"        | "2001"                 | specifying "Y" by itself will cause day and Month controls to be hidden
"M j, Y"   | "Apr 1, 2001"          | Space and commas ok to use
"l F j, Y" | "Sunday April 1, 2001" | Nice long format
"n/j/Y"    | "4/1/2001"             | No-padding. Slashes ok

  
## lang

Display Language to use for Month name and Day-of-week


* `en` - English (default)
* `it` - Italian
* `hu` - Hungarian
* `es` - Espanol
* `de` - Deustche
* `nl` - Dutch
* `fr` - Francais
* `pt` - Portuguese
* `si` - Slovenian



## placeholder
A text value to insert into text input when no value is set.
Default value is `"Select date"`.

## minYear
The oldest year the control will allow.  

Default value is `1970`.

## maxYear
The highest year value the control will allow.  

Default value is current year.

## animation
Animation Style to use when changing dates.There are three available animation values:

  * `fadein` - Default
  * `bounce`
  * `dropdown`


## color
Specify a color value for drop down accent color. 
Default is orange (`#f87a54`)

For more customization, overwrite css styles specified in `datedropper.css`.


## years_multiple
What in the world does this do?
Default: false.


## animate_current
When set to true (default) the dropdown will run an initial state animation when
 the user clicks the control for the first time. 

## lock

lock option    | Description                   
:---           |:---                      
`lock=false`   | Nothing locked. Default.
`lock="from"`  | Set the *initial* value to current date.
`lock="to"`    | Lock the control value to current date.




###About datedropper###
[http://felicegattuso.com/projects/datedropper/](http://bit.ly/17ab6dt)

[Mit License](http://opensource.org/licenses/mit-license.html)

[CC 4.0](http://creativecommons.org/licenses/by/4.0/)
