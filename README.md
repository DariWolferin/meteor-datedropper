datedropper
===========
Brian's Meteor package wrapper of *DateDropper*, Felice Gattuso's excellent jQuery
 plugin that provides a quick and easy way to manage dates for input fields.

```
meteor add bjimdar:datedropper
```


###Meteor Usage###

```js
  $('.any-text-input-selector').dateDropper();
```


###Options###

```js
  var options = {           
    format:'m/d/Y',         
    lang: 'en',             
    placeholder: 'select date',
    minYear: 1970,
    maxYear: 2016,              //default is none
    animation: 'fadein',
    color: '#f87a54',
    years_multiple: 10,         //default is 1
    animate_current: true,
    lock: 'from'
  };

  $( ".any-text-input-selector" ).dateDropper(options);

```


#Options#
The following options can be passed in to the dateDropper call:

## format
   
A date format string that dateDropper expects existing values to be 
in and will write dates out it. 
  
###Format String codes:

Code | Description             | Example        
:---:| ---                      | ---
`M`  | Short month              | `'Jan' .. 'Dec'`
`F`  | Long month               | `'January' .. 'December'`
`m`  | Numeric month            | `'01', '02' .. '12'`)
`n`  | Non-padded numeric month | `'1' .. '12'`
`Y`  | Long numeric year        | `'2015'`
`d`  | Padded numeric day       | `'01', '02' .. '31'`
`j`  | Non-Padded Numeric day   | `'1', '2' .. '31'`
`D`  | Short day-of-week        | `'Sun' .. 'Sat'`
`l`  | Long day-of-week         | `'Sunday' .. 'Saturday'`


###Format String Examples:

Example           | Output                   | Description        
:---              | ---                      | ---
format='m-d-Y'    | `"04/01/2001"`           | Default format
format='m'        | `"04"`                   | specifying 'm' by itself will cause day and year controls to be hidden
format='Y'        | `"2001"`                 | specifying 'Y' by itself will cause day and Month controls to be hidden
format='M j, Y'   | `"Apr 1, 2001"`          | Space and commas ok to use
format='l F j, Y' | `"Sunday April 1, 2001"` | Nice long format
format='n/j/Y'    | `"4/1/2001"`             | No-padding. Slashes ok

  
## lang

Display Language to use. Default is `en` for US-English

Possible Options:
Code  | Language                   
:---: |:---                      
en    | English
it    | Italian
hu    | hungarian
es    | espanol
de    | deustche
nl    | dutch
fr    | francais
pt    | portuguese
si    | slovenian



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
