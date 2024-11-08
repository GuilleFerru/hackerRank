def findZigZagSequence(a, n):
    a.sort()
   
    mid = int((n + 1)/2) - 1
    
    a[mid], a[n-1] = a[n-1], a[mid]


    st = mid + 1
    ed = n - 2

    while(st <= ed):
        a[st], a[ed] = a[ed], a[st]
        st = st + 1
        ed = ed - 1

    for i in range (n):
        if i == n-1:
            print(a[i])
        else:
            print(a[i], end = ' ')
    return

# test_cases = int(input())
# for cs in range (test_cases):
n = int(7)
a = list([
    32, 22, 75, 64, 96, 84, 34, 36, 45, 56, 49, 38, 83, 88, 89, 70, 39, 1, 98, 23,
    57, 67, 81, 20, 85, 76, 40, 37, 48, 53, 4, 21, 52, 43, 3, 12, 2, 31, 80, 16,
    82, 41, 79, 99, 92, 11, 42, 91, 68, 55, 72, 69, 47, 78, 44, 27, 73, 77, 13, 90,
    51, 54, 93, 87, 25, 6, 63, 7, 94, 86, 18, 19, 61, 60, 62, 15, 30, 35, 28, 29,
    24, 97, 50, 17, 100, 66, 71, 8, 33, 10, 95, 9, 5, 59, 65, 14, 26, 58, 46
])
print(findZigZagSequence(a, n))


