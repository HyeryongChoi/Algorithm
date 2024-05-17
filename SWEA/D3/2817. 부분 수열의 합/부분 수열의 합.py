def dfs(index, n, k, target_len, result, count, arr):
    global answer

    if count == target_len:
        if result == k:
            answer += 1
        return

    if result >= k:
        return

    for i in range(index, n):
        dfs(i+1, n, k, target_len, result + arr[i], count+1, arr)

if __name__ == '__main__':
    T = int(input())

    for test_case in range(1, T+1):
        n, k = map(int, input().split())
        arr = list(map(int, input().split()))

        answer = 0

        for i in range(1,n+1):
            dfs(0, n, k, i, 0, 0, arr)

        print(f'#{test_case} {answer}')

