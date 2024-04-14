import sys

input = sys.stdin.readline

n, m = map(int, input().split()) # 나무 수, 집에 가져갈 총 나무의 길이
arr = list(map(int, input().split())) # 나무 높이

def solution():
	answer = 0
	s, e = 1, max(arr)

	while s <= e:
		mid = (s+e)//2

		size = 0

		for h in arr:
			if h - mid > 0: size += h - mid

		if size >= m:
			answer = max(answer, mid)
			s = mid + 1
		else: 
			e = mid - 1

	print(answer)
		
solution()