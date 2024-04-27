SELECT DISTINCT A.CAR_ID
FROM CAR_RENTAL_COMPANY_CAR A
JOIN CAR_RENTAL_COMPANY_RENTAL_HISTORY B ON A.CAR_ID = B.CAR_ID
WHERE A.CAR_TYPE = '세단' AND MONTH(B.START_DATE) = 10
ORDER BY A.CAR_ID DESC