#cs #cs210 #OOP #java 

# Making An Iterator

Your Iterator needs:

- To implement Iterator \<Element>
- A cursor of some kind to keep track of where it is
- A hasNext() that returns true if there are more elements, false otherwise
- A next() method that returns the next ElementType, and moves the cursor along

The home made iterator for your collection must be a private inner class. Because the Iterator code needs access to the private data field inside your class.

In essence, we can make our own iterators for our own collections, this iterator is implemented as an inner class of the collection so that it can access it's private fields, this custom iterator implements the iterator interface methods, and is parameterised with the type of element over which it iterates

This iterator has the skeleton:

```java
private class CustomIterator<TheElement> implements Iterator<TheElement> {  
    
    private Placeholder cursor;  
  
    @Override  
    public boolean hasNext() {  
        //check if the collection has any elements left to iterate over  
        //based on the location of the cursor    }  
  
    @Override  
    public TheElement next() {  
        //increments the cursor appropriately  
        //return the element at the cursor    }  
}
```

For example, in the ToyStore lecture lab problem, 

```java 
package model;

  

import java.util.ArrayList;

import java.util.Collection;

import java.util.Iterator;

  
  

public class Inventory implements Iterable<Toy> {

	private Collection<Toy> toys = new ArrayList<>();
	
	private Collection<Toy> backlog = new ArrayList<>();
	
	private ArrayList<String> log = new ArrayList<>();
	
	  
	
	// getters
	
	public int getSize() { return toys.size(); }
	
	  
	
	public void add(Toy t) {
	
		toys.add(t);
		
		log.add("New toy added: "+t);
	
	}
	
	  
	
	public void remove(Toy t){
	
		toys.remove(t);
		
		log.add("Toy "+t+" removed");
	
	}
	
	  
	  
	
	public void printQueryStats(){
		
		for(String logEntry : log){
		
			System.out.println(logEntry);
		
		}
	
	}
	
	  
	
	public void moveToBacklog(Toy toy) {
	
		toys.remove(toy);
		
		backlog.add(toy);
	
	}
	
	  
	
	@Override
	
	public Iterator<Toy> iterator() {
	
		return new InventoryIterator();
	
	}
	
	  
	
	private class InventoryIterator implements Iterator<Toy> {
	
	  
	
		Iterator toysIterator = toys.iterator();
		
		Iterator backlogIterator = backlog.iterator();
		
	  
	
	@Override
		
		public boolean hasNext() {
		
		return toysIterator.hasNext() || backlogIterator.hasNext();
		
		}
	
	  
	
	@Override
	
		public Toy next() {
		
			Toy toy = null;
		
			if (toysIterator.hasNext()) {
			
				toy = (Toy) toysIterator.next();
			
			} else {
			
				toy = (Toy) backlogIterator.next();
			
			}
			
			return toy;
		
		}
	
	}
	
	  
  

}
```

We similarly, first implement the iterable interface and specify which element type we will be iterating over, then implement the iterator() method. HOWEVER, this time, we are instead calling Inventory.Iterator() which is NOT a default standard iterator, so we need to define it in an ==inner private class==, this private inner class will have some cursor as stated earlier, in this case we can just use the toys and back log iterators, then we need to implement our hasNext() and next() methods.


## Some Problems

First, commit to memory this information:

Recall that the `Iterable<E>` interface specifies the following method:

```java
// EFFECTS: returns an iterator 
Iterator<E> iterator()
```

So, when our out class implements Iterable\<Element> we then need to implement this method:

```java
public Iterator<Element> iterator() {
	return someIterator()
}
```

Now, if someIterator is a primitive iterator, that is if our class has a field like:

```java
private ArrayList<String> strings;
```

then we can simply return a `strings.iterator()` iterator. BUT if this is not the case, and our class instead has a field such as
```java
private List<Integer> data;

```

then we actually need to ==implement our own advanced iterator==, we can do this by creating an ==inner private class== that ==implements Iterator\<E>==. NOTE THIS IS DIFFERENT FROM IMPLEMENTING Iterable\<E>. 

Now that the `Iterator<E>` interface implemented by our inner private class specifies the following methods that must be implemented:

```java
// EFFECTS: returns true if there is a next element in the iteration.
boolean hasNext();

// MODIFIES: this
// EFFECTS: returns next element in the iteration;
//          throws NoSuchElementException if there is no such element
E next();
```

NOTE, this private class MUST also have some kind of cursor field, that is a field that can keep track of its place in the collection that it is iterating over, in easier problems this cursor ==can be another primitive iterator==. However, in other problems we need to be a little more creative.

For example, take this problem:

Use the editor window below to modify the design of the `IntegerList` class so that the following code prints the integers added to the list in _reverse_ order:

