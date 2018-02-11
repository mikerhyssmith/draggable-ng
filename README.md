# draggable-ng
🖯 Angular wrapper for [@shopify/draggable](https://github.com/Shopify/draggable)


_This is a very early alpha build not suitable for production use_

---
## Usage

### Draggable

```html

<draggable options=options (onDragEvent)=onDragEvent($event) (onMirrorEvent)=onMirrorEvent($event)>
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

Mirror events and drag events are emitted on separate event emitters and each emits an Object of the form
```javascript
{
  eventType
  event
}
```
Where event type is from the [list of events](https://github.com/Shopify/draggable/tree/master/src/Draggable#events)


### Droppable
Coming soon ....
