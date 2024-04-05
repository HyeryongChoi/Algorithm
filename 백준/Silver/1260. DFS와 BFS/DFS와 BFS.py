from collections import deque


def dfs(start):
    visited[start] = True
    dfs_list.append(start)

    for next in sorted(graph[start]):
        if not visited[next]:
            dfs(next)


def bfs(start):
    q = deque()
    visited = [False] * (v + 1)

    q.append(start)
    visited[start] = True

    while q:
        cur = q.popleft()

        bfs_list.append(cur)

        for next in sorted(graph[cur]):
            if not visited[next]:
                q.append(next)
                visited[next] = True


v, e, start = map(int, input().split())

graph = [[] for _ in range(v + 1)]

for _ in range(e):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

dfs_list = []
bfs_list = []

visited = [False] * (v + 1)
dfs(start)
bfs(start)

print(*dfs_list)
print(*bfs_list)
