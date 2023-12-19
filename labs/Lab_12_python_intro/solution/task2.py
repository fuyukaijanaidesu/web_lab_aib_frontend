import bisect

def median_sum(N, X):
    result_sum = 0
    sorted_sequence = []

    for i in range(N):
        current_element = X[i]
        bisect.insort_left(sorted_sequence, current_element)
        result_sum += sorted_sequence[i // 2]

    return result_sum

if __name__ == "__main__":
    N = int(input())
    X = list(map(int, input().split()))
    result = median_sum(N, X)
    print(result)

