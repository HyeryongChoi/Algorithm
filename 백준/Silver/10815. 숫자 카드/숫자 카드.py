import sys

input = sys.stdin.readline

n = int(input())
mine = list(map(int, input().split()))
m = int(input())
arr = list(map(int, input().split()))

def has(target, arr):
	s, e = 0, len(arr)-1

	while s <= e:
		mid = (s+e)//2

		if arr[mid] == target: return True
		elif arr[mid] > target: e = mid -1
		else: s = mid + 1

	return False

def solution():
	answer = []
	sorted_arr = sorted(mine)

	for target in arr:
		if has(target, sorted_arr): answer.append(1)
		else: answer.append(0)
	
	print(*answer)
solution()