# draggable-ng
🖯 Angular wrapper for [@shopify/draggable](https://github.com/Shopify/draggable)


_This is a very early alpha build not suitable for production use_

## Usage

```html

<draggable options=options>
  <ul draggable-container>
    <li class="draggable-source">Bread</li>
    <li class="draggable-source">Eggs</li>
    <li class="draggable-source">Milk</li>
  </ul>

  <ul draggable-container>
    <li class="draggable-source">Chicken</li>
    <li class="draggable-source">Beef</li>
    <li class="draggable-source">Pastrami</li>
  </ul>
</draggable>
```
Where options is an instance of [Draggable Options](https://github.com/Shopify/draggable/tree/master/src/Draggable#options).
