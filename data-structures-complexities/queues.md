# Queues

A summary of the complexities with the bevy of operations that can be carried out on this data structure.

## Operations

Below are the possible operations on the data store. Here's the cheatsheet for a big picture view.

### Queue

> **O(1)**

Since it requires that new elements be appended to the end, there's no need to first traverse the length of the array.

### Dequeue

> **O(1)**

It requires that the **first** element be removed from the beginning of the array, it never affects the rest of the elements.
