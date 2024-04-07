import sys
import math

input = sys.stdin.readline

n = int(input())

def isPrime(num):
	if num < 1: return False

	for i in range(2, int(math.sqrt(num))+1):
		if num % i == 0: return False

	return True

def makePrimeArr(max_num):
	arr = []
	
	for num in range(2, max_num+1):
		if isPrime(num):
			arr.append(num)

	return arr

def solution():
	arr = [0] + makePrimeArr(n)

	answer = 0

	sums = [0]*len(arr)
	for i in range(1, len(arr)):
		sums[i] = sums[i-1] + arr[i]

	left, right = 1, 1

	while right < len(arr):
		sub_sum = sums[right]-sums[left-1]
		
		if sub_sum == n:
			answer += 1
			left += 1
		elif sub_sum < n: right += 1
		else: left += 1

	print(answer)
	
solution()