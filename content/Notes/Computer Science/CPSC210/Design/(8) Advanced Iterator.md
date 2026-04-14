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

