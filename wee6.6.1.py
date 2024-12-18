#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'superDigit' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. STRING n
#  2. INTEGER k
#

def superDigit(n, k):
    # Write your code here
    n = k*sum(list(map(lambda x: int(x), n)))
    return n if n <= 9 else superDigit(str(n),1)

if __name__ == '__main__':
    # fptr = open(os.environ['OUTPUT_PATH'], 'w')

    # first_multiple_input = input().rstrip().split()

    n = '123'

    k = '3'

    result = superDigit(n, k)

    print(result)

    # fptr.write(str(result) + '\n')

    # fptr.close()
