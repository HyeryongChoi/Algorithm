import sys

input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))
m = int(input())
targets = list(map(int, input().split()))

def has(target, arr):
	s, e = 0, len(arr)-1

	while s <= e:
		mid = (s+e)//2

		if arr[mid] == target: return 1
		elif arr[mid] < target: s = mid + 1
		else: e = mid - 1

	return 0

def solution():
	arr.sort()
	
	for target in targets:
		if has(target, arr): print(1)
		else: print(0)
	
solution()