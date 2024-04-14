import sys
from bisect import bisect_left

input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))

def solution():
	# answer[i] = arr[i] > arr[j]를 만족하는 j의 개수
	answer = []
	sorted_arr = sorted(set(arr))

	for target in arr:
		left = bisect_left(sorted_arr, target)
		answer.append(left)
	
	print(*answer)
solution()