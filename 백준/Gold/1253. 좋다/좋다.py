import sys

input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))

def solution():
	# a[k] = a[i] + a[j] 인 a[k]를 투 포인터를 사용하여 찾기

	answer = 0
	
	arr.sort() # 오름차순 정렬
	
	for k in range(n):
		left, right = 0, n-1

		while left < right:
			if arr[k] == arr[left] + arr[right]:
				if left == k: left += 1
				elif right == k: right -= 1
				else:
					answer += 1
					break
			elif arr[k] < arr[left] + arr[right]: right -= 1
			else: left += 1

	print(answer)

solution()
