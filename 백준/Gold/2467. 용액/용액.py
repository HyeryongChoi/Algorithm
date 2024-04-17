import sys

input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))

def solution():
	l, r = 0, n-1

	candidate = int(1e9*2)
	result = [arr[l], arr[r]]

	
	while l < r:
		sum = arr[l] + arr[r]
		
		if abs(sum) < candidate:
			result = [arr[l], arr[r]]
			candidate = abs(sum)

		if sum == 0: return result
		elif sum < 0: l += 1
		else: r -= 1

	return result

result = solution()

print(*result)