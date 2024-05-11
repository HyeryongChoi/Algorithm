if __name__ == '__main__':
    T = int(input())
    for test_case in range(1, T+1):
        answer = 0
        memory = list(map(int, list(input().rstrip())))
        n = len(memory)
        temp = [0]*n

        for i in range(n):
            if memory[i] == temp[i]: continue
            else:
                answer += 1
                temp[i:] = [memory[i]]*(n-i)

        print(f'#{test_case} {answer}')