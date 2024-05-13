if __name__ == '__main__':
    T = 10

    for test_case in range(1, T+1):
        t = int(input())
        target = input()
        word = input()
        
        answer = word.count(target)

        print(f'#{test_case} {answer}')