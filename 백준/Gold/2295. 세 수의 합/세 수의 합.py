import sys

input = sys.stdin.readline

n = int(input())
arr = [int(input()) for _ in range(n)]

arr.sort()

def solution():
	# a[x] + a[y] = a[k] - a[z]

	sums = set()
	for x in arr:
		for y in arr:
			sums.add(x+y)

	for k in range(n-1, -1, -1):
		for z in range(k):
			if arr[k] - arr[z] in sums:
				return arr[k]
				

print(solution())
	