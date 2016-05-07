# Bootstrap 4

## Containers

```html
<div class="container">
  <!-- Content here -->
</div>

<div class="container-fluid">
  ...
</div>
```

## Responsive breakpoints

```scss
// Small devices (landscape phones, 34em and up)
@media (min-width: 34em) { ... }

// Medium devices (tablets, 48em and up)
@media (min-width: 48em) { ... }

// Large devices (desktops, 62em and up)
@media (min-width: 62em) { ... }

// Extra large devices (large desktops, 75em and up)
@media (min-width: 75em) { ... }
```

We occasionally use media queries that go in the other direction (the given screen size or smaller):

```scss
// Extra small devices (portrait phones, less than 34em)
@media (max-width: 33.9em) { ... }

// Small devices (landscape phones, less than 48em)
@media (max-width: 47.9em) { ... }

// Medium devices (tablets, less than 62em)
@media (max-width: 61.9em) { ... }

// Large devices (desktops, less than 75em)
@media (max-width: 74.9em) { ... }

// Extra large devices (large desktops)
// No media query since the extra-large breakpoint has no upper bound on its width
```

## Display Heading

```html
<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-4">Display 4</h1>
```

## Responsive images

```html
<img src="..." class="img-fluid" alt="Responsive image">
```

## Image shapes

```html
<img src="..." alt="..." class="img-rounded">
<img src="..." alt="..." class="img-circle">
<img src="..." alt="..." class="img-thumbnail">
```

## Aligning images

```html
<img src="..." class="img-rounded pull-xs-left" alt="...">
<img src="..." class="img-rounded pull-xs-right" alt="...">
<img src="..." class="img-rounded center-block" alt="...">
```

OR

```html
<div class="text-xs-center">
  <img src="..." class="img-rounded" alt="...">
</div>
```

## Table

```css
// table container
.table-responsive

// table
.table
.table-inverse
.table-striped
.table-bordered
.table-hover
.table-sm
.table-reflow


// thead
.thead-inverse
.thead-default
```

## Contextual classes

```html
<!-- On rows -->
<tr class="table-active">...</tr>
<tr class="table-success">...</tr>
<tr class="table-warning">...</tr>
<tr class="table-danger">...</tr>
<tr class="table-info">...</tr>

<!-- On cells (`td` or `th`) -->
<tr>
  <td class="table-active">...</td>
  <td class="table-success">...</td>
  <td class="table-warning">...</td>
  <td class="table-danger">...</td>
  <td class="table-info">...</td>
</tr>
```

















