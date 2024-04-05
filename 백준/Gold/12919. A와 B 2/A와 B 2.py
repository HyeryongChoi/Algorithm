import sys

input = sys.stdin.readline

s = input().rstrip()
t = input().rstrip()

answer = 0

def solution(s,t):
	global answer

	if answer == 1:
		return

	if s == t:
		answer = 1
		return

	if len(s) == len(t):
		return

	if t[-1] == 'A': solution(s,t[:-1])
	if t[0] == 'B': solution(s,t[::-1][:-1])

solution(s,t)
print(answer)
