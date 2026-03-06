#math #math220 #proof 

### Solutions to Homework 2
### 1 
  
**Proof:**    
Let $a,b \in \mathbb Z$, then in order to prove that if $ab$ is odd, $a$ and $b$ must both be odd, we will prove the contrapositive:  
  
$$  
P \implies Q \quad \equiv \quad \sim Q \implies \sim P.  
$$  
  
Now given we have  
  
$$  
P: \text{$ab$ is odd}, \quad Q: \text{$a$ and $b$ are both odd},  
$$  
  
it follows that  
  
$$  
\sim P: \text{$ab$ is even}, \quad \sim Q: \text{$a$ and $b$ are not both odd}.  
$$  
  
Assume $a$ is even such that $a=2k$ for $k\in\mathbb Z$, and $b$ is odd such that $b=2\ell + 1$. Substituting into $ab$ we find:  
  
$$  
ab = 2k(2\ell+1),  
$$  
  
which is clearly even. Therefore, since the contrapositive is true, the original statement is true.  
  
---  
  
### 2
  
**Proof:**    
To prove that if $a\in\mathbb Z$ then $4 \nmid a^2 -3$, we use proof by contradiction. Assume instead $4\mid a^2 -3$, i.e.,  
  
$$  
a^2-3 =4k \qquad \text{for $k\in\mathbb Z$}.  
$$  
  
If $a$ is even, $a=2n$, substituting gives  
  
$$  
4n^2 -3 = 4k \implies n^2 - \frac{3}{4} = k,  
$$  
  
which is not an integer, a contradiction.    
  
If $a$ is odd, $a=2m+1$, substituting gives  
  
$$  
4m^2 +4m +1 -3 = 4k \implies m^2 + m - \frac{1}{2} = k,  
$$  
  
again a contradiction. Therefore, no $a \in \mathbb Z$ satisfies $4 \mid a^2 - 3$, so $4 \nmid a^2 -3$ for all $a \in \mathbb Z$.  
  
---  
  
### 3
  
**Proof:**    
Let $x\in \mathbb R^+$. To prove that if   
  
$$  
\frac{2x-1}{x}>1 \implies x>1,  
$$  
  
manipulate the inequality:  
  
$$  
\frac{2x-1}{x}>1 \iff 2x - \frac{1}{x} - 1 >0.  
$$  
  
Multiply both sides by $x$ (positive) and factor:  
  
$$  
2x^2 - x -1 >0 \implies (2x+1)(x-1) >0.  
$$  
  
Since $2x+1>0$, it follows that $x-1>0 \implies x>1$. Hence, the statement is true.  
  
---  
  
### 4
  
**Proof:**    
Let $x\in\mathbb R$. We want to show $x^2 + |x-6| > 5$. Consider two cases:  
  
5. If $x \ge 6$, then $|x-6| = x-6$:  
  
$$  
x^2 + x -6 >5 \implies x^2 + x - 11 >0,  
$$  
  
which is true for $x \ge 6$.  
  
6. If $x < 6$, then $|x-6| = 6-x$:  
  
$$  
x^2 - x + 6 >5 \implies x^2 - x + 1 >0 \implies \left(x-\frac{1}{2}\right)^2 + \frac{3}{4} >0,  
$$  
  
which is always true. Thus $x^2 + |x-6| >5$ for all $x \in \mathbb R$.  
  
---  
  
### 5
  
**Proof:**    
Let $n \in \mathbb Z$. To prove that if $5\nmid (n^2-1)(n^2-4)$ then $5 \mid n$, use the contrapositive:  
  
$$  
P \implies Q \equiv \sim Q \implies \sim P,  
$$  
  
where  
  
$$  
P: 5 \nmid (n^2-1)(n^2-4), \quad Q: 5 \mid n.  
$$  
  
Then  
  
$$  
\sim P: 5 \mid (n^2-1)(n^2-4), \quad \sim Q: 5 \nmid n.  
$$  
  
Assume $5 \nmid n$. Then $n=5q+r$, with $r \in \{1,2,3,4\}$.    
  
$$  
5 \mid (n^2-1)(n^2-4) \implies 5 \mid (n-1)(n+1)(n-2)(n+2).  
$$  
  
Check each $r$:  
  
- $r=1 \implies n-1=5q \implies 5 \mid (n-1)$    
- $r=2 \implies n-2=5q \implies 5 \mid (n-2)$    
- $r=3 \implies n+2=5(q+1) \implies 5 \mid (n+2)$    
- $r=4 \implies n+1=5(q+1) \implies 5 \mid (n+1)$  
  
Thus, for any $r$, $(n^2-1)(n^2-4)$ is divisible by 5. Hence  
  
$$  
5 \nmid n \implies 5 \mid (n^2-1)(n^2-4),  
$$  
  
so the original statement is true.  
  
---  
  
### 6
  
**Proof:**    
Let $x,y \in \mathbb Z$. To prove $3\nmid (x^3+y^3) \iff 3 \nmid (x+y)$, we equivalently show  
  
$$  
P \iff Q \equiv \sim P \implies \sim Q.  
$$  
  
**Case 1:** $3 \mid (x+y)$, i.e., $(x+y)=3k$. Then  
  
$$  
x^3+y^3 = (x+y)(x^2-xy+y^2) = 3k(x^2-xy+y^2),  
$$  
  
so $3 \mid (x^3+y^3)$.  
  
**Case 2:** $3 \mid (x^3+y^3)$. Rewrite:  
  
$$  
x^3+y^3 = (x+y)^3 - 3xy(x+y) = (x+y)((x+y)^2 -3xy).  
$$  
  
If $3 \nmid (x+y)$, then $3 \mid ((x+y)^2 -3xy)$. But $-3xy$ is divisible by 3, so $(x+y)^2$ divisible by 3, implying $3 \mid (x+y)$, a contradiction. Hence  
  
$$  
3 \mid (x^3+y^3) \implies 3 \mid (x+y).  
$$  
  
Thus, $3\nmid (x^3+y^3) \iff 3 \nmid (x+y)$.  
  
---  
### 7  
  
**Proof:**    
Let $a,b,k \in \mathbb Z$, not both zero. To show if $k \nmid \gcd(a,b)$, then $k \nmid a$ or $k \nmid b$, consider the contrapositive:  
  
$$  
\sim Q \implies \sim P,  
$$  
  
where  
  
$$  
\sim Q: k \mid a \land k \mid b, \quad \sim P: k \mid \gcd(a,b).  
$$  
  
By Bézout's identity, $\exists x,y \in \mathbb Z$ such that $ax+by = \gcd(a,b)$. If $a=nk$ and $b=mk$, then  
  
$$  
ax+by = nkx + mkx = k(nx+mx),  
$$  
  
so $k \mid \gcd(a,b)$. Hence the contrapositive holds, and the original statement is true:  
  
$$  
k \nmid \gcd(a,b) \implies k \nmid a \lor k \nmid b.  
$$