```java 
IntegerList myList = new IntegerList();  
myList.add(6);  
myList.add(5);  
myList.add(2);  
  
for (Integer next : myList) {  
	System.out.print(next);  
	System.out.print(" ");  
}
```

Expected output: `2 5 6`

We are given the following IntegerList class:

```java
package model;

import java.util.*;

public class IntegerList {
    private List<Integer> data;

    public IntegerList() {
        data = new ArrayList<>();
    }

    public void add(Integer value) {
        data.add(value);
    }

    public int size() {
        return data.size();
    }




}
```

So, how do we make it so we can first iterate over the list, but also iterate in reverse??

### Steps

1. Implement Iterable\<Integer>
2. Create a new iterator() method:

```java
public Iterator<Integer> iterator() {
	return new ReverseIterator();
}
```

3. Now, because this is not a primitive iterator, we need to now create a *private inner class* called ReverseIterator that implements Iterator\<Integer>:

```java
private class ReverseIterator implements Iterator<Integer> {

	private int cursor; // a list index
	
	//constructor (initialize the cursor)
	public ReverseIterator() {
		cursor = data.size() - 1; // assume the list has at least 1 element
	}
	
	@Override
	public boolean hasNext() {
		return cursor >= 0; // if not at start -> still elements
	}
	
	@Override
	// note the return type is Integer because thats what we specified above
	public Integer next() {
		if (!hasNext()) {
		throw new NoSuchElementException()
		}
		return data.get(cursor--);
	}

}
```

## A Different Approach

This was my first solution to this problem, it is a bit silly and I don't think its what they exactly want, but I think its a good example of using a primitive iterator as a cursor.


```java
package model;

import java.util.*;

public class IntegerList implements Iterable<Integer> {
    
    private List<Integer> data;

    public IntegerList() {
        data = new ArrayList<>();
    }

    public void add(Integer value) {
        data.add(0, value);
    }

    public int size() {
        return data.size();
    }
    
    public Iterator<Integer> iterator() {
        return new IntegerListIterator();
    }
    
    private class IntegerListIterator implements Iterator<Integer> {
        
        Iterator dataIterator = data.iterator();
        
        public boolean hasNext() {
            return dataIterator.hasNext();
        }
        
        public Integer next() throws NoSuchElementException {
            if (dataIterator.hasNext()) {
                return (Integer) dataIterator.next();
            } else {
                throw new NoSuchElementException();
            }
        }
        
    }
}
```

Basically, because data is just an ArrayList, we can just use it's primitive iterator in our hasNext and next methods. One issue with this is that because dataIterator.next() returns an int I had to cast it to type Integer. Also, I'm not sure if this is cheating (probably is), but I changed the add method so new elements are always added to the start of the list, thus it doesn't need to be reversed.

## Another Problem

```java
// Represents a restaurant having a list of take-out orders and a list
// of in-house orders
public class Restaurant implements Iterable<Order> {
    private List<Order> takeOutOrders;
    private List<Order> inHouseOrders;

    // EFFECTS: constructs restaurant with empty lists of in-house and take-out orders
    public Restaurant() {
        takeOutOrders = new ArrayList<>();
        inHouseOrders = new ArrayList<>();
    }

    // MODIFIES: this
    // EFFECTS: adds takeOutOrder to this restaurant
    public void addTakeOutOrder(Order takeOutOrder) {
        takeOutOrders.add(takeOutOrder);
    }

    // MODIFIES: this
    // EFFECTS: adds inHouseOrder to this restaurant
    public void addInHouseOrder(Order inHouseOrder) {
        inHouseOrders.add(inHouseOrder);
    }

    @Override
    public Iterator<Order> iterator() {
        return new OrderIterator();
    }

    // An iterator over orders
    private class OrderIterator implements Iterator<Order> {
        private int takeOutIndex;
        private int inHouseIndex;

        public OrderIterator() {
            takeOutIndex = 0;
            inHouseIndex = 0;
        }

        @Override
        public boolean hasNext() {
            return takeOutIndex < takeOutOrders.size()
                    || inHouseIndex < inHouseOrders.size();
        }

        @Override
        public Order next() {
            // Case: we haven't exhausted either list
            if (takeOutIndex < takeOutOrders.size()
                    && inHouseIndex < inHouseOrders.size()) {
                // Compare order numbers for next item in each list, return the order
                // with the smallest order number and increment corresponding index
                if (takeOutOrders.get(takeOutIndex).getOrderNum()
                        < inHouseOrders.get(inHouseIndex).getOrderNum()) {
                    // x++ increments x but evaluates to x's ORIGINAL value.
                    return takeOutOrders.get(takeOutIndex++);
                } else {
                    // x++ increments x but evaluates to x's ORIGINAL value.
                    return inHouseOrders.get(inHouseIndex++);
                }
            } else if (takeOutIndex < takeOutOrders.size()) {
                // Case: we have only take out orders left, so return next
                // take out order and increment index
                return takeOutOrders.get(takeOutIndex++);
            } else if (inHouseIndex < inHouseOrders.size()) {
                // Case: we have only in house orders left, so return next
                // in house order and increment index
                return inHouseOrders.get(inHouseIndex++);
            } else {
                // Case: there are no elements to return so throw exception
                throw new NoSuchElementException();
            }
        }
    }
}
```

