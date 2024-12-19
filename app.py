def bubbleSort(arr):    
    
    tam = len(arr)
    
    for i in range(tam):
        for j in range(tam -1 -i):
            if(arr[j] > arr[j+1]):
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
    return arr;

list = [3,6,12,100,8,25,40,19]
result = bubbleSort(list)

print(result)