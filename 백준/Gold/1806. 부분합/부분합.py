import sys

input = sys.stdin.readline

n, s = map(int, input().split())
numbers = [0] + list(map(int, input().split()))
	
def solution():
	# 수열에서 연속된 수들의 부분합 중에 그 합이 S 이상이 되는 것 중, 가장 짧은 것의 길이?
	answer = n+1
	left, right = 1, 1

	# 누적합 구하기
	sums = [0]*(n+1)
	for i in range(1, n+1):
		sums[i] = sums[i-1] + numbers[i]

	# 투포인터 적용
	while left <= n and right <= n:
		if sums[right] - sums[left-1] < s: right += 1
		else:
			answer = min(answer, right - left + 1)
			left += 1

	answer = answer if answer <= n else 0
	print(answer)
	
solution()