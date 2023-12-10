length = int(input())
sequence = []
input = input().split()
for i in range(length):
    sequence.append(int(input[i]))
medians = []
for i in range(length):
    sequence[:i + 1] = sorted(sequence[:i + 1])
    if (i + 1) % 2 == 1:
        median = sequence[(i + 1) // 2]
    else:
        median = sequence[i // 2]
    medians.append(median)
print(sum(medians))
