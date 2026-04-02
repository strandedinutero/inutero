#cs #math #cs121 #proof 

# CS 121 Homework

## Question 1.

Prove through direct proof that for any positive integer $n$, if $n \equiv 5 \mod 9$, then $n = 4 \cdot {\lfloor \frac{n}{9}\rfloor} + 5 \cdot {\lceil \frac{n}{9}\rceil}$


> [!theorem] Proof 
> Assume that indeed $n \equiv 5 \mod 9$, then it follows that $n$ can be written as $n = 9k + 5$ for some $k\in\mathbb Z^+$. Now, substituting this equation for $n$ we see that:
> $$
> n = 4 \cdot {\Bigg\lfloor \frac{9k+5}{9}\Bigg\rfloor} + 5 \cdot {\Bigg\lceil \frac{9k+5}{9}\Bigg\rceil}
> $$
> Simplifying we then see that:
> $$
> n = 4 \cdot {\Bigg\lfloor k + \frac{5}{9}\Bigg\rfloor} + 5 \cdot {\Bigg\lceil k + \frac{5}{9}\Bigg\rceil}
> $$
> Now, applying the ceiling and floor functions in turn, we know that the ceiling function maps a real number to the next largest integer greater than or equal to it. Thus, $k$ will remain as $k$ but $\frac{5}{9}$ will be rounded to 1. This yields:
> $$
> n = 4 \cdot {\Bigg\lfloor k + \frac{5}{9}\Bigg\rfloor} + 5(k+1)
> $$
> Similarly, now applying the floor function, we know that it maps a real number to the largest previous integer less than or equal to it. Thus, again $k$ remains as $k$ but $\frac{5}{9}$ will be rounded down to 0. This yields:
> $$ 
> n = 4 \cdot (k+0) + 5(k+1)
> $$
> Simplifying, we obtain $n = 4k + 5k +5$ and thus we have that:
> $$
> n = 9k + 5 \iff n \equiv 5 \mod 9
> $$ 
> And the proof is complete as we have just shown that 
> $$
> n \equiv 5 \mod 9 \implies n = 4 \cdot {\Bigg\lfloor \frac{n}{9}\Bigg\rfloor} + 5 \cdot {\Bigg\lceil \frac{n}{9}\Bigg\rceil}
> $$

## Question 2.

Prove by contradiction that for any three integers $a,b,c > 1$, if $a$ and $c$ share no common factors greater than 1 and $a \equiv b \mod c$ then $b$ and $c$ share no common factors greater than 1.


> [!proof] Proof 
> First, let us formalize the question as follows, we want to show that $\forall a,b,c \in \mathbb Z^+ > 1$,
> 
> $$
 > \gcd(a,c) = 1 \land a \equiv b \mod c \implies \gcd(b,c) = 1
 >$$
 > Now, for proof by contradiction we will take the negation as follows:  $\exists a,b,c \in \mathbb Z^+ > 1$ such that:
 > $$
 > \gcd(a,c) = 1 \land a \equiv b \mod c \land \gcd(b,c) \neq 1
 >$$
 > So, assume that $a \equiv b \mod c$ such that $a$ can be written as $a = ck + b$ for some $k\in\mathbb Z^+$.  This implies that $ck = (a-b)$ hence $c$ is a multiple of $(a-b)$ and we have that $c \mid(a-b)$ . That being said, we also assumed that $\gcd(b,c)\neq 1$. Therefore, there exists some integer $\ell\in\mathbb Z > 1$  such that $\ell \mid b$ and $\ell \mid c$. Now, given we have that $\ell \mid b$ and $\ell \mid (a-b)$ it follows that $\ell$ will divide the sum of these two terms such that $\ell \mid (a-b) +b$, which yields $\ell \mid a$. However, we have now reached a contradiction because we assumed $\gcd(a,c) = 1$ but we just have shown that there exists a positive integer $\ell >1$ such that $\ell \mid a$ and $\ell \mid c$, and therefore $\gcd(a,c) \neq 1$
 
