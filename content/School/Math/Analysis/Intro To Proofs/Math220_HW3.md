#math #math220 #proof

### Solutions to Homework 3

### 1
  
   (a) For   
  
   $$  
   \forall a \in \mathbb Z, \ (6 \mid a \land 8 \mid a) \implies 48 \mid a,  
   $$  
  
   the negation is:  
  
   $$  
   \exists a \in \mathbb Z \ (6 \mid a \land 8 \mid a) \land 48 \nmid a.  
   $$  
  
   The original statement is **false**, e.g., $a=24$ satisfies $6\mid a$ and $8\mid a$ but $48\nmid a$.  
  
   (b) For   
  
   $$  
   \exists x \in \mathbb Z \text{ such that } x>84 \land x \equiv 75 \mod 84,  
   $$  
  
   the negation is:  
  
   $$  
   \forall x \in \mathbb Z, \ x \le 84 \land x \equiv 75 \mod 84.  
   $$  
  
   The original statement is **true**, e.g., $x = 75 + 84k$ for $k \in \mathbb N$, take $k=1$ gives $x=159$.  
  
   (c) For   
  
   $$  
   \exists x,y \in \mathbb R \text{ such that } x^2 \ge y^2 \land x \le y,  
   $$  
  
   the negation is:  
  
   $$  
   \forall x,y \in \mathbb R, \ x^2 < y^2 \lor x > y.  
   $$  
  
   The original statement is **true**, e.g., $x=-2$ and $y=-1$.  
  
---  
  
### 2
  
**Proof:**    
Let $a \in \mathbb R$ and define $S_a = \{ x \in \mathbb R : x \ge 0 \land x < a-2 \}$. We want to show:  
  
$$  
S_a = \emptyset \iff a \in (-\infty, 2].  
$$  
  
We prove the contrapositive:  
  
$$  
S_a \neq \emptyset \iff a > 2.  
$$  
  
3. Assume $S_a \neq \emptyset$. Then $\exists x \in \mathbb R$ with $0 \le x < a-2$, which implies $a > 2$.  
  
4. Assume $a>2$. Let   
  
$$  
x = \frac{a-2}{2} \in S_a.  
$$  
  
Hence $S_a \neq \emptyset$. Thus $S_a = \emptyset \iff a \in (-\infty, 2]$.  
  
---  
  
### 3
  
**Proof:**    
Let $A = \{ n \in \mathbb N : 5 \mid n \lor 6 \mid n \}$.    
  
(a)   
  
$$  
\exists x \in A, \exists y \in A, \ x+y \in A  
$$  
  
**True**, e.g., $x=5$, $y=10$.    
  
(b)   
  
$$  
\forall x \in A, \forall y \in A, \ x+y \in A  
$$  
  
**False**, e.g., $x=5$, $y=6$, $x+y=11 \notin A$.    
  
(c)   
  
$$  
\exists x \in A, \forall y \in A, \ x+y \in A  
$$  
  
**True**, e.g., $x=30n$, $n>1$. Then $5 \mid x$ and $6 \mid x$, so for any $y \in A$, $x+y \in A$.  
  
---  
  
### 4
  
(a) $\forall n \in \mathbb Z, \exists y \in \mathbb R$ such that $y^n < y$.    
  
Negation:  
  
$$  
\exists n \in \mathbb Z, \forall y \in \mathbb R, \ y^n \ge y.  
$$  
  
**False**, e.g., $n=1$, no $y$ satisfies $y^1<y$.    
  
(b) $\exists y \in \mathbb R$ such that $\forall n \in \mathbb Z, n>1$, $y^n < y$.    
  
Negation:  
  
$$  
\forall y \in \mathbb R, \exists n \in \mathbb Z, n>1, \ y^n \ge y.  
$$  
  
**True**, e.g., $y=1/2$.  
  
---  
  
### 5
  
**Proof:**    
We want to show $\forall a \in \mathbb Z, \exists b \in \mathbb Z$ such that $a^2 + b^2 \equiv 1 \mod 3$.    
  
Use cases modulo 3:    
  
6. $a \equiv 0 \mod 3$: let $b=1$. Then $a^2+b^2 \equiv 0+1 \equiv 1 \mod 3$.    
7. $a \equiv 1 \mod 3$: let $b=0$. Then $a^2+b^2 \equiv 1+0 \equiv 1 \mod 3$.    
8. $a \equiv 2 \mod 3$: let $b=0$. Then $a^2+b^2 \equiv 1+0 \equiv 1 \mod 3$.    
  
Hence the statement holds for all $a \in \mathbb Z$.  
  
---  
  
### 6
  
The statement:  
  
$$  
\left| 1 - \frac{x^2}{x^2 + 1} \right| < \epsilon \text{ whenever } x \ge M  
$$  
  
can be written as:  
  
$$  
\forall \epsilon > 0, \exists M > 0, \forall x \ge M, \left| 1 - \frac{x^2}{x^2+1} \right| < \epsilon.  
$$  
  
Negation:  
  
$$  
\exists \epsilon > 0, \forall M > 0, \exists x \ge M, \left| 1 - \frac{x^2}{x^2+1} \right| \ge \epsilon.  
$$  
  
---  
  
### 7
  
(a) Disprove: "Every bounded function $f: \mathbb R \to \mathbb R$ is linearly bounded."    
  
Counterexample: $f(x)=1$ is bounded but not linearly bounded.    
  
(b) Disprove: "Every linearly bounded function $f: \mathbb R \to \mathbb R$ is bounded."    
  
Counterexample: $f(x)=x$ is linearly bounded but unbounded.    
  
(c) Prove: "A function $f$ is bounded iff it is strictly bounded."    
  
- If $f$ is bounded: $\exists n \in \mathbb N$ with $|f(x)| \le n$, then let $k=n+1$, so $|f(x)|<k$, i.e., strictly bounded.    
- If $f$ is strictly bounded: $\exists k \in \mathbb N$ with $|f(x)|<k$, then $|f(x)| \le k$, i.e., bounded.    
  
Hence the statement is **true**.