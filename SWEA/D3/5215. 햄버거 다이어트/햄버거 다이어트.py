def chooseIngredients(index, n, ingredients, score, calorie, calorie_limit):
    global answer

    if index == n:
        return

    for i in range(index, n):
        s, c = ingredients[i]

        if c + calorie > calorie_limit:
            break

        answer = max(answer, s + score)

        chooseIngredients(i+1, n, ingredients, s + score, c + calorie, calorie_limit)


if __name__ == '__main__':
    T = int(input())

    for test_case in range(1, T+1):
        answer = 0
        n, calorie_limit = map(int, input().split())
        ingredients = [tuple(map(int, input().split())) for _ in range(n)] # 점수, 칼로리
        
        ingredients.sort(key = lambda x: x[1]) # 칼로리 기준 오름차순 정렬

        chooseIngredients(0, n, ingredients, 0, 0, calorie_limit)

        print(f'#{test_case} {answer}')