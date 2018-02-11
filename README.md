# draggable-ng
🖯 Angular wrapper for [@shopify/draggable](https://github.com/Shopify/draggable)


_This is a very early alpha build not suitable for production use_

---
## Usage

Include the Draggable Module in one of your apps modules.

```javascript
import { DraggableModule } from 'draggable-ng/dist/draggable.module';

@NgModule({
  imports: [ DraggableModule ]
})
```

### Draggable

``` javascript
import { Component } from '@angular/core';
import { DraggableOptions } from 'draggable-ng/dist/model/draggable-options';

@Component({
  selector: 'some-component',
  templateUrl: './some.component.html'
})
export class SomeComponent {
  options = new DraggableOptions();

  onDragEvent(event) {
    console.log(event);
  }

  onMirrorEvent(event) {
    console.log(event);
  }
}
```

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
  type
  event
}
```
Where event type is from the [list of events](https://github.com/Shopify/draggable/tree/master/src/Draggable#events)


### Droppable

``` javascript
import { Component } from '@angular/core';
import { DraggableOptions } from 'draggable-ng/dist/model/draggable-options';

@Component({
  selector: 'some-component',
  templateUrl: './some.component.html'
})
export class SomeComponent {
  options = new DraggableOptions( {
    draggable: 'li',
    droppable: '.dropzone',
  });

  onDragEvent(event) {
    console.log(event);
  }

  onMirrorEvent(event) {
    console.log(event);
  }

  onDropEvent(event) {
    console.log(event);
  }
}
```

```html

<droppable options=options (onDragEvent)=onDragEvent($event) (onDropEvent)=onDropEvent($event) (onMirrorEvent)=onMirrorEvent($event)>
  <ul draggable-container>
    <li class="draggable-source">Bread</li>
    <li class="draggable-source">Eggs</li>
    <li class="draggable-source">Milk</li>
  </ul>

  <ul draggable-container class="dropzone">
    <li class="draggable-source">Chicken</li>
    <li class="draggable-source">Beef</li>
    <li class="draggable-source">Pastrami</li>
  </ul>
</droppable>
```
Where options is an instance of [Draggable Options](https://github.com/Shopify/draggable/tree/master/src/Draggable#options).

Mirror, drag and drop events are emitted on separate event emitters and each emits an Object of the form
```javascript
{
  type
  event
}
```
Where event type is from the [list of drag events](https://github.com/Shopify/draggable/tree/master/src/Draggable#events) or the [list of drop events](https://github.com/Shopify/draggable/tree/master/src/Droppable#events)
