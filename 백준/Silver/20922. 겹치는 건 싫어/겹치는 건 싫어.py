import sys

input = sys.stdin.readline

n, k = map(int, input().split())
arr = list(map(int, input().split()))

def solution():
	# 같은 원소가 k개 이하로 들어 있는 최장 연속 부분 수열의 길이

	answer = 0
	l, r = 0, 0
	counts = dict()

	while l <= r and r < n:
		now = arr[r]
		
		if now not in counts: counts[now] = 0
		counts[now] += 1

		if counts[now] <= k: 
			r += 1
			answer = max(answer, r-l)
		else:
			counts[arr[r]] -= 1
			counts[arr[l]] -= 1
			l += 1

	print(answer)
	
solution()