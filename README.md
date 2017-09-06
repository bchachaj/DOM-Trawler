# Dom Trawler -


### Usage

Add ./lib/dom-trawler.js as a script in your program.

`<script type="text/javascript" src=".lib/dom-trawler.js" charset="utf-8"></script>`

### API

* #### $l.ajax()

  Performs an asynchronous HTTP request.

* #### $l(htmlElement)

  `Wrap an html in a Trawler object, making it available to library API`

* #### $l.create(string)

 `Creates an html tag with the passed in string`


### DOM Traverser API

* #### html()

  - without arguments

    `Returns the inner html of the first element of each matched collection`

  - with arguments

    `Sets the inner html of every matched element`

* #### value()

  - without arguments

    `Returns the value of the first element of each matched element`

  - with arguments

    `Sets the value of every matched element`

* #### empty()

     `Deletes inner html of element from the DOM`

* #### append(args)

  - When arg is an element in the DOM

    `Removes element from DOM and appends as a child to selected collection`

  - When arg is a string or HTML Element

    `Appends as a child to each element in the collection


* #### attr(name, value)

  - With a single argument

    `Gets the value of the specific argument in the first element in the collection`

  - With a values argument

    `Sets the value of every matched element in the collection`


* #### addClass(value)

    `Sets the class of each matched element in the collection of elements`

* #### removeClass()

  `Removes the class(es) from every matched element in the collection of elements`

  * #### parent()

  `Returns the parent in the collection of matched elements`

* #### children()

  `Returns the children in the collection of matched elements`


* #### find(selector)

  `Returns descendants of each element in the currently matched collection`

* #### remove()

  `Removes all the matched elements from the DOM`

* #### on(eventHandler, callback)

  `Attaches an event handler function to the selected elements`

* #### off(eventHandler)

  `Remove an event handler from the selected elements`
