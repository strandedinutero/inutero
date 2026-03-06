#math #math220 #proof 

### Solutions to Homework 1  
  
### 1
  
   2. The statement "2 is even and 11 is prime" is true and can be written as:  
  
   $$  
   P \land Q  
   $$  
  
   Where $P$: "2 is even" and $Q$: "11 is prime".  
  
   3. The statement "If $n$ is a multiple of 7 and 4, then it is a multiple of 14" is true and can be written as:  
  
   $$  
   (P \land Q) \implies R  
   $$  
  
   Where $P$: "$n$ is a multiple of 7", $Q$: "$n$ is a multiple of 4", $R$: "$n$ is a multiple of 14".  
  
   4. The open sentence "$5 \le x \le 17$" can be written as:  
  
   $$  
   P(x) \land Q(x)  
   $$  
  
   Where $P(x)$: $x \ge 5$, and $Q(x)$: $x \le 17$.  
  
   5. The statement "A real number $x$ is less than -3 or greater than 3 if its square is greater than 9" can be written as:  
  
   $$  
   R \iff (P \lor Q)  
   $$  
  
   Where $R$: "The square of $x$ is $> 9$", $P$: $x < -3$, and $Q$: $x > 3$.  
  
---  
  
### 2
  
**Proof:**    
Given $a \in \mathbb Z$, assume $5a+11$ is odd. To show $9a+3$ is odd, first write:  
  
$$  
5a+11 = 2k + 1 \qquad \text{for $k \in \mathbb Z$}.  
$$  
  
Notice  
  
$$  
9a+3 = 5a+11 + (4a-8).  
$$  
  
Substitute $5a+11 = 2k+1$:  
  
$$  
9a+3 = 2k+1 + 4a-8 = 2k + 4a -7 = 2(k+2a-4) + 1.  
$$  
  
Since $k+2a-4 \in \mathbb Z$, $9a+3$ is odd.  
  
---  
  
### 3
  
**Proof:**    
Given $n \in \mathbb Z$, assume $3 \mid n-2$. Then $n-2 = 3k \implies n = 3k+2$ for $k \in \mathbb Z$.  
  
Substitute into $n^2 + 2n + 8$:  
  
$$  
(3k+2)^2 + 2(3k+2) + 8 = 9k^2 + 18k + 16 = 3(3k^2 + 6k + 5) + 1.  
$$  
  
Since $3k^2 + 6k +5 \in \mathbb Z$, we have  
  
$$  
3 \nmid n^2 + 2n + 8.  
$$  
  
---  
  
### 4
**Proof:**    
Let $x,y \in \mathbb R$. To show $xy \le \frac{1}{2}(x^2+y^2)$, consider:  
  
$$  
\frac{1}{2}(x^2+y^2) - xy = \frac{1}{2}(x^2-2xy+y^2) = \frac{1}{2}(x-y)^2 \ge 0.  
$$  
  
Multiply both sides by 2:  
  
$$  
x^2 + y^2 \ge 2xy \iff xy \le \frac{1}{2}(x^2+y^2).  
$$  
  
---  
  
### 5
  
**Proof:**    
Let $n,a,b,c,d \in \mathbb Z$, $n>0$, and assume $n \mid a$ and $n \mid c$. Write $a = kn$, $c = mn$ for $k,m \in \mathbb Z$. Then:  
  
$$  
ab + cd + ac = bkn + dmn + kmn^2 = n(bk + dm + kmn),  
$$  
  
so $n \mid (ab + cd + ac)$.  
  
---  

### 6
**Proof:**    
Given $a \in \mathbb Z$, assume $3a+1$ is odd. Write:  
  
$$  
3a+1 = 2k+1 \qquad \text{for $k \in \mathbb Z$}.  
$$  
  
Then  
  
$$  
5a + 2 = (3a+1) + 2a + 1 = 2k+1 + 2a + 1 = 2(k+a+1),  
$$  
  
which is even. Hence if $3a+1$ is odd, $5a+2$ is even.  
  
---  
### 7 
  
**Proof:**    
Let $a,b>0$ be \textit{funky}, with  
  
$$  
a^k = m, \quad b^t = n \quad \text{for $k,t \in \mathbb N$, $m,n \in \mathbb Z$}.  
$$  
  
Let $F = \sqrt{ab} = (ab)^{1/2}$. Raise to $2kt$:  
  
$$  
F^{2kt} = (ab)^{kt} = a^{kt} b^{kt} = m^t n^k \in \mathbb Z.  
$$  
  
Thus $\sqrt{ab}$ is \textit{funky}.