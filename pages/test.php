<?php

declare(strict_types=1);

function distance(string $strandA, string $strandB): int
{
    $unmatching_chars_count = 0;

    $size = strlen($strandA);
    var_dump($size);
    echo "<br>" . $strandA[0];

    for ($i = 0; $i < $size; $i++) {
        $letterA = $strandA[$i];
        $letterB = $strandB[$i];
        
        if($letterA != $letterB) {
            $unmatching_chars_count++;       
        }
    }

    return $unmatching_chars_count;
}

echo distance("A", "A");