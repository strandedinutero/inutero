FETCH AND DECODE

In this step, each instruction type has a different number of bytes.

Fetch and Decode will ask for the instruction stored in memory, starting at the address PC. The value of PC will come from Execute. Parse the instruction as follows:

    The 1st hex digit is the instruction code (iCd)
    The 2nd hex digit is the instruction function (iFn)
    If iCd = 3 or iCd = 6:
        The 3rd hex digit is register A (rA) and the 4th hex digit is register B (rB)
        Note that if iCd is not 3 or 6, we do not skip over these positions (i.e., we do not skip over the 3rd and 4th hex digit positions). Any other values read will continue from right after iCd and iFn (starting at the 3rd hex digit position).
    If iCd = 3 or iCd = 7:
        The next 8 hex digits (or 4 bytes) are called valC

And then calculate the following four values (all values are in hexadecimal):

    If iCd = 0:
        valP has the same value as PC
        srcA and srcB are both equal to 0xF
        dstE is equal to 0xF
    If iCd = 3:
        valP has the same value of PC+6
        srcA and srcB are both equal to 0xF
        dstE has the same value as rB
    If iCd = 6:
        valP has the same value of PC+2
        srcA has the same value as rA
        dstE and srcB have both the same value as rB
    If iCd = 7:
        valP has the same value of PC+5
        srcA and srcB are both equal to 0xF
        dstE is equal to 0xF

Note: Type -1 if a given value does not exist (or is "N/A").
![[Pasted image 20260318114810.png]]

![[Pasted image 20260318114738.png]]
