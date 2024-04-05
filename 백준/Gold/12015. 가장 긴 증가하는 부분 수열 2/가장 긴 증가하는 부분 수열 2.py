import sys

input = sys.stdin.readline

n = int(input())
numbers = list(map(int, input().split()))

def solution():
	answer = [numbers[0]]
	
	# 가장 길다 -> 상호 원소간 값의 차이가 작다.
	# 증가한다 -> 오름차순 정렬된 상태

	for i in range(1, n):
		# 현재 수열의 마지막 원소보다 큰 경우 삽입
		if answer[-1] < numbers[i]: answer.append(numbers[i])
		elif answer[-1] > numbers[i]:
			# 현재 수열의 마지막 원소보다 작은 경우
			target = 0
			
			left, right= 0, len(answer)-1
			while left <= right:
				mid = int((left+right)/2)

				if answer[mid] == numbers[i]:
					target = mid
					break
				if answer[mid] > numbers[i]:
					target = mid
					right = mid - 1
				elif answer[mid] < numbers[i]:
					left = mid + 1

			# 현재 수열에서 numbers[i]보다 크고, 가장 차이가 작은 원소와 대체한다.
			# -> 실제 LIS와는 다른 결과가 나올 수 있지만 길이에는 영향을 주지 않는다.
			answer[target] = numbers[i]

	print(len(answer))
solution()