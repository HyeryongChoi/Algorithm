def solution(n):
    numbers = sorted(list(map(int, str(n))), reverse=True)
    return int(''.join([str(num) for num in numbers]))