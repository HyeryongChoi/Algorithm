from collections import defaultdict

def dfs(now, cnt, visited):
    global answer

    answer = max(answer, cnt)

    for next in graph[now]:
        if visited[next]: continue

        visited[next] = True
        dfs(next, cnt+1, visited)
        visited[next] = False


if __name__ == '__main__':
    T = int(input())

    for test_case in range(1, T+1):
        answer = 0
        n, m = map(int, input().split())
        graph = defaultdict(list)
        board = [[0]*n for _ in range(n)]

        for _ in range(m):
            a, b = map(int, input().split())
            graph[a].append(b)
            graph[b].append(a)

        visited = [False] * (n+1)
        for now in range(1, n+1):
            visited[now] = True
            dfs(now, 1, visited)
            visited[now] = False

        print(f'#{test_case} {answer}')