In this example it was important to handle many different cases for the next() method, because when working with two different lists at the same time there can be many different issues. Namely, in this problem the hasNext() method is not very helpful as you need to recheck what exactly still has a next object because the method uses an or gate.

## Another Example

Here is an example where it was not fully an iterator problem, although we needed to implement an iterator:

```java
package model;

  

import java.util.HashMap;

import java.util.HashSet;

import java.util.Map;

import java.util.Set;

  

// Represents a warehouse in which inventory is grouped by category

public class GroupedInventory {

  

	private HashMap<Category, Inventory> group;
	
	  
	
	// EFFECTS: constructs a warehouse with no inventory
	
	public GroupedInventory() {
	
		group = new HashMap<>();
	
	}
	
	  
	
	// MODIFIES: this
	
	// EFFECTS: adds item to inventory in warehouse based
	
	// on item's category
	
	public void addItem(Item item) {
	
		Category c = item.getCategory();
		
		if (!group.containsKey(c)) {
			
			group.put(c, new Inventory());
				
			group.get(c).addItem(item);
			
		} else {
		
			group.get(c).addItem(item);
		
		}
	
	}
	
	  
	
	// EFFECTS: returns quantity of item in warehouse
	
	public int getItemCount(Item item) {
	
		int count = 0;
		
		for (Inventory i : group.values()) { // cant iterate over an inventory need to fix
		
			count = count + i.getItemCount(item);
		
		}
		
		return count;
	
	}
	
	  
	
	// EFFECTS: returns a set of all the items in the warehouse that
	
	// belong to given category
	
	public Set<Item> getItemsInCategory(Category category) {
	
		Set<Item> stuff = new HashSet<>();
	
	  
	
		for (Inventory i : group.values()) {
		
			for (Item thing : i) {
			
				if (thing.getCategory() == category) {
				
					stuff.add(thing);
				
				}
			
			}
		
		}
	
	return stuff;
	
	}

}
```

Basically, in this problem we needed to implement the GroupedInventory class, which uses a hash map to map a category of inventory (using an enum) to an Inventory.

The Inventory class is as follows:

```java
package model;

  

import java.util.HashMap;

import java.util.Iterator;

import java.util.Map;

import java.util.Set;

  

// Represents an inventory that tracks the quantity

// of each item in a warehouse

public class Inventory implements Iterable<Item> {

	private Map<Item, Integer> inventory;

  

// EFFECTS: constructs an empty inventory

	public Inventory() {
	
		inventory = new HashMap<>();
	
	}

  

	// MODIFIES: this
	
	// EFFECTS: increases quantity of item in warehouse by one
	
	public void addItem(Item item) {
	
		if (inventory.containsKey(item)) {
		
			int currentCount = inventory.get(item);
			
			inventory.put(item, currentCount + 1);
		
		} else {
		
			inventory.put(item, 1);
		
		}
	
	}

  

	// EFFECTS: returns quantity of item in warehouse
	
	public int getItemCount(Item item) {
	
		if (inventory.containsKey(item)) {
		
			return inventory.get(item);
		
		} else {
		
			return 0;
		
		}
	
	}

  
	
	// EFFECTS: returns set of all items in warehouse
	
	public Set<Item> getItems() {
	
		return inventory.keySet();
	
	}

  

	public Iterator<Item> iterator() {
	
		return new ItemIterator();
	
	}

  

	private class ItemIterator implements Iterator<Item> {
	
	  
	
		Iterator<Item> keyIterator = inventory.keySet().iterator();
	
	  
	  
		
		@Override
		
		public boolean hasNext() {
		
			return keyIterator.hasNext();
		
		}
		
		  
		
		@Override
		
		public Item next() {
		
			return (Item) keyIterator.next();
		
		}
		
	}

}
```

Basically, in order to iterate over all of the items in an inventory, I implemented Iterable\<Item> in Inventory to make the class iterable, for my private inner class I chose to make use of a primitive set iterator which I got from
```java
Iterator<Item> keyIterator = inventory.keySet().iterator();

```

And then simply using that keyIterator for hasNext and next.

### Iterator Sequence Diagrams
![[Pasted image 20260414233421.png]]