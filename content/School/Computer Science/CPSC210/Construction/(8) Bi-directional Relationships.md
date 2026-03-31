#cs #cs210 

# Implementing bi-directional relationships

For bi-directional classes, the relationship must be actively maintained in every participating class, that is a change in one **must** be reflected in the other:

![[Pasted image 20260313151306.png|637]]

Ie -> adding a B to the B field of A requires that the current A object be added to that B as the B class also has a field of A. Similarly, when an A is added to the A field of B, it requires that the current B objected is added to that newly adde A's field of B.

An *important* thing to note is that to implement a bi-directional relationship equals and hash code must be overridden. 


