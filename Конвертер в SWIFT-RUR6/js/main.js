function test() {
    var text = document.getElementById('text').value;
    var result = document.getElementById('result');
    var str = document.getElementById('text').value;
    str = str.toUpperCase().replace (/[\А\Б\В\Г\Д\Е\Ё\Ж\З\И\Й\К\Л\М\Н\О\П\Р\С\Т\У\Ф\Х\Ц\Ч\Ш\Щ\Ъ\Ы\Ь\Э\Ю\Я\`\'\#\№\%\&\!\$\;\-\=\<\>\[\]\{\}\"\«\»\*\@\^\~\\\|]/g, function(a){

    // Буквы
    if(a=="А"){return "A"};
    if(a=="Б"){return "B"};
    if(a=="В"){return "V"};
    if(a=="Г"){return "G"};
    if(a=="Д"){return "D"};
    if(a=="Е"){return "E"};
    if(a=="Ё"){return "o"};
    if(a=="Ж"){return "J"};
    if(a=="З"){return "Z"};
    if(a=="И"){return "I"};
    if(a=="Й"){return "i"};
    if(a=="К"){return "K"};
    if(a=="Л"){return "L"};
    if(a=="М"){return "M"};
    if(a=="Н"){return "N"};
    if(a=="О"){return "O"};
    if(a=="П"){return "P"};
    if(a=="Р"){return "R"};
    if(a=="С"){return "S"};
    if(a=="Т"){return "T"};
    if(a=="У"){return "U"};
    if(a=="Ф"){return "F"};
    if(a=="Х"){return "H"};
    if(a=="Ц"){return "C"};
    if(a=="Ч"){return "c"};
    if(a=="Ш"){return "Q"};
    if(a=="Щ"){return "q"};
    if(a=="Ъ"){return "x"};
    if(a=="Ы"){return "Y"};
    if(a=="Ь"){return "X"};
    if(a=="Э"){return "e"};
    if(a=="Ю"){return "u"};
    if(a=="Я"){return "a"};

    // Символы
    if(a=="'"){return "j"};
    if(a=="`"){return "j"};
    if(a=="№"){return "n"};
    if(a=="#"){return "n"};
    if(a=="%"){return "p"};
    if(a=="&"){return "d"};
    if(a=="!"){return "b"};
    if(a=="$"){return "s"};
    if(a==";"){return "v"};
    if(a=="\\"){return "/"};
    if(a=="|"){return "/"};
    if(a=="-"){return "z"};
    if(a=="="){return "r"};
    if(a=="<"){return "("};
    if(a==">"){return ")"};
    if(a=="["){return "("};
    if(a=="]"){return ")"};
    if(a=="{"){return "("};
    if(a=="}"){return ")"};
    if(a=='"'){return "m"};
    if(a=="«"){return "m"};
    if(a=="»"){return "m"};
    if(a=="*"){return "f"};
    if(a=="@"){return "f"};
    if(a=="^"){return "f"};
    if(a=="~"){return "f"};
    });

    result.innerHTML = str;
}
