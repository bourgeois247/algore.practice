# Linked Lists

A summary of the complexities with the bevy of operations that can be carried out on this data structure.

## Operations

Below are the possible operations on the data store. Here's the cheatsheet for a big picture view.

### Prepend

> **O(1)**

It does not require the other elements to re-adjusted in anyway, since only the inserted element needs to register the presence of the second node.

### Append

> **O(1)**

It does not require the other elements to re-adjusted in anyway, since only the last element needs to register the presence of the last node.

### Insert

> **O(n)**

In the worst case, you'd have to traverse the whole list to figure out the exact point to insert a new item.

### Delete

> **O(n)**

It requires traversing the entire list to find the value to delete.

### Lookup

> **O(n)**

It requires traversing the entire list to find the value
