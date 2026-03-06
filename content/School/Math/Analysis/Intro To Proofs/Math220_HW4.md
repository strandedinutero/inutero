#math #math220 #proof 

### Solutions to Homework 4

### 1
  
  **(a)** We want to prove the following:  
  
  > If $n \equiv 2 \mod 4$, or if $n \equiv 3 \mod 4$ then $n$ is not a perfect square.  
  
  A perfect square $n$ can be written as $n = k^2$ for $k \in \mathbb{Z}$. Then $k$ is either even or odd:  
  
  1. $k = 2\ell$ for even $k$    
  2. $k = 2\ell + 1$ for odd $k$  
  
  Substituting into $n = k^2$:  
  
  - For even $k$:  
  
  $$  
  n = k^2 = (2\ell)^2 = 4\ell^2  
  $$  
  
  So $4\ell^2 \equiv 0 \mod 4$, thus $n \equiv 0 \mod 4$.  
  
  - For odd $k$:  
  
  $$  
  n = k^2 = (2\ell + 1)^2 = 4\ell^2 + 4\ell + 1 = 4\ell(\ell+1) + 1  
  $$  
  
  Then $4\ell(\ell+1) + 1 \equiv 1 \mod 4$, so $n \equiv 1 \mod 4$.  
  
  Therefore, all perfect squares satisfy $n \equiv 0 \mod 4$ or $n \equiv 1 \mod 4$, so indeed if $n \equiv 2 \mod 4$ or $n \equiv 3 \mod 4$, $n$ is not a perfect square.  
  
  **(b)** We want to prove:  
  
  > If $n^2 + 1$ is a perfect square, then $n = 0$.  
  
  Suppose $n^2 + 1 = k^2$ for some $k \in \mathbb{Z}$. Then  
  
  $$  
  k^2 - n^2 = 1 \implies (k-n)(k+n) = 1  
  $$  
  
  The only integer factor pairs with product $1$ are $(1,1)$ and $(-1,-1)$.  
  
  1. Case $(k-n)=1, (k+n)=1$:  
  
  $$  
  (k-n) + (k+n) = 2k = 2 \implies k = 1  
  $$  
  
  Substituting $k=1$:  
  
  $$  
  1^2 - n^2 = 1 \implies n^2 = 0 \implies n = 0  
  $$  
  
  2. Case $(k-n)=-1, (k+n)=-1$:  
  
  $$  
  (k-n) + (k+n) = 2k = -2 \implies k = -1  
  $$  
  
  Substituting $k=-1$:  
  
  $$  
  (-1)^2 - n^2 = 1 \implies n^2 = 0 \implies n = 0  
  $$  
  
  Hence the only integer $n$ such that $n^2 + 1$ is a perfect square is $n=0$.  
  
### 2
  We want to prove:  
  
  > Let $a,b,c \in \mathbb{Z}$ such that $\gcd(a,b)=1$. Then $a \mid bc \implies a \mid c$.  
  
  By Bézout's identity, $\gcd(a,b)=1$ implies:  
  
  $$  
  ax + by = 1 \quad \text{for some } x,y \in \mathbb{Z}  
  $$  
  
  Multiply both sides by $c$:  
  
  $$  
  acx + bcy = c  
  $$  
  
  Since $a \mid bc$, write $bc = ak$ for some $k \in \mathbb{Z}$. Substituting:  
  
  $$  
  acx + aky = c \implies a(cx + ky) = c  
  $$  
  
  So $a \mid c$ as desired.  
  
### 3
  
  1. Statement: "$\forall x \in P, \forall y \in P$, $x+y\in P$"    
     Negation: $\exists x \in P, \exists y \in P$ such that $x+y \notin P$.    
     Example: $x=3$, $y=5$, then $x+y=8 \notin P$. **False.**  
  
  2. Statement: "$\forall x \in P, \exists y \in P$ such that $x+y \notin P$"    
     True. For any $x$, choose $y=x$, then $x+y=2x \notin P$.  
  
  3. Statement: "$\exists x \in P, \forall y \in P$ such that $x+y \in P$"    
     False, since its negation "$\forall x \in P, \exists y \in P$ such that $x+y \notin P$" is true (from 3b).  
  
### 4
  
  Prove $\forall \epsilon>0$, $\exists M>0$ such that  
  
  $$  
  \left| \frac{2x^2}{x^2+1} - 2 \right| < \epsilon  
  $$  
  
  for $x \ge M$.  
  
  Simplify:  
  
  $$  
  \left| \frac{2x^2}{x^2+1} - 2 \right| = 2 \left| \frac{-1}{x^2+1} \right| = \frac{2}{x^2+1}  
  $$  
  
  Solve $\frac{2}{x^2+1} < \epsilon \implies x^2 > \frac{2}{\epsilon} - 1$.  
  
  - Case $\epsilon \ge 2$: choose $M=1$, then $\frac{2}{x^2+1} \le 1 < \epsilon$.  
  - Case $0 < \epsilon < 2$: choose $M = \sqrt{\frac{2}{\epsilon}-1} + 1$, then $x \ge M$ implies $x^2 > \frac{2}{\epsilon}-1$, so inequality holds.  
  
### 5
  
  Consider  
  
  $$  
  f(x) =   
  \begin{cases}   
  x^2 \sin\left(\frac{1}{x}\right), & x\neq 0 \\   
  0, & x = 0   
  \end{cases}  
  $$  
  
  To show continuity at $x=0$:  
  
  $$  
  \lim_{x \to 0} f(x) = f(0) = 0  
  $$  
  
  Since $|f(x)| = |x^2 \sin(1/x)| \le x^2$, for $\forall \epsilon>0$, choose $\delta = \sqrt{\epsilon}$. Then $0<|x|<\delta \implies |f(x)| < \epsilon$, so $f$ is continuous at 0.  
  
### 6 
  
  Sequence $x_n = (-1)^n + \frac{1}{n}$.  
  
  Suppose $x_n \to L \in \mathbb{R}$. Consider subsequences:  
  
  - Even $n=2k$: $x_{2k} = 1 + \frac{1}{2k} \to 1$  
  - Odd $n=2k+1$: $x_{2k+1} = -1 + \frac{1}{2k+1} \to -1$  
  
  If $x_n \to L$, then both subsequences must converge to $L$. Contradiction: $1 \neq -1$. Hence $x_n$ does not converge.