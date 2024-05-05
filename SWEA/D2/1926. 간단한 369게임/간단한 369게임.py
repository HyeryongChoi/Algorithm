n = int(input())
arr = []

for i in range(1, n+1):
	num_arr = list(str(i))
	count = num_arr.count('3') + num_arr.count('6') + num_arr.count('9')
	
	if count > 0:
		arr.append('-'*count)
	else:
		arr.append(i)

print(*arr)
