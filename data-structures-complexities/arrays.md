# Arrays

A summary of the complexities with the bevy of operations that can be carried out on this data structure.

## Operations

Below are the possible operations on the data store. Here's the cheatsheet for a big picture view.

### Push

> **O(1)**

Since it requires that new elements be appended to the end, there's no need to first traverse the length of the array.

### Pop

> **O(1)**

It requires that the last element be removed from the end of the array, it never affects the rest of the elements.

### Unshift

> **O(n)**

Unshift prepends an element to an array, which in turn means every element in the array will have it's index recalculated, hence the O(n).

Also no need to traverse the length of the array.

### Shift

> **O(n)**

Removes an item from the begining of an Array. Elements have their indices recalculated as well.

### Splice

> **O(n)**

In it's best case, it appends to the end of the array, which gives it O(i). In the worst case(which we're considering), it appends to the begining, and is essentially at par with`unshift`.

### Binary Search

> **O(logn)**

`NB: In general, logx essentially means, what power do we raise the base(assume base 2) to, to get **x**?`

Only viable on sorted arrays. The question here is how many times do we have to divide the array to find the number/element. after the first pass:

- we're only looking at half of the original array,
- after that, we're looking at a quater,
- up until we get to **1** element in the array.

In essence,

```
((n / 2)/2)/2 ... = 1

/*
 * x being the arbitrary number of times we need to divide the original number,
 * which directly correlates to the time complexity of the operation
 */

=> n(1/2)^x = 1
=> n(1^x/2^x) = 1
=> n(1/2^x) = 1
=> n = 2^x
=> logn = xlog2

// it's base 2, so log2 => 1

=> x = logn
```

### Sort

> **O(nlogn)**

Using Merge Sort as the reference algorithm, it's a concept similar to Binary Search, where the array is divided until there's just 1 element in the array.

We already know from the above, that this takes O(logn) time. The second part of the operation is to merge
both halves into 1.

[This](https://stackoverflow.com/a/48017027/2295321) answer on Stackoverflow does a good job of explaining this.
[This](https://www.toptal.com/developers/sorting-algorithms) visualizer is pretty useful.

The tree will look like this for **n** items

```
0      [n]
      /   \
1 [n/2]   [n/2]

j [n/2^j] x n
```

In other words, each level of the tree will have a node with the value `[n/2^j]`. Since the major work each node does is merge two pre-sorted arrays, it's complexity is given as `O(n/2^j)`. We can then find the total complexity by adding up the complexities of the total number of nodes. To simplify the process, we find the sum of complexities at each level and then multiply the total number of levels:

```
O(Total) = O(height of tree(j) x total number of nodes on a level(2^j) * n/2^j)
         = O(height of tree(j) x n)
```

Consequently, it's proven that each layer processes **n** items in linear(O(n)) time. So our total complexity becomes O(j\*n). But we need to express j in terms of n.

```
We know 2^j = n
// if we take log of both sides

log(2^j) = logn

// since we're in base 2
j = logn

// finally, our complexity becomes
O(nlogn)
```
