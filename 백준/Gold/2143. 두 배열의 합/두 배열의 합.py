import sys
from bisect import bisect_left, bisect_right

input = sys.stdin.readline

target = int(input())

n = int(input())
a = [0] + list(map(int, input().split()))

m = int(input())
b = [0] + list(map(int, input().split()))

def solution():
	answer = 0

	# a 부 배열의 합에 b 부 배열의 합을 더해서 target이 되는 모든 부 배열 쌍의 개수?

	# 누적합 구하기
	sums_a = [0]*(n+1)
	sums_b = [0]*(m+1)

	for i in range(1,n+1): sums_a[i] = sums_a[i-1] + a[i]
	for i in range(1,m+1): sums_b[i] = sums_b[i-1] + b[i]

	# 부 배열 합 구하기
	sums_sub_a = []
	sums_sub_b = []

	for i in range(1, n+1):
		for j in range(i, n+1):
			sums_sub_a.append(sums_a[j] - sums_a[i-1])

	for i in range(1, m+1):
		for j in range(i, m+1):
			sums_sub_b.append(sums_b[j] - sums_b[i-1])

	# 부 배열 합 오름차순 정렬
	sums_sub_a.sort()
	sums_sub_b.sort()
	
	# a 부 배열의 합에 b 부 배열의 합을 더해서 target이 되는 경우 이분탐색
	for sum_sub_a in sums_sub_a:
		left = bisect_left(sums_sub_b, target - sum_sub_a)
		right = bisect_right(sums_sub_b, target - sum_sub_a)

		answer += right - left

	print(answer)

solution()
