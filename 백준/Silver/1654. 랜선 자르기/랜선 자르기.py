import sys
from collections import defaultdict

input = sys.stdin.readline

k, n = map(int, input().split())
lens = [int(input()) for _ in range(k)]

def solution():
	# k개의 랜선을 가지고 있다.
	# k -> n개이상 같은 길이 랜선
	# 최대 랜선 길이?

	answer = 1
	s, e = 1, max(lens)

	while s <= e:
		mid = (s+e)//2

		cnt = 0

		for size in lens: cnt += size//mid

		if cnt >= n:
			answer = max(answer, mid)
			s = mid + 1
		else:
			e = mid - 1

	print(answer)
solution()