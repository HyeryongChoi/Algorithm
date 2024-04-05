import sys

input = sys.stdin.readline

n = int(input())
numbers = list(map(int, input().split()))

def solution():
	# 특성값 = 두 용액 특성값의 합
	# 0에 가까운 특성값
	answer = 2e8

	if n == 2: 
		print(numbers[0] + numbers[1])
		return

	left = 0 
	right = n-1

	while left < right:
		num_sum = numbers[left]+numbers[right]

		if abs(num_sum) < abs(answer):
			answer = num_sum

		if num_sum == 0:
			answer = num_sum
			break
		elif num_sum > 0:
			right -= 1
		elif num_sum < 0:
			left += 1
			
	print(answer)
	

solution()