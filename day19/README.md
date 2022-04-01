# Day 19

## Learning about Emmet shortcut in VS Code!

My command keyboard shortcut for using Emmet Wrap Abbreviation is 
```
⌘W ⌘K
```

Some codes/examples used in learning Emmet by [Web Dev Simplified Emmet in 15min](https://www.youtube.com/watch?v=V8vizNQKtx0)

```HTML
div.container>nav>ul>li.list-item$*5

<div class="container">
        <nav>
            <ul>
                <li class="list-item1"></li>
                <li class="list-item2"></li>
                <li class="list-item3"></li>
                <li class="list-item4"></li>
                <li class="list-item5"></li>
            </ul>
        </nav>
    </div>

div#page>div.logo+ul#navigation>li*5>a{Item $}

<div id="page">
        <div class="logo"></div>
        <ul id="navigation">
            <li><a href="">Item 1</a></li>
            <li><a href="">Item 2</a></li>
            <li><a href="">Item 3</a></li>
            <li><a href="">Item 4</a></li>
            <li><a href="">Item 5</a></li>
        </ul>
    </div>
```

## Knowledge Check
- Why should you use Emmet?

Should use Emmet due to its fast nature of creating multiple HTML/CSS elements. 

- What are some useful Emmet abbreviations?

Some useful abbreviations are using the **"!"** symbol to create a whole DOCTYPE in beginning of HTML.

- What syntax would you use to create this element <p class="text"></p>?

p.text

- What syntax expands to an element with a child element inside of it? For example: <div><p></p></div>

The **>** symbol like div>p

- What syntax would you use to create three elements that have the same class name?

Use the **$** symbol.
Example: nav>ul>li.item-list*3{Item List $}