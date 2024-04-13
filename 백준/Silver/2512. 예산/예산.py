import sys

input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))
total_money = int(input())

def solution():
	# 총액 이하에서 가능한 한 최대의 총 예산 배정
	# 1. 모든 요청이 배정될 수 있는 경우 요청한 금액 그대로 배정
	if sum(arr) <= total_money:
		print(max(arr))
		return

	# 2. 모든 요청이 배정될 수 없는 경우에는 특정한 정수 상한액을 계산하여
	# 	그 이상인 예산요청에는 모두 상한액을 배정한다.
	#	상한액 이하의 예산요청에 대해서는 요청한 금액을 그대로 배정한다.

	answer = 1
	s, e = 1, 100000

	while s <= e:
		mid = (s+e)//2

		sum_money = 0

		for req in arr:
			if req <= mid: sum_money += req
			else: sum_money += mid

		
		if sum_money <= total_money:
			answer = max(answer, mid)
			s = mid + 1
		else:
			e = mid - 1

	print(answer)
	
solution()