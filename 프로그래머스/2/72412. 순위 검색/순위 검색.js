const binarySearch = (targetScore, infoScores) => { // 타겟 점수가 몇번째 인덱스에 있을지 찾기
    let [start, end] = [0, infoScores.length];
    
    while (start < end) {
        const mid = Math.floor((start+end) / 2);
        
        if (infoScores[mid] >= targetScore) end = mid;
        else start = mid + 1;
    }
    
    return start;
};

function solution(rawInfos, rawQueries) {
    const answer = [];
    
    // 지원자 정보 파싱 -> {조건: [점수, 점수, 점수]}
    const infos = {};
    
    rawInfos.forEach(rawInfo => {
        const info = rawInfo.split(' ');
        const score = Math.floor(info.pop());
        const condition = info.join('');
        
        if(infos[condition]) infos[condition].push(score);
        else infos[condition] = [score];
    });
    
    // 이분탐색을 위해 점수 오름차순 정렬
    for(const key in infos) infos[key].sort((a,b) => a-b);
    
    rawQueries
        .map(rawQuery => rawQuery.replaceAll('and ','').split(' ').filter(v => v !== '-')) // 쿼리파싱
        .forEach(query => {
            const targetScore = Math.floor(query.pop());
            const infoConditions = Object.keys(infos);

            // 조건 만족하는 info 중에서 코테 점수가 기준 점수 이상인 것의 개수
            const count = infoConditions
                .filter(infoCondition => query.every(q => infoCondition.includes(q))) 
                .reduce((acc, key) => acc + infos[key].length - binarySearch(targetScore, infos[key]), 0);

            answer.push(count);
    });
    
    return answer;
}