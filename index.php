<?php

function bubbleSort($lista){
    for($i=0; $i < count($lista); $i++){
        for($j=0;$j < count($lista) -1 -$i;){
            if($lista[$j] > $lista[$j+1]){
                $temp = $lista[$j+1];
                $lista[$j+1] = $lista[$j];
                $lista[$j] = $temp;
            }
        }
    }
    return $lista;
}

$lista = [4,7,56,0,2,18];
var_dump($lista);
echo "Lista ordenada:",bubbleSort($lista);