import sys

input = sys.stdin.readline

m, n = map(int, input().split()) #조카수, 과자수
arr = list(map(int, input().split()))

def solution():
	answer = 0
	s, e = 1, max(arr)

	while s <= e:
		mid = (s+e)//2 # 조카 1명에게 줄 수 있는 막대 과자 길이

		# 조카 m명
		cnt = 0

		for snack in arr: cnt += snack//mid

		if cnt >= m:
			answer = max(answer, mid)
			s = mid + 1
		else: 
			e = mid - 1

	print(answer)
		
solution()