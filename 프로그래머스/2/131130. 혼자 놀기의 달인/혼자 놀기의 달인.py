from itertools import combinations

def solution(cards):
    answer = 0
    
    card_combis = list(combinations(cards, 2))
    
    for card_combi in card_combis:
        visited = [False] * len(cards)
        
        a_boxes = getBoxes(card_combi[0], visited, cards)
        b_boxes = getBoxes(card_combi[1], visited, cards)

        # 1번 상자 그룹에 속한 상자 수 * 2번 상자 그룹에 속한 상자 수 = 게임 점수
        answer = max(answer, len(a_boxes) * len(b_boxes))
        
    return answer
        
def getBoxes(selected_num, visited, cards):
    boxes = []
    box_index = selected_num - 1

    # 열어야 하는 상자가 이미 열려있을 때까지 반복
    while not visited[box_index]:
        # 카드에 적힌 숫자 번호에 해당하는 상자 열어 숫자 확인
        boxes.append(box_index)
        visited[box_index] = True
        box_index = cards[box_index] - 1
    
    return boxes